import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { BookOpen, Volume2, Trophy, BarChart3, Settings } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface HomePageProps {
  onNavigate: (page: string) => void;
  userProgress: {
    kelantan: number;
    terengganu: number;
    pahang: number;
    totalPoints: number;
  };
}

export function HomePage({ onNavigate, userProgress }: HomePageProps) {
  const states = [
    {
      id: "kelantan",
      name: "Kelantan",
      description: "Belajar loghat Kelantan yang unik dengan sebutan 'tae' dan kosa kata yang khas",
      color: "from-red-500 to-red-600",
      bgColor: "bg-red-50",
      borderColor: "border-red-200",
      progress: userProgress.kelantan,
    },
    {
      id: "terengganu",
      name: "Terengganu",
      description: "Kuasai dialek Terengganu dengan ciri khas penggunaan 'ganung' dan 'bakpe'",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      progress: userProgress.terengganu,
    },
    {
      id: "pahang",
      name: "Pahang",
      description: "Fahami loghat Pahang yang menggabungkan ciri Pantai Timur dan Tengah",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      progress: userProgress.pahang,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      {/* Header */}
      <div className="relative overflow-hidden bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 text-white">
        <div className="absolute inset-0 opacity-20">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1709140006371-14d5b259b5de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyME1hbGF5JTIwYmF0aWt8ZW58MXx8fHwxNzYxMjE3NzQzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 py-12 md:py-16">
          <div className="flex items-center justify-between mb-6">
            <Badge className="bg-white/20 hover:bg-white/30 backdrop-blur-sm border-white/30">
              <Trophy className="w-4 h-4 mr-1" />
              {userProgress.totalPoints} Mata
            </Badge>
            <div className="flex gap-2">
              <Button
                onClick={() => onNavigate("progress")}
                variant="secondary"
                size="sm"
                className="bg-white/20 hover:bg-white/30 backdrop-blur-sm border-white/30"
              >
                <BarChart3 className="w-4 h-4 mr-2" />
                Progres Saya
              </Button>
              <Button
                onClick={() => onNavigate("settings")}
                variant="secondary"
                size="sm"
                className="bg-white/20 hover:bg-white/30 backdrop-blur-sm border-white/30"
              >
                <Settings className="w-4 h-4 mr-2" />
                Tetapan
              </Button>
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl mb-4">
            Aplikasi Dialek Pantai Timur
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl">
            Pelihara warisan linguistik Kelantan, Terengganu & Pahang melalui pembelajaran interaktif dan menyeronokkan
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-8 md:py-12">
        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="p-6 bg-white/80 backdrop-blur-sm border-orange-200 hover:shadow-lg transition-shadow">
            <Volume2 className="w-12 h-12 mb-4 text-orange-600" />
            <h3 className="mb-2">Audio Penutur Jati</h3>
            <p className="text-sm text-gray-600">
              Dengar sebutan tulen dari penutur asal setiap negeri
            </p>
          </Card>
          <Card className="p-6 bg-white/80 backdrop-blur-sm border-orange-200 hover:shadow-lg transition-shadow">
            <BookOpen className="w-12 h-12 mb-4 text-orange-600" />
            <h3 className="mb-2">Kuiz Interaktif</h3>
            <p className="text-sm text-gray-600">
              Uji pemahaman anda dengan kuiz yang mencabar dan menyeronokkan
            </p>
          </Card>
          <Card className="p-6 bg-white/80 backdrop-blur-sm border-orange-200 hover:shadow-lg transition-shadow">
            <Trophy className="w-12 h-12 mb-4 text-orange-600" />
            <h3 className="mb-2">Sistem Gamifikasi</h3>
            <p className="text-sm text-gray-600">
              Kumpul mata dan pencapaian sambil belajar dialek
            </p>
          </Card>
        </div>

        {/* State Cards */}
        <div className="mb-8">
          <h2 className="text-3xl mb-6 text-gray-800">Pilih Negeri untuk Bermula</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {states.map((state) => (
              <Card
                key={state.id}
                className={`overflow-hidden border-2 ${state.borderColor} hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
              >
                <div className={`h-32 bg-gradient-to-br ${state.color} relative overflow-hidden`}>
                  <div className="absolute inset-0 opacity-30">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1643764819085-2261b3e81b53?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNYWxheXNpYW4lMjBlYXN0JTIwY29hc3R8ZW58MXx8fHwxNzYxMjE3NzQzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                      alt={state.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h3 className="text-white text-3xl">{state.name}</h3>
                  </div>
                </div>
                <div className={`p-6 ${state.bgColor}`}>
                  <p className="text-sm text-gray-700 mb-4">{state.description}</p>
                  <div className="mb-4">
                    <div className="flex justify-between text-xs text-gray-600 mb-1">
                      <span>Progres</span>
                      <span>{state.progress}%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${state.color} transition-all duration-500`}
                        style={{ width: `${state.progress}%` }}
                      />
                    </div>
                  </div>
                  <Button
                    onClick={() => onNavigate(`learn-${state.id}`)}
                    className={`w-full bg-gradient-to-r ${state.color} hover:opacity-90`}
                  >
                    <BookOpen className="w-4 h-4 mr-2" />
                    Mula Belajar
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200">
            <h3 className="mb-2">Perbandingan Dialek</h3>
            <p className="text-sm text-gray-600 mb-4">
              Bandingkan perkataan dalam dialek yang berbeza dengan Bahasa Melayu standard
            </p>
            <Button
              onClick={() => onNavigate("compare")}
              variant="outline"
              className="border-purple-300 hover:bg-purple-100"
            >
              Buka Alat Perbandingan
            </Button>
          </Card>
          <Card className="p-6 bg-gradient-to-br from-cyan-50 to-blue-50 border-cyan-200">
            <h3 className="mb-2">Kuiz Campuran</h3>
            <p className="text-sm text-gray-600 mb-4">
              Uji pengetahuan anda tentang semua dialek Pantai Timur sekaligus
            </p>
            <Button
              onClick={() => onNavigate("quiz-mixed")}
              variant="outline"
              className="border-cyan-300 hover:bg-cyan-100"
            >
              Mula Kuiz
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
}