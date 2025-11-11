import { useState } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import { ArrowLeft, Play, Pause, Volume2, CheckCircle, Star } from "lucide-react";
import { getPhrasesForState, type Phrase } from "../data/dialectData";

interface LearningModuleProps {
  state: "kelantan" | "terengganu" | "pahang";
  onBack: () => void;
  onComplete: (points: number) => void;
}

export function LearningModule({ state, onBack, onComplete }: LearningModuleProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [completedPhrases, setCompletedPhrases] = useState<Set<string>>(new Set());
  const [isPlaying, setIsPlaying] = useState(false);

  const stateConfig = {
    kelantan: {
      name: "Kelantan",
      color: "from-red-500 to-red-600",
      bgColor: "bg-red-50",
      borderColor: "border-red-300",
    },
    terengganu: {
      name: "Terengganu",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-300",
    },
    pahang: {
      name: "Pahang",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-300",
    },
  };

  // Dapatkan data dari fail dialectData.ts
  const currentPhrases = getPhrasesForState(state);
  const currentPhrase = currentPhrases[currentIndex];
  const config = stateConfig[state];
  const progress = (completedPhrases.size / currentPhrases.length) * 100;

  const handlePlayAudio = () => {
    setIsPlaying(true);
    
    // Jika ada URL audio, main audio
    if (currentPhrase?.audioUrl && currentPhrase.audioUrl.trim() !== "") {
      const audio = new Audio(currentPhrase.audioUrl);
      audio.play().catch(err => {
        console.error("Error playing audio:", err);
      });
      audio.onended = () => setIsPlaying(false);
    } else {
      // Simulasi audio playback jika tiada audio
      setTimeout(() => setIsPlaying(false), 2000);
    }
  };

  const handleMarkComplete = () => {
    if (currentPhrase) {
      const newCompleted = new Set(completedPhrases);
      newCompleted.add(currentPhrase.id);
      setCompletedPhrases(newCompleted);

      if (newCompleted.size === currentPhrases.length) {
        onComplete(100);
      }
    }
  };

  const handleNext = () => {
    if (currentIndex < currentPhrases.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  if (!currentPhrase) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      {/* Header */}
      <div className={`bg-gradient-to-r ${config.color} text-white p-6`}>
        <div className="max-w-4xl mx-auto">
          <Button
            onClick={onBack}
            variant="ghost"
            className="text-white hover:bg-white/20 mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Kembali
          </Button>
          <h1 className="text-3xl mb-2">Modul Pembelajaran {config.name}</h1>
          <div className="flex items-center gap-4">
            <div className="flex-1">
              <Progress value={progress} className="h-2 bg-white/30" />
            </div>
            <Badge className="bg-white/20 backdrop-blur-sm">
              {completedPhrases.size}/{currentPhrases.length}
            </Badge>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Navigation Pills */}
        <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
          {currentPhrases.map((phrase, index) => (
            <button
              key={phrase.id}
              onClick={() => setCurrentIndex(index)}
              className={`
                flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all
                ${
                  index === currentIndex
                    ? `bg-gradient-to-br ${config.color} text-white shadow-lg scale-110`
                    : completedPhrases.has(phrase.id)
                    ? "bg-green-500 text-white"
                    : `bg-gray-200 text-gray-600`
                }
              `}
            >
              {completedPhrases.has(phrase.id) ? (
                <CheckCircle className="w-5 h-5" />
              ) : (
                index + 1
              )}
            </button>
          ))}
        </div>

        {/* Learning Card */}
        <Card className={`p-8 border-2 ${config.borderColor} ${config.bgColor} mb-6`}>
          <Badge className="mb-4" variant="outline">
            {currentPhrase.category}
          </Badge>

          <div className="space-y-6">
            {/* Dialect Word */}
            <div>
              <label className="text-sm text-gray-600 mb-2 block">Dialek {config.name}</label>
              <div className="flex items-center gap-4">
                <h2 className={`text-5xl bg-gradient-to-r ${config.color} bg-clip-text text-transparent`}>
                  {currentPhrase.dialect}
                </h2>
                <Button
                  onClick={handlePlayAudio}
                  size="lg"
                  className={`rounded-full bg-gradient-to-r ${config.color}`}
                  disabled={isPlaying}
                >
                  {isPlaying ? (
                    <Pause className="w-6 h-6" />
                  ) : (
                    <Play className="w-6 h-6" />
                  )}
                </Button>
              </div>
            </div>

            {/* Standard Malay */}
            <div>
              <label className="text-sm text-gray-600 mb-2 block">Bahasa Melayu Standard</label>
              <p className="text-3xl text-gray-800">{currentPhrase.standard}</p>
            </div>

            {/* Pronunciation Guide */}
            <div className="bg-white/60 rounded-lg p-4">
              <label className="text-sm text-gray-600 mb-2 block flex items-center gap-2">
                <Volume2 className="w-4 h-4" />
                Panduan Sebutan
              </label>
              <p className="text-lg">{currentPhrase.pronunciation}</p>
            </div>

            {/* Example */}
            <div className="bg-white/60 rounded-lg p-4">
              <label className="text-sm text-gray-600 mb-2 block">Contoh Penggunaan</label>
              <p className="text-lg">{currentPhrase.example}</p>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-4 mt-8">
            <Button
              onClick={handlePrevious}
              disabled={currentIndex === 0}
              variant="outline"
              className="flex-1"
            >
              Sebelum
            </Button>
            {!completedPhrases.has(currentPhrase.id) && (
              <Button
                onClick={handleMarkComplete}
                className={`flex-1 bg-gradient-to-r ${config.color}`}
              >
                <Star className="w-4 h-4 mr-2" />
                Tandakan Selesai
              </Button>
            )}
            <Button
              onClick={handleNext}
              disabled={currentIndex === currentPhrases.length - 1}
              className={`flex-1 bg-gradient-to-r ${config.color}`}
            >
              Seterusnya
            </Button>
          </div>
        </Card>

        {/* Quick Reference */}
        <Card className="p-6 bg-white/80">
          <h3 className="mb-4">Rujukan Pantas - Semua Frasa</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {currentPhrases.map((phrase, index) => (
              <button
                key={phrase.id}
                onClick={() => setCurrentIndex(index)}
                className={`
                  text-left p-4 rounded-lg border-2 transition-all
                  ${
                    index === currentIndex
                      ? `${config.borderColor} ${config.bgColor}`
                      : "border-gray-200 hover:border-gray-300"
                  }
                `}
              >
                <div className="flex items-start justify-between mb-2">
                  <span className={`bg-gradient-to-r ${config.color} bg-clip-text text-transparent`}>
                    {phrase.dialect}
                  </span>
                  {completedPhrases.has(phrase.id) && (
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  )}
                </div>
                <p className="text-sm text-gray-600">{phrase.standard}</p>
              </button>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}