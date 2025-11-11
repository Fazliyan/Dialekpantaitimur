import { useState, useEffect } from "react";
import { HomePage } from "./components/HomePage";
import { LearningModule } from "./components/LearningModule";
import { QuizModule } from "./components/QuizModule";
import { ComparisonTool } from "./components/ComparisonTool";
import { ProgressTracker } from "./components/ProgressTracker";
import { SettingsMenu } from "./components/SettingsMenu";
import { Toaster } from "./components/ui/sonner";
import { toast } from "sonner@2.0.3";
import {
  getUserProgress,
  updateStateProgress,
  addQuizScore,
  type UserProgress,
} from "./utils/storage";

type Page =
  | "home"
  | "learn-kelantan"
  | "learn-terengganu"
  | "learn-pahang"
  | "quiz-kelantan"
  | "quiz-terengganu"
  | "quiz-pahang"
  | "quiz-mixed"
  | "compare"
  | "progress"
  | "settings";

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>("home");
  const [userProgress, setUserProgress] = useState<UserProgress>({
    kelantan: 0,
    terengganu: 0,
    pahang: 0,
    totalPoints: 0,
    completedLessons: [],
    quizScores: [],
    lastActiveDate: new Date().toISOString(),
    streakDays: 0,
    achievements: [],
  });

  // Muat data dari localStorage apabila aplikasi bermula
  useEffect(() => {
    const savedProgress = getUserProgress();
    setUserProgress(savedProgress);
  }, []);

  const handleNavigate = (page: string) => {
    setCurrentPage(page as Page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleLearningComplete = (state: "kelantan" | "terengganu" | "pahang", points: number) => {
    const updatedProgress = updateStateProgress(state, points);
    setUserProgress(updatedProgress);
    
    toast.success(`Tahniah! Anda mendapat ${points} mata!`, {
      description: `Teruskan pembelajaran untuk meningkatkan kemahiran anda.`,
    });
    setTimeout(() => handleNavigate("home"), 2000);
  };

  const handleQuizComplete = (score: number) => {
    const quizType = currentPage.replace("quiz-", "");
    const updatedProgress = addQuizScore(quizType, score, 5); // 5 soalan setiap kuiz
    setUserProgress(updatedProgress);
    
    toast.success(`Kuiz selesai! Skor: ${score}%`, {
      description: `Anda memperoleh ${score} mata!`,
    });
  };

  const handleDataReset = () => {
    const resetProgress: UserProgress = {
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
    setUserProgress(resetProgress);
    setTimeout(() => handleNavigate("home"), 1000);
  };

  return (
    <div className="min-h-screen">
      {currentPage === "home" && (
        <HomePage onNavigate={handleNavigate} userProgress={userProgress} />
      )}

      {currentPage === "learn-kelantan" && (
        <LearningModule
          state="kelantan"
          onBack={() => handleNavigate("home")}
          onComplete={(points) => handleLearningComplete("kelantan", points)}
        />
      )}

      {currentPage === "learn-terengganu" && (
        <LearningModule
          state="terengganu"
          onBack={() => handleNavigate("home")}
          onComplete={(points) => handleLearningComplete("terengganu", points)}
        />
      )}

      {currentPage === "learn-pahang" && (
        <LearningModule
          state="pahang"
          onBack={() => handleNavigate("home")}
          onComplete={(points) => handleLearningComplete("pahang", points)}
        />
      )}

      {currentPage === "quiz-kelantan" && (
        <QuizModule
          type="kelantan"
          onBack={() => handleNavigate("home")}
          onComplete={handleQuizComplete}
        />
      )}

      {currentPage === "quiz-terengganu" && (
        <QuizModule
          type="terengganu"
          onBack={() => handleNavigate("home")}
          onComplete={handleQuizComplete}
        />
      )}

      {currentPage === "quiz-pahang" && (
        <QuizModule
          type="pahang"
          onBack={() => handleNavigate("home")}
          onComplete={handleQuizComplete}
        />
      )}

      {currentPage === "quiz-mixed" && (
        <QuizModule
          type="mixed"
          onBack={() => handleNavigate("home")}
          onComplete={handleQuizComplete}
        />
      )}

      {currentPage === "compare" && (
        <ComparisonTool onBack={() => handleNavigate("home")} />
      )}

      {currentPage === "progress" && (
        <ProgressTracker
          onBack={() => handleNavigate("home")}
          userProgress={userProgress}
        />
      )}

      {currentPage === "settings" && (
        <SettingsMenu
          onBack={() => handleNavigate("home")}
          onDataReset={handleDataReset}
        />
      )}

      <Toaster />
    </div>
  );
}
