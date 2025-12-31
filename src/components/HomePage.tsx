import { Card } from "./ui/card";
import { BookOpen, Volume2, Trophy, Lightbulb } from "lucide-react";

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
  return (
    <div className="flex-1 min-h-screen bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 text-white py-12 md:py-16 px-4">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl mb-4 md:mb-6">Selamat Datang ke Suara Timur</h1>
          <p className="text-base md:text-lg lg:text-xl text-white/90 mb-6 md:mb-8 leading-relaxed">
            Pelajari dialek Kelantan, Terengganu dan Pahang dengan cara yang interaktif dan menyeronokkan
          </p>
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
            <Trophy className="w-4 h-4 md:w-5 md:h-5" />
            <span className="text-base md:text-lg">Mata Anda: {userProgress.totalPoints}</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 md:px-6 py-8 md:py-12">
        {/* Welcome Message */}
        <div className="mb-8 md:mb-12 text-center">
          <h2 className="text-2xl md:text-3xl text-gray-800 mb-3 md:mb-4">
            Jom Mulakan Pembelajaran Anda
          </h2>
          <p className="text-base md:text-lg text-gray-600">
            Gunakan menu di sebelah kiri untuk memilih modul pembelajaran
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          <Card className="p-4 md:p-6 bg-white hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 border-orange-100">
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-orange-100 rounded-full flex items-center justify-center mb-3 md:mb-4">
                <BookOpen className="w-6 h-6 md:w-8 md:h-8 text-orange-600" />
              </div>
              <h3 className="text-base md:text-lg mb-1 md:mb-2 text-gray-800">Belajar</h3>
              <p className="text-xs md:text-sm text-gray-600">
                60 perkataan autentik dari 3 negeri
              </p>
            </div>
          </Card>

          <Card className="p-4 md:p-6 bg-white hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 border-purple-100">
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-purple-100 rounded-full flex items-center justify-center mb-3 md:mb-4">
                <Volume2 className="w-6 h-6 md:w-8 md:h-8 text-purple-600" />
              </div>
              <h3 className="text-base md:text-lg mb-1 md:mb-2 text-gray-800">Kuiz</h3>
              <p className="text-xs md:text-sm text-gray-600">
                75 soalan kuiz interaktif
              </p>
            </div>
          </Card>

          <Card className="p-4 md:p-6 bg-white hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 border-teal-100">
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-teal-100 rounded-full flex items-center justify-center mb-3 md:mb-4">
                <Lightbulb className="w-6 h-6 md:w-8 md:h-8 text-teal-600" />
              </div>
              <h3 className="text-base md:text-lg mb-1 md:mb-2 text-gray-800">Padanan Kata</h3>
              <p className="text-xs md:text-sm text-gray-600">
                Latihan isi tempat kosong
              </p>
            </div>
          </Card>

          <Card className="p-4 md:p-6 bg-white hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 border-cyan-100">
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-cyan-100 rounded-full flex items-center justify-center mb-3 md:mb-4">
                <Trophy className="w-6 h-6 md:w-8 md:h-8 text-cyan-600" />
              </div>
              <h3 className="text-base md:text-lg mb-1 md:mb-2 text-gray-800">Pencapaian</h3>
              <p className="text-xs md:text-sm text-gray-600">
                Jejak progress anda
              </p>
            </div>
          </Card>
        </div>

        {/* Info Section */}
        <div className="mt-8 md:mt-12 bg-white rounded-2xl p-6 md:p-8 shadow-sm border-2 border-gray-100">
          <h3 className="text-xl md:text-2xl text-gray-800 mb-3 md:mb-4 text-center">
            Tentang Suara Timur
          </h3>
          <div className="space-y-3 md:space-y-4 text-gray-600 text-sm md:text-base">
            <p className="leading-relaxed">
              <strong>Suara Timur</strong> adalah aplikasi pembelajaran dialek Pantai Timur yang direka khusus untuk memelihara dan mempopularkan warisan linguistik Melayu dari negeri <strong>Kelantan</strong>, <strong>Terengganu</strong> dan <strong>Pahang</strong>.
            </p>
            <p className="leading-relaxed">
              Aplikasi ini menawarkan modul pembelajaran berasaskan audio penutur jati, kuiz interaktif, latihan padanan kata, serta sistem gamifikasi untuk menjadikan pembelajaran lebih menarik dan berkesan.
            </p>
            <div className="grid grid-cols-3 gap-3 md:gap-4 mt-4 md:mt-6 pt-4 md:pt-6 border-t-2 border-gray-100">
              <div className="text-center">
                <div className="text-2xl md:text-3xl text-orange-600 mb-1 md:mb-2">60</div>
                <div className="text-xs md:text-sm text-gray-600">Perkataan Dialek</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl text-purple-600 mb-1 md:mb-2">75</div>
                <div className="text-xs md:text-sm text-gray-600">Soalan Kuiz</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl text-teal-600 mb-1 md:mb-2">3</div>
                <div className="text-xs md:text-sm text-gray-600">Negeri</div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Guide */}
        <div className="mt-6 md:mt-8 bg-gradient-to-r from-orange-50 to-yellow-50 rounded-2xl p-5 md:p-6 border-2 border-orange-100">
          <h4 className="text-base md:text-lg text-gray-800 mb-3 flex items-center gap-2">
            <Lightbulb className="w-4 h-4 md:w-5 md:h-5 text-orange-600" />
            Panduan Pantas
          </h4>
          <ul className="space-y-2 text-xs md:text-sm text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-orange-600 mt-0.5">📚</span>
              <span><strong>Belajar:</strong> Pilih negeri untuk melihat 20 perkataan dialek dengan sebutan IPA dan ayat contoh</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-orange-600 mt-0.5">🏆</span>
              <span><strong>Kuiz:</strong> Uji pengetahuan anda dengan 20 soalan MCQ untuk setiap negeri atau 15 soalan campuran</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-orange-600 mt-0.5">📖</span>
              <span><strong>Padanan Kata:</strong> Latih kemahiran dengan soalan isi tempat kosong (10 soalan per negeri)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-orange-600 mt-0.5">⚙️</span>
              <span><strong>Tetapan:</strong> Kustomisasi pengalaman pembelajaran anda</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}