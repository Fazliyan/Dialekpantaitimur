import { Card } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { BookOpen } from "lucide-react";
import kelantanFlag from "figma:asset/f46fd98e2565072e8e84ed190c6e1e1d626bedb2.png";
import terengganuFlag from "figma:asset/2b4e546fc2f7463101c197b8f3fdcb80a2457fc4.png";
import pahangFlag from "figma:asset/e29376e7151af0cbbfe7a2b815b0ecc8a7a995de.png";

interface LearnSelectionProps {
  onSelectState: (state: "kelantan" | "terengganu" | "pahang") => void;
}

export function LearnSelection({ onSelectState }: LearnSelectionProps) {
  const states = [
    {
      id: "kelantan" as const,
      name: "Kelantan",
      flagImage: kelantanFlag,
      color: "hover:border-red-500 hover:shadow-lg hover:shadow-red-100",
      gradientColor: "from-red-500 to-red-600",
      wordCount: "20 Perkataan",
    },
    {
      id: "terengganu" as const,
      name: "Terengganu",
      flagImage: terengganuFlag,
      color: "hover:border-blue-500 hover:shadow-lg hover:shadow-blue-100",
      gradientColor: "from-blue-500 to-blue-600",
      wordCount: "20 Perkataan",
    },
    {
      id: "pahang" as const,
      name: "Pahang",
      flagImage: pahangFlag,
      color: "hover:border-yellow-600 hover:shadow-lg hover:shadow-yellow-100",
      gradientColor: "from-yellow-500 to-yellow-600",
      wordCount: "20 Perkataan",
    },
  ];

  return (
    <div className="flex-1 bg-gray-50 min-h-screen p-4 md:p-6 lg:p-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-2xl md:text-3xl lg:text-4xl mb-3 md:mb-4 text-gray-800">Pilih Dialek untuk Belajar</h1>
          <p className="text-sm md:text-base lg:text-lg text-gray-600">
            Pelajari perkataan dan frasa dialek Pantai Timur dengan sebutan audio
          </p>
        </div>

        {/* State Selection Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {states.map((state) => (
            <Card
              key={state.id}
              onClick={() => onSelectState(state.id)}
              className={`cursor-pointer transition-all duration-300 border-2 border-gray-200 ${state.color} group overflow-hidden hover:scale-105 hover:-translate-y-1`}
            >
              {/* Flag Image Header */}
              <div className="relative h-24 md:h-32 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                <div className="absolute inset-0 opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                  <ImageWithFallback
                    src={state.flagImage}
                    alt={`Bendera ${state.name}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className={`absolute inset-0 bg-gradient-to-br ${state.gradientColor} opacity-20 group-hover:opacity-30 transition-opacity duration-300`} />
                
                {/* Badge "20 Perkataan" */}
                <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm rounded-full px-2 md:px-3 py-1 flex items-center gap-1 md:gap-1.5 text-xs">
                  <BookOpen className="w-3 h-3 md:w-3.5 md:h-3.5 text-teal-600" />
                  <span className="text-gray-700">{state.wordCount}</span>
                </div>
              </div>
              
              {/* State Name */}
              <div className="p-4 md:p-6 text-center">
                <h3 className="text-xl md:text-2xl text-gray-800">
                  {state.name}
                </h3>
              </div>
            </Card>
          ))}
        </div>

        {/* Info Text */}
        <div className="mt-8 md:mt-12 text-center">
          <p className="text-xs md:text-sm text-gray-500">
            Klik pada negeri untuk memulakan pembelajaran
          </p>
        </div>
      </div>
    </div>
  );
}