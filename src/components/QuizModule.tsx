import { useState } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import { ArrowLeft, CheckCircle, XCircle, Trophy, RotateCcw } from "lucide-react";
import { getQuizQuestions, type QuizQuestion } from "../data/dialectData";

interface QuizModuleProps {
  type: "kelantan" | "terengganu" | "pahang" | "mixed";
  onBack: () => void;
  onComplete: (score: number) => void;
}

export function QuizModule({ type, onBack, onComplete }: QuizModuleProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [quizComplete, setQuizComplete] = useState(false);

  // Dapatkan data kuiz dari fail dialectData.ts
  const quizQuestions = getQuizQuestions(type);

  const handleAnswerSelect = (index: number) => {
    if (!showResult) {
      setSelectedAnswer(index);
    }
  };

  const handleSubmitAnswer = () => {
    if (selectedAnswer === null) return;

    setShowResult(true);
    if (selectedAnswer === quizQuestions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setQuizComplete(true);
      const finalScore = Math.round((score / quizQuestions.length) * 100);
      onComplete(finalScore);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setQuizComplete(false);
  };

  if (quizComplete) {
    const percentage = Math.round((score / quizQuestions.length) * 100);
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 flex items-center justify-center p-4">
        <Card className="max-w-2xl w-full p-8 text-center">
          <div className="mb-6">
            <Trophy className="w-20 h-20 mx-auto mb-4 text-yellow-500" />
            <h2 className="text-3xl mb-2">Tahniah!</h2>
            <p className="text-gray-600">Anda telah selesai kuiz</p>
          </div>

          <div className="mb-8">
            <div className="text-6xl mb-4 bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
              {percentage}%
            </div>
            <p className="text-lg text-gray-700">
              Skor: {score}/{quizQuestions.length} soalan betul
            </p>
          </div>

          <div className="flex gap-4">
            <Button onClick={handleRestart} variant="outline" className="flex-1">
              <RotateCcw className="w-4 h-4 mr-2" />
              Cuba Lagi
            </Button>
            <Button onClick={onBack} className="flex-1 bg-gradient-to-r from-orange-600 to-pink-600">
              Kembali ke Laman Utama
            </Button>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white p-6">
        <div className="max-w-4xl mx-auto">
          <Button
            onClick={onBack}
            variant="ghost"
            className="text-white hover:bg-white/20 mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Kembali
          </Button>
          <h1 className="text-3xl mb-4">Kuiz Dialek Pantai Timur</h1>
          <div className="flex items-center gap-4">
            <div className="flex-1">
              <Progress
                value={((currentQuestion + 1) / quizQuestions.length) * 100}
                className="h-2 bg-white/30"
              />
            </div>
            <Badge className="bg-white/20 backdrop-blur-sm">
              {currentQuestion + 1}/{quizQuestions.length}
            </Badge>
          </div>
        </div>
      </div>

      {/* Quiz Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Card className="p-8 border-2 border-purple-200 bg-white/80">
          <div className="mb-6">
            <Badge variant="outline" className="mb-4">
              Soalan {currentQuestion + 1}
            </Badge>
            <h2 className="text-2xl mb-2">{quizQuestions[currentQuestion].question}</h2>
            <p className="text-sm text-gray-600">Negeri: {quizQuestions[currentQuestion].state}</p>
          </div>

          <div className="space-y-3 mb-6">
            {quizQuestions[currentQuestion].options.map((option, index) => {
              const isSelected = selectedAnswer === index;
              const isCorrect = index === quizQuestions[currentQuestion].correctAnswer;
              const showCorrect = showResult && isCorrect;
              const showIncorrect = showResult && isSelected && !isCorrect;

              return (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  disabled={showResult}
                  className={`
                    w-full p-4 rounded-lg border-2 text-left transition-all
                    ${
                      showCorrect
                        ? "border-green-500 bg-green-50"
                        : showIncorrect
                        ? "border-red-500 bg-red-50"
                        : isSelected
                        ? "border-purple-500 bg-purple-50"
                        : "border-gray-300 hover:border-purple-300 hover:bg-purple-50/50"
                    }
                    ${showResult ? "cursor-not-allowed" : "cursor-pointer"}
                  `}
                >
                  <div className="flex items-center justify-between">
                    <span>{option}</span>
                    {showCorrect && <CheckCircle className="w-5 h-5 text-green-500" />}
                    {showIncorrect && <XCircle className="w-5 h-5 text-red-500" />}
                  </div>
                </button>
              );
            })}
          </div>

          {showResult && (
            <div className="mb-6 p-4 rounded-lg bg-blue-50 border-2 border-blue-200">
              <p className="text-sm text-blue-900">
                <strong>Penjelasan:</strong> {quizQuestions[currentQuestion].explanation}
              </p>
            </div>
          )}

          <div className="flex gap-4">
            {!showResult ? (
              <Button
                onClick={handleSubmitAnswer}
                disabled={selectedAnswer === null}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600"
              >
                Hantar Jawapan
              </Button>
            ) : (
              <Button
                onClick={handleNextQuestion}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600"
              >
                {currentQuestion < quizQuestions.length - 1 ? "Soalan Seterusnya" : "Lihat Keputusan"}
              </Button>
            )}
          </div>
        </Card>

        {/* Score Card */}
        <Card className="mt-6 p-6 bg-white/80">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Skor Semasa</p>
              <p className="text-2xl">{score}/{quizQuestions.length}</p>
            </div>
            <Trophy className="w-12 h-12 text-yellow-500" />
          </div>
        </Card>
      </div>
    </div>
  );
}