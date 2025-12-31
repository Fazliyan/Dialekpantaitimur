import { Card } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { HelpCircle, Sparkles } from "lucide-react";
import kelantanFlag from "figma:asset/f46fd98e2565072e8e84ed190c6e1e1d626bedb2.png";
import terengganuFlag from "figma:asset/2b4e546fc2f7463101c197b8f3fdcb80a2457fc4.png";
import pahangFlag from "figma:asset/e29376e7151af0cbbfe7a2b815b0ecc8a7a995de.png";

interface QuizSelectionProps {
  onSelectQuiz: (category: "kelantan" | "terengganu" | "pahang" | "mixed") => void;
}

export function QuizSelection({ onSelectQuiz }: QuizSelectionProps) {
  const categories = [
    {
      id: "kelantan" as const,
      name: "Kelantan",
      flagImage: kelantanFlag,
      color: "hover:border-red-500 hover:shadow-lg hover:shadow-red-100",
      gradientColor: "from-red-500 to-red-600",
      questionCount: "20 Soalan",
      isMixed: false,
    },
    {
      id: "terengganu" as const,
      name: "Terengganu",
      flagImage: terengganuFlag,
      color: "hover:border-blue-500 hover:shadow-lg hover:shadow-blue-100",
      gradientColor: "from-blue-500 to-blue-600",
      questionCount: "20 Soalan",
      isMixed: false,
    },
    {
      id: "pahang" as const,
      name: "Pahang",
      flagImage: pahangFlag,
      color: "hover:border-yellow-600 hover:shadow-lg hover:shadow-yellow-100",
      gradientColor: "from-yellow-500 to-yellow-600",
      questionCount: "20 Soalan",
      isMixed: false,
    },
    {
      id: "mixed" as const,
      name: "Campuran",
      flagImage: null,
      color: "hover:border-purple-500 hover:shadow-lg hover:shadow-purple-100",
      gradientColor: "from-purple-500 to-purple-600",
      questionCount: "15 Soalan",
      isMixed: true,
    },
  ];

  return (
    <div className="flex-1 bg-gray-50 min-h-screen p-4 md:p-6 lg:p-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-2xl md:text-3xl lg:text-4xl mb-3 md:mb-4 text-gray-800">Pilih Kategori Kuiz</h1>
          <p className="text-sm md:text-base lg:text-lg text-gray-600">
            Uji pengetahuan anda tentang dialek Pantai Timur dengan kuiz interaktif
          </p>
        </div>

        {/* Quiz Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {categories.map((category) => (
            <Card
              key={category.id}
              onClick={() => onSelectQuiz(category.id)}
              className={`cursor-pointer transition-all duration-300 border-2 border-gray-200 ${category.color} group overflow-hidden hover:scale-105 hover:-translate-y-1`}
            >
              {/* Header - Flag or Mixed Icon */}
              <div className="relative h-24 md:h-32 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                {category.isMixed ? (
                  // Mixed Quiz - Special Design with 3 flags
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-purple-500 to-purple-600 opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex items-center gap-1.5 md:gap-2">
                      <div className="w-12 h-9 md:w-16 md:h-12 rounded overflow-hidden border-2 border-white/80 shadow-lg">
                        <ImageWithFallback
                          src={kelantanFlag}
                          alt="Kelantan"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="w-12 h-9 md:w-16 md:h-12 rounded overflow-hidden border-2 border-white/80 shadow-lg">
                        <ImageWithFallback
                          src={terengganuFlag}
                          alt="Terengganu"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="w-12 h-9 md:w-16 md:h-12 rounded overflow-hidden border-2 border-white/80 shadow-lg">
                        <ImageWithFallback
                          src={pahangFlag}
                          alt="Pahang"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                ) : (
                  // Single State Quiz - Flag Image
                  <>
                    <div className="absolute inset-0 opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                      <ImageWithFallback
                        src={category.flagImage!}
                        alt={`Bendera ${category.name}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className={`absolute inset-0 bg-gradient-to-br ${category.gradientColor} opacity-20 group-hover:opacity-30 transition-opacity duration-300`} />
                  </>
                )}
                
                {/* Badge */}
                <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm rounded-full px-2 md:px-3 py-1 flex items-center gap-1 md:gap-1.5 text-xs">
                  {category.isMixed ? (
                    <Sparkles className="w-3 h-3 md:w-3.5 md:h-3.5 text-purple-600" />
                  ) : (
                    <HelpCircle className="w-3 h-3 md:w-3.5 md:h-3.5 text-teal-600" />
                  )}
                  <span className="text-gray-700">{category.questionCount}</span>
                </div>
              </div>
              
              {/* Category Name */}
              <div className="p-4 md:p-6 text-center">
                <h3 className="text-xl md:text-2xl text-gray-800">
                  {category.name}
                </h3>
                {category.isMixed && (
                  <p className="text-xs md:text-sm text-gray-600 mt-2">
                    Semua dialek dicampur
                  </p>
                )}
              </div>
            </Card>
          ))}
        </div>

        {/* Info Text */}
        <div className="mt-8 md:mt-12 text-center">
          <p className="text-xs md:text-sm text-gray-500">
            Klik pada kategori untuk memulakan kuiz
          </p>
        </div>
      </div>
    </div>
  );
}