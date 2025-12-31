import { useState } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ArrowLeft, Volume2 } from "lucide-react";
import { 
  getPhrasesForState, 
  kelantanPhrases, 
  terengganuPhrases, 
  pahangPhrases,
  type Phrase 
} from "../data/dialectData";

interface LearningModuleProps {
  state: "kelantan" | "terengganu" | "pahang";
  onBack: () => void;
  onComplete: (points: number) => void;
}

export function LearningModule({ state: initialState, onBack }: LearningModuleProps) {
  const [selectedState, setSelectedState] = useState<"kelantan" | "terengganu" | "pahang" | "all">(initialState);
  const [playingId, setPlayingId] = useState<string | null>(null);

  const stateConfig = {
    kelantan: {
      name: "Kelantan",
      color: "from-red-500 to-red-600",
      badgeColor: "bg-red-100 text-red-700 border-red-300",
      textColor: "text-red-600",
    },
    terengganu: {
      name: "Terengganu",
      color: "from-blue-500 to-blue-600",
      badgeColor: "bg-blue-100 text-blue-700 border-blue-300",
      textColor: "text-blue-600",
    },
    pahang: {
      name: "Pahang",
      color: "from-green-500 to-green-600",
      badgeColor: "bg-green-100 text-green-700 border-green-300",
      textColor: "text-green-600",
    },
    all: {
      name: "Semua Negeri",
      color: "from-purple-500 to-purple-600",
      badgeColor: "bg-purple-100 text-purple-700 border-purple-300",
      textColor: "text-purple-600",
    },
  };

  // Dapatkan data berdasarkan negeri yang dipilih
  const getPhrases = () => {
    if (selectedState === "all") {
      return [
        ...kelantanPhrases.map(p => ({ ...p, state: "kelantan" as const })),
        ...terengganuPhrases.map(p => ({ ...p, state: "terengganu" as const })),
        ...pahangPhrases.map(p => ({ ...p, state: "pahang" as const })),
      ];
    }
    return getPhrasesForState(selectedState).map(p => ({ ...p, state: selectedState }));
  };

  const phrases = getPhrases();
  const config = stateConfig[selectedState === "all" ? "all" : selectedState];

  const handlePlayAudio = (phraseId: string) => {
    setPlayingId(phraseId);
    
    // Simulasi audio playing
    setTimeout(() => {
      setPlayingId(null);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-cyan-50">
      {/* Header */}
      <div className={`bg-gradient-to-r ${config.color} text-white sticky top-0 z-10 shadow-lg`}>
        <div className="max-w-5xl mx-auto px-4 py-4 md:py-6">
          <div className="flex items-center justify-between mb-4">
            <Button
              onClick={onBack}
              variant="ghost"
              className="text-white hover:bg-white/20 text-sm md:text-base"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Kembali
            </Button>

            {/* State Selector Dropdown */}
            <select
              value={selectedState}
              onChange={(e) => setSelectedState(e.target.value as any)}
              className={`bg-white/20 backdrop-blur-sm text-white border-2 border-white/30 rounded-lg px-3 md:px-4 py-2 text-sm md:text-base cursor-pointer hover:bg-white/30 transition-all focus:outline-none focus:ring-2 focus:ring-white/50`}
            >
              <option value="all" className="text-gray-900">Semua Negeri</option>
              <option value="kelantan" className="text-gray-900">Kelantan</option>
              <option value="terengganu" className="text-gray-900">Terengganu</option>
              <option value="pahang" className="text-gray-900">Pahang</option>
            </select>
          </div>

          <div className="text-center">
            <h1 className="text-2xl md:text-3xl lg:text-4xl mb-2">
              Kosa Kata {config.name}
            </h1>
            <p className="text-sm md:text-base text-white/90">
              {phrases.length} perkataan dialek
            </p>
          </div>
        </div>
      </div>

      {/* Word Cards - Scrollable List */}
      <div className="max-w-4xl mx-auto px-4 py-6 md:py-8 space-y-6 md:space-y-8">
        {phrases.map((phrase, index) => {
          const phraseStateConfig = stateConfig[phrase.state];
          const isPlaying = playingId === phrase.id;

          return (
            <Card 
              key={phrase.id} 
              className="bg-white border-2 border-gray-200 hover:border-teal-300 hover:shadow-lg transition-all duration-300"
            >
              <div className="p-4 md:p-6 lg:p-8">
                {/* Header Badges */}
                <div className="flex flex-wrap items-center gap-2 mb-4 md:mb-6">
                  <Badge className={`${phraseStateConfig.badgeColor} border text-xs md:text-sm uppercase tracking-wide`}>
                    {phraseStateConfig.name}
                  </Badge>
                  <Badge variant="outline" className="text-xs md:text-sm">
                    {phrase.category}
                  </Badge>
                  {selectedState === "all" && (
                    <Badge variant="secondary" className="text-xs">
                      #{index + 1}
                    </Badge>
                  )}
                </div>

                {/* Dialect Word */}
                <div className="mb-6 md:mb-8">
                  <h2 className={`text-3xl md:text-4xl lg:text-5xl mb-2 md:mb-3 ${phraseStateConfig.textColor}`}>
                    {phrase.dialect}
                  </h2>
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="text-base md:text-lg lg:text-xl text-gray-600 font-mono">
                      [ {phrase.pronunciation} ]
                    </span>
                    <Button
                      onClick={() => handlePlayAudio(phrase.id)}
                      disabled={isPlaying}
                      size="sm"
                      variant="outline"
                      className="text-xs md:text-sm"
                    >
                      <Volume2 className={`w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2 ${isPlaying ? 'animate-pulse' : ''}`} />
                      {isPlaying ? "Memainkan..." : "Dengar"}
                    </Button>
                  </div>
                </div>

                {/* Meaning */}
                <div className="mb-6">
                  <div className="text-xs tracking-wider text-gray-500 mb-2 uppercase">
                    Maksud
                  </div>
                  <p className="text-xl md:text-2xl text-gray-900">
                    {phrase.standard}
                  </p>
                </div>

                {/* Dialect Sentence */}
                <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-lg p-4 md:p-6 mb-4 border-2 border-teal-100">
                  <div className="text-xs tracking-wider text-teal-700 mb-2 uppercase">
                    Ayat Dialek
                  </div>
                  <p className="text-base md:text-lg lg:text-xl text-gray-900 mb-2 italic">
                    "{phrase.dialectSentence}"
                  </p>
                  <p className="text-xs md:text-sm text-gray-600 font-mono">
                    [ {phrase.dialectSentenceIPA} ]
                  </p>
                </div>

                {/* Standard Translation */}
                <div className="bg-gray-50 rounded-lg p-4 md:p-6 border-2 border-gray-200">
                  <div className="text-xs tracking-wider text-gray-500 mb-2 uppercase">
                    Maksud Ayat
                  </div>
                  <p className="text-base md:text-lg lg:text-xl text-gray-800">
                    "{phrase.standardSentence}"
                  </p>
                </div>
              </div>
            </Card>
          );
        })}

        {/* End Message */}
        <div className="text-center py-8 md:py-12">
          <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full bg-teal-100 mb-4">
            <span className="text-2xl md:text-3xl">🎉</span>
          </div>
          <h3 className="text-lg md:text-xl text-gray-700 mb-2">
            Anda telah melihat semua {phrases.length} perkataan!
          </h3>
          <p className="text-sm md:text-base text-gray-600 mb-6">
            Teruskan pembelajaran anda dengan kuiz atau padanan kata
          </p>
          <Button 
            onClick={onBack}
            className={`bg-gradient-to-r ${config.color} text-white px-6 md:px-8 py-4 md:py-6 text-base md:text-lg`}
          >
            Kembali ke Pilihan Dialek
          </Button>
        </div>
      </div>
    </div>
  );
}