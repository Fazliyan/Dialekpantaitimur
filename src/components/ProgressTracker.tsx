import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import { ArrowLeft, Trophy, Star, Target, Award, Flame } from "lucide-react";

interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string;
  unlocked: boolean;
  progress: number;
  maxProgress: number;
}

interface ProgressTrackerProps {
  onBack: () => void;
  userProgress: {
    kelantan: number;
    terengganu: number;
    pahang: number;
    totalPoints: number;
    quizScores?: { score: number }[];
    streakDays?: number;
  };
}

export function ProgressTracker({ onBack, userProgress }: ProgressTrackerProps) {
  const achievements: Achievement[] = [
    {
      id: "first_lesson",
      name: "Pemula",
      description: "Selesaikan modul pembelajaran pertama",
      icon: "🎓",
      unlocked: userProgress.totalPoints > 0,
      progress: userProgress.totalPoints > 0 ? 1 : 0,
      maxProgress: 1,
    },
    {
      id: "kelantan_master",
      name: "Pakar Kelantan",
      description: "Kuasai semua frasa dialek Kelantan",
      icon: "🔴",
      unlocked: userProgress.kelantan >= 100,
      progress: userProgress.kelantan,
      maxProgress: 100,
    },
    {
      id: "terengganu_master",
      name: "Pakar Terengganu",
      description: "Kuasai semua frasa dialek Terengganu",
      icon: "🔵",
      unlocked: userProgress.terengganu >= 100,
      progress: userProgress.terengganu,
      maxProgress: 100,
    },
    {
      id: "pahang_master",
      name: "Pakar Pahang",
      description: "Kuasai semua frasa dialek Pahang",
      icon: "🟢",
      unlocked: userProgress.pahang >= 100,
      progress: userProgress.pahang,
      maxProgress: 100,
    },
    {
      id: "all_states",
      name: "Pakar Pantai Timur",
      description: "Kuasai semua dialek Pantai Timur",
      icon: "🏆",
      unlocked:
        userProgress.kelantan >= 100 &&
        userProgress.terengganu >= 100 &&
        userProgress.pahang >= 100,
      progress:
        (userProgress.kelantan + userProgress.terengganu + userProgress.pahang) / 3,
      maxProgress: 100,
    },
    {
      id: "quiz_champion",
      name: "Juara Kuiz",
      description: "Skor 100% dalam mana-mana kuiz",
      icon: "⭐",
      unlocked: userProgress.quizScores?.some((quiz) => quiz.score === 100) || false,
      progress: Math.max(...(userProgress.quizScores?.map((q) => q.score) || [0])),
      maxProgress: 100,
    },
  ];

  const totalLearned =
    (userProgress.kelantan + userProgress.terengganu + userProgress.pahang) / 3;
  const unlockedAchievements = achievements.filter((a) => a.unlocked).length;

  const streak = userProgress.streakDays || 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white p-6">
        <div className="max-w-6xl mx-auto">
          <Button
            onClick={onBack}
            variant="ghost"
            className="text-white hover:bg-white/20 mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Kembali
          </Button>
          <h1 className="text-3xl mb-2">Progres Pembelajaran</h1>
          <p className="text-white/90">
            Jejaki pencapaian dan kemajuan pembelajaran dialek anda
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Stats Grid */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="p-6 bg-gradient-to-br from-yellow-50 to-orange-100 border-orange-200">
            <Trophy className="w-10 h-10 mb-3 text-orange-600" />
            <p className="text-sm text-gray-600 mb-1">Jumlah Mata</p>
            <p className="text-3xl">{userProgress.totalPoints}</p>
          </Card>
          <Card className="p-6 bg-gradient-to-br from-purple-50 to-pink-100 border-purple-200">
            <Award className="w-10 h-10 mb-3 text-purple-600" />
            <p className="text-sm text-gray-600 mb-1">Pencapaian</p>
            <p className="text-3xl">
              {unlockedAchievements}/{achievements.length}
            </p>
          </Card>
          <Card className="p-6 bg-gradient-to-br from-blue-50 to-cyan-100 border-blue-200">
            <Target className="w-10 h-10 mb-3 text-blue-600" />
            <p className="text-sm text-gray-600 mb-1">Progres Keseluruhan</p>
            <p className="text-3xl">{Math.round(totalLearned)}%</p>
          </Card>
          <Card className="p-6 bg-gradient-to-br from-red-50 to-orange-100 border-red-200">
            <Flame className="w-10 h-10 mb-3 text-red-600" />
            <p className="text-sm text-gray-600 mb-1">Api</p>
            <p className="text-3xl">{streak} hari</p>
          </Card>
        </div>

        {/* State Progress */}
        <Card className="p-6 mb-8 bg-white/80 backdrop-blur-sm">
          <h2 className="text-2xl mb-6">Progres Mengikut Negeri</h2>
          <div className="space-y-6">
            <div>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center text-white">
                    K
                  </div>
                  <div>
                    <h3>Kelantan</h3>
                    <p className="text-sm text-gray-600">Dialek Kelantan</p>
                  </div>
                </div>
                <Badge className="bg-red-100 text-red-700 hover:bg-red-200">
                  {userProgress.kelantan}%
                </Badge>
              </div>
              <Progress value={userProgress.kelantan} className="h-3 bg-red-100" />
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white">
                    T
                  </div>
                  <div>
                    <h3>Terengganu</h3>
                    <p className="text-sm text-gray-600">Dialek Terengganu</p>
                  </div>
                </div>
                <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200">
                  {userProgress.terengganu}%
                </Badge>
              </div>
              <Progress value={userProgress.terengganu} className="h-3 bg-blue-100" />
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center text-white">
                    P
                  </div>
                  <div>
                    <h3>Pahang</h3>
                    <p className="text-sm text-gray-600">Dialek Pahang</p>
                  </div>
                </div>
                <Badge className="bg-green-100 text-green-700 hover:bg-green-200">
                  {userProgress.pahang}%
                </Badge>
              </div>
              <Progress value={userProgress.pahang} className="h-3 bg-green-100" />
            </div>
          </div>
        </Card>

        {/* Achievements */}
        <Card className="p-6 bg-white/80 backdrop-blur-sm">
          <h2 className="text-2xl mb-6">Pencapaian</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {achievements.map((achievement) => (
              <Card
                key={achievement.id}
                className={`p-4 border-2 transition-all ${
                  achievement.unlocked
                    ? "border-yellow-400 bg-gradient-to-br from-yellow-50 to-orange-50"
                    : "border-gray-200 bg-gray-50 opacity-60"
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className="text-4xl">{achievement.icon}</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-lg">{achievement.name}</h3>
                      {achievement.unlocked && (
                        <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                      )}
                    </div>
                    <p className="text-sm text-gray-600 mb-3">
                      {achievement.description}
                    </p>
                    {!achievement.unlocked && (
                      <div>
                        <div className="flex justify-between text-xs text-gray-600 mb-1">
                          <span>Progres</span>
                          <span>
                            {achievement.progress}/{achievement.maxProgress}
                          </span>
                        </div>
                        <Progress
                          value={(achievement.progress / achievement.maxProgress) * 100}
                          className="h-2"
                        />
                      </div>
                    )}
                    {achievement.unlocked && (
                      <Badge className="bg-yellow-500 hover:bg-yellow-600 text-white">
                        ✓ Terbuka
                      </Badge>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Card>

        {/* Motivational Message */}
        <Card className="mt-8 p-8 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-center">
          <h3 className="text-2xl mb-2">Teruskan Usaha!</h3>
          <p className="text-white/90">
            {totalLearned < 30
              ? "Anda baru bermula! Teruskan belajar untuk membuka lebih banyak pencapaian."
              : totalLearned < 70
              ? "Prestasi yang baik! Anda sudah separuh jalan untuk menguasai dialek Pantai Timur."
              : totalLearned < 100
              ? "Cemerlang! Hanya tinggal sedikit lagi untuk menguasai semua dialek."
              : "Tahniah! Anda telah menguasai semua dialek Pantai Timur!"}
          </p>
        </Card>
      </div>
    </div>
  );
}