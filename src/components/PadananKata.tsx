import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Progress } from "./ui/progress";
import { ArrowLeft, Check, X, Lightbulb } from "lucide-react";
import { 
  kelantanPhrases, 
  terengganuPhrases, 
  pahangPhrases,
  type Phrase 
} from "../data/dialectData";

interface PadananKataProps {
  onBack: () => void;
  state: "kelantan" | "terengganu" | "pahang";
  onComplete?: (score: number, total: number) => void;
}

interface QuizQuestion {
  standardSentence: string;
  dialectSentence: string;
  dialectSentenceWithBlank: string;
  correctAnswer: string;
  options: string[];
  state: string;
}

export function PadananKata({ onBack, state, onComplete }: PadananKataProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);

  // Generate questions dari data
  useEffect(() => {
    // Get phrases based on selected state
    let statePhrases: Phrase[] = [];
    let stateName = "";
    
    if (state === "kelantan") {
      statePhrases = kelantanPhrases;
      stateName = "Kelantan";
    } else if (state === "terengganu") {
      statePhrases = terengganuPhrases;
      stateName = "Terengganu";
    } else {
      statePhrases = pahangPhrases;
      stateName = "Pahang";
    }

    // Filter phrases yang ada ayat lengkap
    const validPhrases = statePhrases.filter(
      p => p.dialectSentence && p.standardSentence && p.dialect
    );

    // Shuffle dan ambil 10 soalan
    const shuffled = [...validPhrases].sort(() => Math.random() - 0.5);
    const selectedPhrases = shuffled.slice(0, 10);

    // Generate questions dengan blank
    const generatedQuestions: QuizQuestion[] = selectedPhrases.map((phrase) => {
      // Create blank in sentence by replacing the dialect word
      const dialectWord = phrase.dialect;
      const sentenceWithBlank = phrase.dialectSentence.replace(
        new RegExp(`\\b${dialectWord}\\b`, 'i'),
        '____'
      );

      // Get 3 wrong options from same state
      const wrongOptions = statePhrases
        .filter(p => p.dialect !== dialectWord)
        .map(p => p.dialect)
        .sort(() => Math.random() - 0.5)
        .slice(0, 3);

      // Combine and shuffle options
      const options = [dialectWord, ...wrongOptions].sort(() => Math.random() - 0.5);

      return {
        standardSentence: phrase.standardSentence,
        dialectSentence: phrase.dialectSentence,
        dialectSentenceWithBlank: sentenceWithBlank,
        correctAnswer: dialectWord,
        options,
        state: stateName,
      };
    });

    setQuestions(generatedQuestions);
  }, [state]);

  const handleAnswerSelect = (answer: string) => {
    if (showResult) return;
    
    setSelectedAnswer(answer);
    setShowResult(true);

    if (answer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      // Calculate final score (check if current answer is correct)
      const isCurrentCorrect = selectedAnswer === questions[currentQuestion].correctAnswer;
      const finalScore = isCurrentCorrect ? score + 1 : score;
      
      // Save score to storage
      if (onComplete) {
        onComplete(finalScore, questions.length);
      }
      
      // Show result and go back
      alert(`Tahniah! Skor anda: ${finalScore}/${questions.length}`);
      onBack();
    }
  };

  if (questions.length === 0) {
    return (
      <div className="flex-1 flex items-center justify-center bg-gray-50">
        <p className="text-gray-500">Memuatkan soalan...</p>
      </div>
    );
  }

  const question = questions[currentQuestion];
  const isCorrect = selectedAnswer === question.correctAnswer;
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="flex-1 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 p-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Button
            variant="ghost"
            onClick={onBack}
            className="text-gray-600"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Tukar Dialek
          </Button>
          <div className="text-sm text-teal-600">
            Soalan {currentQuestion + 1} / {questions.length}
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="bg-white border-b border-gray-200 px-4 pb-4">
        <div className="max-w-4xl mx-auto">
          <Progress value={progress} className="h-2" />
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          {/* Standard Translation */}
          <div className="text-center mb-12">
            <div className="text-xs tracking-wider text-gray-500 mb-3">
              TERJEMAHAN STANDARD
            </div>
            <p className="text-xl text-gray-700 italic">
              "{question.standardSentence}"
            </p>
          </div>

          {/* Dialect Sentence with Blank */}
          <div className="text-center mb-12">
            <div className="text-xs tracking-wider text-teal-600 mb-3">
              AYAT DIALEK
            </div>
            <p className="text-2xl text-gray-900">
              {question.dialectSentenceWithBlank}
            </p>
          </div>

          {/* Options */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            {question.options.map((option, index) => {
              const isSelected = selectedAnswer === option;
              const isCorrectOption = option === question.correctAnswer;
              
              let buttonClass = "h-16 text-lg transition-all";
              
              if (showResult) {
                if (isCorrectOption) {
                  buttonClass += " bg-green-500 text-white hover:bg-green-600 border-green-600";
                } else if (isSelected && !isCorrectOption) {
                  buttonClass += " bg-red-500 text-white hover:bg-red-600 border-red-600";
                } else {
                  buttonClass += " bg-gray-100 text-gray-400 cursor-not-allowed";
                }
              } else {
                buttonClass += isSelected
                  ? " bg-teal-100 border-teal-500 border-2"
                  : " bg-white border-2 border-gray-200 hover:border-teal-300 hover:bg-teal-50";
              }

              return (
                <Button
                  key={index}
                  onClick={() => handleAnswerSelect(option)}
                  disabled={showResult}
                  className={buttonClass}
                  variant="outline"
                >
                  <span className="flex items-center gap-2">
                    {option}
                    {showResult && isCorrectOption && (
                      <Check className="w-5 h-5" />
                    )}
                    {showResult && isSelected && !isCorrectOption && (
                      <X className="w-5 h-5" />
                    )}
                  </span>
                </Button>
              );
            })}
          </div>

          {/* Result Message */}
          {showResult && (
            <div className={`text-center p-4 rounded-lg mb-6 ${
              isCorrect ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"
            }`}>
              {isCorrect ? (
                <div className="flex items-center justify-center gap-2">
                  <Check className="w-5 h-5" />
                  <span>Betul! Jawapan yang tepat.</span>
                </div>
              ) : (
                <div className="flex items-center justify-center gap-2">
                  <X className="w-5 h-5" />
                  <span>
                    Salah. Jawapan yang betul ialah: <strong>{question.correctAnswer}</strong>
                  </span>
                </div>
              )}
            </div>
          )}

          {/* Hint */}
          {!showResult && (
            <div className="flex items-start gap-2 text-sm text-gray-600 bg-blue-50 p-4 rounded-lg">
              <Lightbulb className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <div>
                <div className="text-blue-600 mb-1">Petunjuk:</div>
                <div>Dialek: <span className="font-medium">{question.state}</span></div>
              </div>
            </div>
          )}
        </div>

        {/* Next Button */}
        {showResult && (
          <div className="text-center">
            <Button
              onClick={handleNext}
              className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-6 text-lg"
              size="lg"
            >
              {currentQuestion < questions.length - 1
                ? "SOALAN SETERUSNYA"
                : "TAMAT KUIZ"}
            </Button>
          </div>
        )}
      </div>

      {/* Score Indicator */}
      <div className="fixed bottom-4 right-4 bg-white rounded-full shadow-lg px-6 py-3 border-2 border-teal-500">
        <div className="text-sm text-gray-600">
          Skor: <span className="text-teal-600">{score}</span> / {questions.length}
        </div>
      </div>
    </div>
  );
}