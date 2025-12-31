/**
 * Utiliti untuk menguruskan penyimpanan data pengguna
 * Menggunakan localStorage untuk penyimpanan data tempatan di pelayar
 */

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

const STORAGE_KEY = "dialek_pantai_timur_progress";

/**
 * Dapatkan data progres pengguna dari localStorage
 */
export const getUserProgress = (): UserProgress => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (error) {
    console.error("Ralat membaca data dari localStorage:", error);
  }

  // Return data awal jika tiada data tersimpan
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
};

/**
 * Simpan data progres pengguna ke localStorage
 */
export const saveUserProgress = (progress: UserProgress): void => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch (error) {
    console.error("Ralat menyimpan data ke localStorage:", error);
  }
};

/**
 * Kemas kini progres pembelajaran untuk sesuatu negeri
 */
export const updateStateProgress = (
  state: "kelantan" | "terengganu" | "pahang",
  points: number
): UserProgress => {
  const currentProgress = getUserProgress();
  
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

  saveUserProgress(updatedProgress);
  return updatedProgress;
};

/**
 * Tambah skor kuiz
 */
export const addQuizScore = (
  type: string,
  score: number,
  totalQuestions: number
): UserProgress => {
  const currentProgress = getUserProgress();
  
  const newQuizScore: QuizScore = {
    type,
    score,
    date: new Date().toISOString(),
    totalQuestions,
  };

  const updatedProgress: UserProgress = {
    ...currentProgress,
    quizScores: [...currentProgress.quizScores, newQuizScore],
    totalPoints: currentProgress.totalPoints + score,
    lastActiveDate: new Date().toISOString(),
  };

  // Update streak
  updatedProgress.streakDays = calculateStreak(
    currentProgress.lastActiveDate,
    updatedProgress.lastActiveDate,
    currentProgress.streakDays
  );

  saveUserProgress(updatedProgress);
  return updatedProgress;
};

/**
 * Tandakan pelajaran sebagai selesai
 */
export const markLessonComplete = (lessonId: string): UserProgress => {
  const currentProgress = getUserProgress();
  
  if (!currentProgress.completedLessons.includes(lessonId)) {
    const updatedProgress: UserProgress = {
      ...currentProgress,
      completedLessons: [...currentProgress.completedLessons, lessonId],
      lastActiveDate: new Date().toISOString(),
    };

    saveUserProgress(updatedProgress);
    return updatedProgress;
  }

  return currentProgress;
};

/**
 * Buka pencapaian
 */
export const unlockAchievement = (achievementId: string): UserProgress => {
  const currentProgress = getUserProgress();
  
  if (!currentProgress.achievements.includes(achievementId)) {
    const updatedProgress: UserProgress = {
      ...currentProgress,
      achievements: [...currentProgress.achievements, achievementId],
      totalPoints: currentProgress.totalPoints + 50, // Bonus mata untuk pencapaian
    };

    saveUserProgress(updatedProgress);
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
 * Reset semua data pengguna (untuk tujuan testing atau reset)
 */
export const resetUserProgress = (): void => {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    console.error("Ralat mereset data:", error);
  }
};

/**
 * Reset semua progres dan return default progress
 */
export const resetAllProgress = (): UserProgress => {
  resetUserProgress();
  return getUserProgress();
};

/**
 * Export data pengguna untuk backup
 */
export const exportUserData = (): string => {
  const progress = getUserProgress();
  return JSON.stringify(progress, null, 2);
};

/**
 * Import data pengguna dari backup
 */
export const importUserData = (jsonData: string): boolean => {
  try {
    const data = JSON.parse(jsonData);
    saveUserProgress(data);
    return true;
  } catch (error) {
    console.error("Ralat mengimport data:", error);
    return false;
  }
};