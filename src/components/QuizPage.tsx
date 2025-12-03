import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Card } from './ui/card';
import { QuizData } from '../App';
import { Header } from './Header';
import { Calendar, Clock, MapPin, User } from 'lucide-react';

interface QuizPageProps {
  onComplete: () => void;
  onDataUpdate: (data: Partial<QuizData>) => void;
  quizData: QuizData;
}

export function QuizPage({ onComplete, onDataUpdate, quizData }: QuizPageProps) {
  const [currentStep, setCurrentStep] = useState(1);

  const isQuestionValid = () => {
    switch (currentStep) {
      case 1:
        return !!quizData.birthDate && !!quizData.birthTime;
      case 2:
        return !!quizData.birthPlace;
      case 3:
        return !!quizData.fullName;
      default:
        return false;
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0A0E27]">
      <Header variant="simple" />

      {/* Subtle Background */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '48px 48px',
          }}
        />
      </div>

      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="max-w-2xl w-full mx-auto">
          {/* Progress Bar */}
          <div className="mb-8 sm:mb-12 animate-fade-in">
            <div className="flex justify-between items-center mb-3">
              <span className="text-slate-400 text-sm sm:text-base">
                Вопрос {currentStep} из 3
              </span>
              <span className="text-slate-400 text-sm sm:text-base">
                {Math.round((currentStep / 3) * 100)}%
              </span>
            </div>
            <div className="w-full bg-white/10 rounded-full h-1.5 overflow-hidden">
              <div
                className="bg-blue-400 h-1.5 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${(currentStep / 3) * 100}%` }}
              />
            </div>
          </div>

          {/* Question Card */}
          <Card className="bg-white/5 backdrop-blur-xl border-white/10 p-6 sm:p-10 rounded-3xl shadow-2xl animate-slide-up">
            {currentStep === 1 && (
              <div className="space-y-6 sm:space-y-8">
                <div className="text-center mb-6 sm:mb-8">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                    <Calendar className="w-7 h-7 sm:w-8 sm:h-8 text-blue-400" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl text-white mb-3">
                    Когда вы родились?
                  </h2>
                  <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                    Точная дата и время рождения важны для создания вашей персональной карты
                  </p>
                </div>

                <div className="space-y-5">
                  <div>
                    <Label htmlFor="birthDate" className="text-white mb-2 block text-sm sm:text-base">
                      Дата рождения
                    </Label>
                    <div className="relative">
                      <Input
                        id="birthDate"
                        type="date"
                        value={quizData.birthDate || ''}
                        onChange={(e) => onDataUpdate({ birthDate: e.target.value })}
                        className="bg-white/10 border-white/20 text-white placeholder:text-slate-400 focus:border-blue-400 focus:ring-blue-400/20 pl-11 rounded-xl h-12 sm:h-14 transition-all"
                      />
                      <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="birthTime" className="text-white mb-2 block text-sm sm:text-base">
                      Время рождения
                    </Label>
                    <div className="relative">
                      <Input
                        id="birthTime"
                        type="time"
                        value={quizData.birthTime || ''}
                        onChange={(e) => onDataUpdate({ birthTime: e.target.value })}
                        className="bg-white/10 border-white/20 text-white placeholder:text-slate-400 focus:border-blue-400 focus:ring-blue-400/20 pl-11 rounded-xl h-12 sm:h-14 transition-all"
                      />
                      <Clock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div className="space-y-6 sm:space-y-8">
                <div className="text-center mb-6 sm:mb-8">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-indigo-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                    <MapPin className="w-7 h-7 sm:w-8 sm:h-8 text-indigo-400" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl text-white mb-3">
                    Где вы родились?
                  </h2>
                  <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                    Место рождения влияет на положение планет в вашей карте
                  </p>
                </div>

                <div>
                  <Label htmlFor="birthPlace" className="text-white mb-2 block text-sm sm:text-base">
                    Город рождения
                  </Label>
                  <div className="relative">
                    <Input
                      id="birthPlace"
                      type="text"
                      placeholder="Например: Алматы"
                      value={quizData.birthPlace || ''}
                      onChange={(e) => onDataUpdate({ birthPlace: e.target.value })}
                      className="bg-white/10 border-white/20 text-white placeholder:text-slate-400 focus:border-indigo-400 focus:ring-indigo-400/20 pl-11 rounded-xl h-12 sm:h-14 transition-all"
                    />
                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  </div>
                </div>
              </div>
            )}

            {currentStep === 3 && (
              <div className="space-y-6 sm:space-y-8">
                <div className="text-center mb-6 sm:mb-8">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                    <User className="w-7 h-7 sm:w-8 sm:h-8 text-blue-400" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl text-white mb-3">
                    Как вас зовут?
                  </h2>
                  <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                    Ваше полное имя содержит уникальную нумерологическую вибрацию
                  </p>
                </div>

                <div>
                  <Label htmlFor="fullName" className="text-white mb-2 block text-sm sm:text-base">
                    Полное имя
                  </Label>
                  <div className="relative">
                    <Input
                      id="fullName"
                      type="text"
                      placeholder="Например: Айгуль Нурланова"
                      value={quizData.fullName || ''}
                      onChange={(e) => onDataUpdate({ fullName: e.target.value })}
                      className="bg-white/10 border-white/20 text-white placeholder:text-slate-400 focus:border-blue-400 focus:ring-blue-400/20 pl-11 rounded-xl h-12 sm:h-14 transition-all"
                    />
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  </div>
                </div>
              </div>
            )}

            <Button
              onClick={() => {
                if (currentStep < 3) {
                  setCurrentStep(currentStep + 1);
                } else {
                  onComplete();
                }
              }}
              disabled={!isQuestionValid()}
              className="w-full mt-8 bg-white hover:bg-slate-50 text-slate-900 py-5 sm:py-6 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg disabled:shadow-none"
            >
              {currentStep === 3 ? 'Завершить' : 'Продолжить'}
            </Button>
          </Card>

          {/* Trust Badge */}
          <p className="text-center text-slate-400 mt-6 text-sm sm:text-base">
            🔒 Ваши данные защищены и используются только для создания анализа
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-slide-up {
          animation: slide-up 0.6s ease-out forwards;
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
}