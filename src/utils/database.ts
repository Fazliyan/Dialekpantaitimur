/**
 * Utiliti untuk menguruskan penyimpanan data pengguna menggunakan Supabase Database
 */

import { supabase } from './supabase/client';

export interface UserProgress {
  kelantan: number;
  terengganu: number;
  pahang: number;
  totalPoints: number;
  completedLessons: string[];
  quizScores: QuizScore[];
  lastActiveDate: string;
  streakDays: number;
  achievements: string[];
}

export interface QuizScore {
  type: string;
  score: number;
  date: string;
  totalQuestions: number;
}

/**
 * Dapatkan data progres pengguna dari Supabase
 */
export const getUserProgress = async (userId: string): Promise<UserProgress> => {
  try {
    // Dapatkan user progress
    const { data: progress, error: progressError } = await supabase
      .from('user_progress')
      .select('*')
      .eq('user_id', userId)
      .single();

    if (progressError && progressError.code !== 'PGRST116') {
      // PGRST116 = no rows returned, which is fine for new users
      console.error('Error fetching user progress:', progressError);
    }

    // Dapatkan quiz scores
    const { data: quizScores, error: quizError } = await supabase
      .from('quiz_scores')
      .select('*')
      .eq('user_id', userId)
      .order('created_at', { ascending: false });

    if (quizError) {
      console.error('Error fetching quiz scores:', quizError);
    }

    // Jika tiada data, return data awal
    if (!progress) {
      return {
        kelantan: 0,
        terengganu: 0,
        pahang: 0,
        totalPoints: 0,
        completedLessons: [],
        quizScores: [],
        lastActiveDate: new Date().toISOString(),
        streakDays: 0,
        achievements: [],
      };
    }

    // Format quiz scores
    const formattedQuizScores: QuizScore[] = (quizScores || []).map((quiz) => ({
      type: quiz.quiz_type,
      score: quiz.score,
      date: quiz.created_at,
      totalQuestions: quiz.total_questions,
    }));

    return {
      kelantan: progress.kelantan,
      terengganu: progress.terengganu,
      pahang: progress.pahang,
      totalPoints: progress.total_points,
      completedLessons: progress.completed_lessons || [],
      quizScores: formattedQuizScores,
      lastActiveDate: progress.last_active_date,
      streakDays: progress.streak_days,
      achievements: progress.achievements || [],
    };
  } catch (error) {
    console.error('Error in getUserProgress:', error);
    // Return default data on error
    return {
      kelantan: 0,
      terengganu: 0,
      pahang: 0,
      totalPoints: 0,
      completedLessons: [],
      quizScores: [],
      lastActiveDate: new Date().toISOString(),
      streakDays: 0,
      achievements: [],
    };
  }
};

/**
 * Simpan data progres pengguna ke Supabase
 */
export const saveUserProgress = async (
  userId: string,
  progress: UserProgress
): Promise<void> => {
  try {
    const { error } = await supabase
      .from('user_progress')
      .upsert({
        user_id: userId,
        kelantan: progress.kelantan,
        terengganu: progress.terengganu,
        pahang: progress.pahang,
        total_points: progress.totalPoints,
        completed_lessons: progress.completedLessons,
        last_active_date: progress.lastActiveDate,
        streak_days: progress.streakDays,
        achievements: progress.achievements,
        updated_at: new Date().toISOString(),
      });

    if (error) {
      console.error('Error saving user progress:', error);
      throw error;
    }
  } catch (error) {
    console.error('Error in saveUserProgress:', error);
    throw error;
  }
};

/**
 * Kemas kini progres pembelajaran untuk sesuatu negeri
 */
export const updateStateProgress = async (
  userId: string,
  state: 'kelantan' | 'terengganu' | 'pahang',
  points: number
): Promise<UserProgress> => {
  const currentProgress = await getUserProgress(userId);

  const updatedProgress: UserProgress = {
    ...currentProgress,
    [state]: Math.min(100, currentProgress[state] + points),
    totalPoints: currentProgress.totalPoints + points,
    lastActiveDate: new Date().toISOString(),
  };

  // Update streak
  updatedProgress.streakDays = calculateStreak(
    currentProgress.lastActiveDate,
    updatedProgress.lastActiveDate,
    currentProgress.streakDays
  );

  await saveUserProgress(userId, updatedProgress);
  return updatedProgress;
};

/**
 * Tambah skor kuiz
 */
export const addQuizScore = async (
  userId: string,
  type: string,
  score: number,
  totalQuestions: number
): Promise<UserProgress> => {
  try {
    // Simpan quiz score
    const { error: quizError } = await supabase.from('quiz_scores').insert({
      user_id: userId,
      quiz_type: type,
      score: score,
      total_questions: totalQuestions,
    });

    if (quizError) {
      console.error('Error saving quiz score:', quizError);
      throw quizError;
    }

    // Update total points
    const currentProgress = await getUserProgress(userId);

    const updatedProgress: UserProgress = {
      ...currentProgress,
      totalPoints: currentProgress.totalPoints + score,
      lastActiveDate: new Date().toISOString(),
    };

    // Update streak
    updatedProgress.streakDays = calculateStreak(
      currentProgress.lastActiveDate,
      updatedProgress.lastActiveDate,
      currentProgress.streakDays
    );

    await saveUserProgress(userId, updatedProgress);
    return updatedProgress;
  } catch (error) {
    console.error('Error in addQuizScore:', error);
    throw error;
  }
};

/**
 * Tandakan pelajaran sebagai selesai
 */
export const markLessonComplete = async (
  userId: string,
  lessonId: string
): Promise<UserProgress> => {
  const currentProgress = await getUserProgress(userId);

  if (!currentProgress.completedLessons.includes(lessonId)) {
    const updatedProgress: UserProgress = {
      ...currentProgress,
      completedLessons: [...currentProgress.completedLessons, lessonId],
      lastActiveDate: new Date().toISOString(),
    };

    await saveUserProgress(userId, updatedProgress);
    return updatedProgress;
  }

  return currentProgress;
};

/**
 * Buka pencapaian
 */
export const unlockAchievement = async (
  userId: string,
  achievementId: string
): Promise<UserProgress> => {
  const currentProgress = await getUserProgress(userId);

  if (!currentProgress.achievements.includes(achievementId)) {
    const updatedProgress: UserProgress = {
      ...currentProgress,
      achievements: [...currentProgress.achievements, achievementId],
      totalPoints: currentProgress.totalPoints + 50, // Bonus mata untuk pencapaian
    };

    await saveUserProgress(userId, updatedProgress);
    return updatedProgress;
  }

  return currentProgress;
};

/**
 * Kira streak hari berturut-turut
 */
const calculateStreak = (
  lastActiveDate: string,
  currentDate: string,
  currentStreak: number
): number => {
  const last = new Date(lastActiveDate);
  const current = new Date(currentDate);

  // Set masa ke tengah malam untuk perbandingan hari sahaja
  last.setHours(0, 0, 0, 0);
  current.setHours(0, 0, 0, 0);

  const diffTime = current.getTime() - last.getTime();
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays === 0) {
    // Hari yang sama
    return currentStreak;
  } else if (diffDays === 1) {
    // Hari berturut-turut
    return currentStreak + 1;
  } else {
    // Streak terputus
    return 1;
  }
};

/**
 * Dapatkan profil pengguna
 */
export const getUserProfile = async (userId: string) => {
  try {
    const { data, error } = await supabase
      .from('user_profiles')
      .select('*')
      .eq('user_id', userId)
      .single();

    if (error) {
      console.error('Error fetching user profile:', error);
      return null;
    }

    return data;
  } catch (error) {
    console.error('Error in getUserProfile:', error);
    return null;
  }
};

/**
 * Cipta atau update profil pengguna
 */
export const upsertUserProfile = async (
  userId: string,
  fullName: string,
  email: string
) => {
  try {
    const { error } = await supabase.from('user_profiles').upsert({
      user_id: userId,
      full_name: fullName,
      email: email,
      updated_at: new Date().toISOString(),
    });

    if (error) {
      console.error('Error upserting user profile:', error);
      throw error;
    }
  } catch (error) {
    console.error('Error in upsertUserProfile:', error);
    throw error;
  }
};

/**
 * Dapatkan leaderboard (top users by points)
 */
export const getLeaderboard = async (limit: number = 10) => {
  try {
    const { data, error } = await supabase
      .from('user_progress')
      .select(`
        user_id,
        total_points,
        user_profiles!inner(full_name)
      `)
      .order('total_points', { ascending: false })
      .limit(limit);

    if (error) {
      console.error('Error fetching leaderboard:', error);
      return [];
    }

    return data || [];
  } catch (error) {
    console.error('Error in getLeaderboard:', error);
    return [];
  }
};
