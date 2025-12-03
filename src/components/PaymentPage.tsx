import { useState } from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Check, Sparkles, Star, Lock } from 'lucide-react';
import { QuizData } from '../App';
import { Header } from './Header';

interface PaymentPageProps {
  onPaymentSuccess: () => void;
  quizData: QuizData;
  isGenerating?: boolean;
}

export function PaymentPage({ onPaymentSuccess, quizData, isGenerating = false }: PaymentPageProps) {
  const [isProcessing, setIsProcessing] = useState(false);

  const handlePayment = () => {
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      onPaymentSuccess();
    }, 2000);
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

      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="max-w-4xl w-full mx-auto">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-12 animate-fade-in">
            <div className="inline-block mb-6">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-blue-500/10 rounded-2xl flex items-center justify-center mx-auto border border-blue-400/20">
                <Sparkles className="w-8 h-8 sm:w-10 sm:h-10 text-blue-400" />
              </div>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl text-white mb-4">
              Ваш Персональный Анализ Готов!
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed">
              Откройте доступ к полному астрологическому и нумерологическому разбору
            </p>
          </div>

          {/* Main Card */}
          <Card className="bg-white/5 backdrop-blur-xl border-white/10 rounded-3xl shadow-2xl overflow-hidden animate-slide-up">
            {/* Preview Info */}
            <div className="bg-blue-500/10 rounded-2xl p-6 sm:p-8 m-6 sm:m-8 border border-blue-400/20">
              <p className="text-slate-300 text-center mb-4 text-sm sm:text-base">
                Ваши данные для анализа:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-slate-400 text-sm mb-1">Дата рождения</p>
                  <p className="text-white">{quizData.birthDate}</p>
                </div>
                <div>
                  <p className="text-slate-400 text-sm mb-1">Место</p>
                  <p className="text-white">{quizData.birthPlace}</p>
                </div>
                <div>
                  <p className="text-slate-400 text-sm mb-1">Имя</p>
                  <p className="text-white">{quizData.fullName}</p>
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-8 md:p-12">
              {/* What's Included */}
              <div className="mb-8">
                <h3 className="text-xl sm:text-2xl text-white mb-6 text-center">
                  Что вы получите:
                </h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    {
                      icon: Star,
                      title: 'Карта Рождения',
                      desc: 'Подробный астрологический анализ позиций планет',
                    },
                    {
                      icon: Sparkles,
                      title: 'Нумерология',
                      desc: 'Расчет вашего числа судьбы и жизненного пути',
                    },
                    {
                      icon: Star,
                      title: 'Предназначение',
                      desc: 'Раскрытие вашей уникальной миссии',
                    },
                    {
                      icon: Check,
                      title: 'Рекомендации',
                      desc: 'Персональные советы по развитию и гармонизации',
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 bg-white/5 rounded-xl p-4 sm:p-5 border border-white/10 hover:bg-white/10 transition-all"
                    >
                      <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-5 h-5 text-blue-400" />
                      </div>
                      <div>
                        <h4 className="text-white mb-1 text-sm sm:text-base">
                          {item.title}
                        </h4>
                        <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Price Section */}
              <div className="text-center mb-8">
                <div className="inline-block bg-blue-500/10 rounded-2xl px-8 py-6 sm:px-10 sm:py-8 border border-blue-400/20">
                  <p className="text-slate-300 mb-2 text-sm sm:text-base">
                    Получите доступ за символическую цену:
                  </p>
                  <div className="flex items-baseline justify-center gap-2">
                    <span className="text-4xl sm:text-5xl text-white">101</span>
                    <span className="text-xl sm:text-2xl text-slate-300">₸</span>
                  </div>
                  <p className="text-slate-400 text-xs sm:text-sm mt-2">
                    Разовый платеж • Полный доступ навсегда
                  </p>
                </div>
              </div>

              {/* Payment Button */}
              <Button
                onClick={handlePayment}
                disabled={isProcessing}
                className="w-full bg-white hover:bg-slate-50 text-slate-900 py-5 sm:py-6 rounded-xl disabled:opacity-50 disabled:hover:bg-white transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg disabled:shadow-none"
              >
                {isProcessing ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="animate-spin rounded-full h-5 w-5 border-2 border-slate-900 border-t-transparent" />
                    Обработка платежа...
                  </div>
                ) : (
                  <div className="flex items-center justify-center gap-2">
                    <Lock className="w-5 h-5" />
                    Получить Полный Анализ
                  </div>
                )}
              </Button>

              {/* Trust Badges */}
              <div className="mt-6 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-slate-400 text-xs sm:text-sm">
                <div className="flex items-center gap-2">
                  <Lock className="w-4 h-4" />
                  <span>Защищенный платеж</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4" />
                  <span>Мгновенный доступ</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4" />
                  <span>10,000+ клиентов</span>
                </div>
              </div>
            </div>
          </Card>

          {/* Additional Info */}
          <p className="text-center text-slate-400 mt-6 sm:mt-8 text-sm sm:text-base">
            💫 После оплаты вы получите мгновенный доступ к своему персональному анализу
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