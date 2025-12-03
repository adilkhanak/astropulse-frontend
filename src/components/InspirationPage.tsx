import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Sparkles, Star, Zap, ChevronRight } from 'lucide-react';
import { Header } from './Header';

interface InspirationPageProps {
  onContinue: () => void;
}

export function InspirationPage({ onContinue }: InspirationPageProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

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

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse-slow delay-1000" />

      {/* Floating Stars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-twinkle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          >
            <Star className="w-1.5 h-1.5 text-blue-300 opacity-40" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div
          className={`max-w-3xl mx-auto text-center space-y-8 sm:space-y-12 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Icon */}
          <div className="relative inline-block animate-scale-in">
            <div className="absolute inset-0 bg-blue-400/20 rounded-full blur-2xl animate-pulse-slow" />
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto border border-blue-400/20">
              <Sparkles className="w-10 h-10 sm:w-12 sm:h-12 text-blue-400" />
            </div>
          </div>

          {/* Main Message */}
          <div className="space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl text-white">
              Вы особенный человек
            </h1>
            
            <p className="text-xl sm:text-2xl md:text-3xl text-blue-400">
              Ваша энергетическая карта уникальна
            </p>

            <div className="max-w-2xl mx-auto space-y-6 sm:space-y-8 pt-6 sm:pt-8">
              <p className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed">
                Космос в момент вашего рождения создал неповторимую конфигурацию энергий
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 py-6 sm:py-8">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all group">
                  <Zap className="w-8 h-8 sm:w-10 sm:h-10 text-yellow-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <p className="text-white text-sm sm:text-base">Уникальная энергия</p>
                </div>
                
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all group">
                  <Star className="w-8 h-8 sm:w-10 sm:h-10 text-blue-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <p className="text-white text-sm sm:text-base">Особое предназначение</p>
                </div>
                
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all group">
                  <Sparkles className="w-8 h-8 sm:w-10 sm:h-10 text-indigo-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <p className="text-white text-sm sm:text-base">Скрытый потенциал</p>
                </div>
              </div>

              <div className="bg-blue-500/10 rounded-2xl p-6 sm:p-8 border border-blue-400/20 backdrop-blur-sm">
                <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                  ✨ Сейчас мы завершаем анализ вашей космической карты и расчет нумерологических кодов
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="pt-8 space-y-4">
            <Button
              onClick={onContinue}
              size="lg"
              className="bg-white hover:bg-slate-50 text-slate-900 px-8 sm:px-12 py-5 sm:py-6 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group"
            >
              Получить Результаты
              <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <p className="text-slate-400 text-sm sm:text-base animate-pulse">
              Ваш персональный анализ почти готов...
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.6;
          }
        }

        @keyframes twinkle {
          0%, 100% {
            opacity: 0.2;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.5);
          }
        }

        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        .animate-twinkle {
          animation: twinkle 3s ease-in-out infinite;
        }

        .animate-scale-in {
          animation: scale-in 0.8s ease-out forwards;
        }

        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </div>
  );
}