import { useState, useEffect } from "react";
import { Sidebar } from "./components/Sidebar";
import { HomePage } from "./components/HomePage";
import { LearnSelection } from "./components/LearnSelection";
import { LearningModule } from "./components/LearningModule";
import { QuizSelection } from "./components/QuizSelection";
import { QuizModule } from "./components/QuizModule";
import { PadananKataSelection } from "./components/PadananKataSelection";
import { PadananKata } from "./components/PadananKata";
import { ProgressTracker } from "./components/ProgressTracker";
import { SettingsPage } from "./components/SettingsPage";
import { Toaster } from "./components/ui/sonner";
import { toast } from "sonner";
import { Menu, X } from "lucide-react";
import {
  getUserProgress,
  updateStateProgress,
  addQuizScore,
  resetAllProgress,
  type UserProgress,
} from "./utils/storage";

type Page =
  | "home"
  | "learn"
  | "learning-kelantan"
  | "learning-terengganu"
  | "learning-pahang"
  | "quiz"
  | "quiz-kelantan"
  | "quiz-terengganu"
  | "quiz-pahang"
  | "quiz-mixed"
  | "padanan-kata"
  | "padanan-kata-kelantan"
  | "padanan-kata-terengganu"
  | "padanan-kata-pahang"
  | "comparison"
  | "progress"
  | "settings";

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNavigate = (page: string) => {
    // Map sidebar navigation to internal pages
    const pageMap: Record<string, Page> = {
      home: "home",
      learn: "learn",
      quiz: "quiz",
      padanan_kata: "padanan-kata",
      settings: "settings",
    };

    const mappedPage = pageMap[page] || page;
    setCurrentPage(mappedPage as Page);
    setMobileMenuOpen(false); // Close mobile menu on navigation
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSelectState = (state: "kelantan" | "terengganu" | "pahang") => {
    setCurrentPage(`learning-${state}` as Page);
  };

  const handleSelectQuiz = (category: "kelantan" | "terengganu" | "pahang" | "mixed") => {
    setCurrentPage(`quiz-${category}` as Page);
  };

  const handleLearningComplete = (
    state: "kelantan" | "terengganu" | "pahang",
    points: number
  ) => {
    const updatedProgress = updateStateProgress(state, points);
    setUserProgress(updatedProgress);

    toast.success(`Tahniah! Anda mendapat ${points} mata!`, {
      description: `Teruskan pembelajaran untuk meningkatkan kemahiran anda.`,
    });
    setTimeout(() => handleNavigate("learn"), 2000);
  };

  const handleQuizComplete = (score: number) => {
    const quizType = currentPage.replace("quiz-", "");
    const updatedProgress = addQuizScore(quizType, score, 20); // 20 soalan
    setUserProgress(updatedProgress);

    const percentage = Math.round((score / 20) * 100);
    toast.success(`Kuiz selesai! Skor: ${percentage}%`, {
      description: `Anda menjawab ${score} daripada 20 soalan dengan betul!`,
    });
  };

  const handlePadananKataComplete = (score: number, total: number) => {
    const percentage = Math.round((score / total) * 100);
    const points = score * 5; // 5 mata per jawapan betul
    
    // Add points to total
    const updatedProgress = {
      ...userProgress,
      totalPoints: userProgress.totalPoints + points,
    };
    setUserProgress(updatedProgress);
    localStorage.setItem("userProgress", JSON.stringify(updatedProgress));

    toast.success(`Padanan Kata selesai! Skor: ${percentage}%`, {
      description: `Anda menjawab ${score} daripada ${total} soalan dengan betul! +${points} mata`,
    });
  };

  const handleResetProgress = () => {
    if (confirm("Adakah anda pasti mahu reset semua progres? Tindakan ini tidak boleh dibatalkan.")) {
      resetAllProgress();
      const resetProgress = getUserProgress();
      setUserProgress(resetProgress);
      toast.success("Progres telah direset!", {
        description: "Semua data pembelajaran dan kuiz telah dipadam.",
      });
      handleNavigate("home");
    }
  };

  // Determine if we should show sidebar (hide on full-screen learning/quiz)
  const showSidebar = ![
    "learning-kelantan",
    "learning-terengganu",
    "learning-pahang",
    "quiz-kelantan",
    "quiz-terengganu",
    "quiz-pahang",
    "quiz-mixed",
    "padanan-kata-kelantan",
    "padanan-kata-terengganu",
    "padanan-kata-pahang",
  ].includes(currentPage);

  return (
    <div className="flex min-h-screen relative">
      {/* Mobile Menu Button - Fixed Top Left */}
      {showSidebar && (
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden fixed top-4 left-4 z-50 bg-teal-600 text-white p-3 rounded-lg shadow-lg hover:bg-teal-700 transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      )}

      {/* Overlay for mobile menu */}
      {mobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar - Desktop: always visible, Mobile: drawer */}
      {showSidebar && (
        <div
          className={`
            fixed lg:static inset-y-0 left-0 z-40
            transform transition-transform duration-300 ease-in-out
            ${mobileMenuOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
          `}
        >
          <Sidebar currentView={currentPage} onNavigate={handleNavigate} />
        </div>
      )}

      {/* Main Content Area */}
      <div className="flex-1 w-full">
        {currentPage === "home" && (
          <HomePage onNavigate={handleNavigate} userProgress={userProgress} />
        )}

        {currentPage === "learn" && (
          <LearnSelection onSelectState={handleSelectState} />
        )}

        {currentPage === "learning-kelantan" && (
          <LearningModule
            state="kelantan"
            onBack={() => handleNavigate("learn")}
            onComplete={(points) => handleLearningComplete("kelantan", points)}
          />
        )}

        {currentPage === "learning-terengganu" && (
          <LearningModule
            state="terengganu"
            onBack={() => handleNavigate("learn")}
            onComplete={(points) => handleLearningComplete("terengganu", points)}
          />
        )}

        {currentPage === "learning-pahang" && (
          <LearningModule
            state="pahang"
            onBack={() => handleNavigate("learn")}
            onComplete={(points) => handleLearningComplete("pahang", points)}
          />
        )}

        {currentPage === "quiz" && (
          <QuizSelection onSelectQuiz={handleSelectQuiz} />
        )}

        {currentPage === "quiz-kelantan" && (
          <QuizModule
            type="kelantan"
            onBack={() => handleNavigate("quiz")}
            onComplete={handleQuizComplete}
          />
        )}

        {currentPage === "quiz-terengganu" && (
          <QuizModule
            type="terengganu"
            onBack={() => handleNavigate("quiz")}
            onComplete={handleQuizComplete}
          />
        )}

        {currentPage === "quiz-pahang" && (
          <QuizModule
            type="pahang"
            onBack={() => handleNavigate("quiz")}
            onComplete={handleQuizComplete}
          />
        )}

        {currentPage === "quiz-mixed" && (
          <QuizModule
            type="mixed"
            onBack={() => handleNavigate("quiz")}
            onComplete={handleQuizComplete}
          />
        )}

        {currentPage === "padanan-kata" && (
          <PadananKataSelection onNavigate={handleNavigate} />
        )}

        {currentPage === "padanan-kata-kelantan" && (
          <PadananKata
            state="kelantan"
            onBack={() => handleNavigate("padanan-kata")}
            onComplete={handlePadananKataComplete}
          />
        )}

        {currentPage === "padanan-kata-terengganu" && (
          <PadananKata
            state="terengganu"
            onBack={() => handleNavigate("padanan-kata")}
            onComplete={handlePadananKataComplete}
          />
        )}

        {currentPage === "padanan-kata-pahang" && (
          <PadananKata
            state="pahang"
            onBack={() => handleNavigate("padanan-kata")}
            onComplete={handlePadananKataComplete}
          />
        )}

        {currentPage === "progress" && (
          <ProgressTracker
            onBack={() => handleNavigate("home")}
            userProgress={userProgress}
          />
        )}

        {currentPage === "settings" && (
          <SettingsPage onResetProgress={handleResetProgress} />
        )}
      </div>

      <Toaster />
    </div>
  );
}