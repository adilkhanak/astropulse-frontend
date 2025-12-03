import { Button } from './ui/button';
import { Sparkles, Star, Moon, ChevronRight, Zap, Target, TrendingUp, Eye, ShieldCheck, Brain } from 'lucide-react';
import { Footer } from './Footer';
import { Header } from './Header';

interface HomePageProps {
  onStartQuiz: () => void;
}

export function HomePage({ onStartQuiz }: HomePageProps) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0A0E27]">
      <Header />
      
      {/* Subtle Background Pattern */}
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
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse-slow-delayed" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center min-h-screen px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        {/* Floating Icons */}
        <div className="absolute top-20 left-10 sm:left-20 opacity-20 animate-float">
          <Star className="w-4 h-4 sm:w-6 sm:h-6 text-blue-300" />
        </div>
        <div className="absolute top-40 right-10 sm:right-32 opacity-20 animate-float-delayed">
          <Sparkles className="w-3 h-3 sm:w-5 sm:h-5 text-indigo-300" />
        </div>
        <div className="absolute bottom-40 left-16 sm:left-32 opacity-20 animate-float">
          <Moon className="w-5 h-5 sm:w-7 sm:h-7 text-slate-300" />
        </div>

        {/* Hero Section */}
        <div className="max-w-5xl mx-auto text-center space-y-8 sm:space-y-12 pt-12 sm:pt-20">
          {/* Brand */}
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10 mb-6">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span className="text-slate-300 text-sm">AstroPulse</span>
            </div>
          </div>

          <div className="space-y-4 sm:space-y-6 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl md:text-7xl text-white tracking-tight leading-tight">
              Откройте Тайны
              <span className="block mt-2 text-blue-400">
                Вашей Судьбы
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto leading-relaxed px-4">
              Персональный астрологический анализ и нумерологическая карта, созданные специально для вас
            </p>
          </div>

          {/* CTA Button */}
          <div className="space-y-4 pt-4 sm:pt-8 animate-fade-in-delay">
            <Button
              onClick={onStartQuiz}
              size="lg"
              className="bg-white hover:bg-white/90 text-slate-900 px-8 sm:px-12 py-5 sm:py-6 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                Узнать Свою Судьбу
                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Button>
            
            <p className="text-slate-400 text-sm sm:text-base">
              Персональный анализ займет всего 2 минуты
            </p>
          </div>

          {/* Social Proof */}
          <div className="pt-8 sm:pt-12 space-y-3 animate-fade-in-delay-2">
            <div className="flex items-center justify-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="text-slate-400 text-sm sm:text-base">
              Более 10,000 человек уже открыли свои тайны
            </p>
          </div>
        </div>

        {/* Why It Matters Section */}
        <div className="max-w-5xl mx-auto mt-20 sm:mt-32 w-full animate-fade-in-delay-3 px-4">
          <div className="text-center space-y-4 sm:space-y-6 mb-12 sm:mb-16">
            <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-blue-500/10 mb-4">
              <Zap className="w-6 h-6 sm:w-7 sm:h-7 text-blue-400" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl text-white">
              Каждый человек рождается с уникальным энергетическим отпечатком
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              В момент твоего рождения планеты, время и день формируют энергетическую матрицу. Она влияет на твой характер, личность, уверенность, деньги, отношения и решения, о которых ты даже не задумываешься.
            </p>
          </div>
        </div>

        {/* What You'll Learn Section */}
        <div className="max-w-6xl mx-auto mt-20 sm:mt-32 space-y-12 sm:space-y-16 w-full animate-fade-in-delay-4 px-4">
          <div className="text-center space-y-3 sm:space-y-4">
            <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-indigo-500/10 mb-4">
              <Eye className="w-6 h-6 sm:w-7 sm:h-7 text-indigo-400" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl text-white">
              Что мы раскроем в твоей карте
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
              {
                icon: Star,
                title: 'Твоя астрологическая картина',
                desc: 'Положение Солнца, Луны, Асцендента и ключевые элементы характера.',
              },
              {
                icon: Sparkles,
                title: 'Нумерологические коды',
                desc: 'Главные числа, влияющие на твою личность, путь и решения.',
              },
              {
                icon: Zap,
                title: 'Сильные стороны и таланты',
                desc: 'То, что у тебя заложено природой и что даёт тебе преимущество.',
              },
              {
                icon: TrendingUp,
                title: 'Энергия твоего рождения',
                desc: 'Какой тип энергии у тебя по жизни: созидатель, аналитик, лидер, исследователь и т.д.',
              },
              {
                icon: Target,
                title: 'Зоны роста',
                desc: 'Где ты можешь стать сильнее, какие черты развить и над чем стоит работать.',
              },
              {
                icon: Moon,
                title: 'Потенциал и направление пути',
                desc: 'К чему ты естественно склонен и что приносит тебе успех.',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group bg-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-500/20 group-hover:scale-110 transition-all duration-300">
                  <item.icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-white mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Info Section */}
        <div className="max-w-5xl mx-auto mt-20 sm:mt-32 space-y-16 sm:space-y-24 w-full animate-fade-in-delay-5 px-4">
          {/* About Natal Chart */}
          <div className="space-y-6 sm:space-y-8">
            <div className="text-center space-y-3 sm:space-y-4">
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-blue-500/10 mb-4">
                <Star className="w-6 h-6 sm:w-7 sm:h-7 text-blue-400" />
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl text-white">
                Натальная Карта
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                Позвольте опытным астрологам интерпретировать Вашу натальную карту. Ваша натальная карта показывает возможности для Вашего самосовершенствования и лучшее время для принятия самых важных решений.
              </p>
            </div>
          </div>

          {/* About Predictions */}
          <div className="space-y-6 sm:space-y-8">
            <div className="max-w-3xl mx-auto text-center space-y-3 sm:space-y-4">
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-indigo-500/10 mb-4">
                <Sparkles className="w-6 h-6 sm:w-7 sm:h-7 text-indigo-400" />
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl text-white">
                Что такое предсказание?
              </h2>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                Астрологическое предсказание — это разновидность астрономической интерпретации, которая предлагается для устранения неуверенности в будущем.
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-4 sm:space-y-6">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  Она может раскрыть нам неопределенность в Вашей личной жизни или финансовом положении в течение года. Предсказание можно сделать, чтобы узнать что-то о судьбе человека или его характеристиках.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  Их также можно делать для интерпретации важных перекрестных моментов в будущем человека. Узнайте, когда наступит лучшее время для важных решений в вашей жизни.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Section */}
        <div className="max-w-4xl mx-auto mt-20 sm:mt-32 w-full animate-fade-in-delay-6 px-4">
          <div className="text-center space-y-6 sm:space-y-8">
            <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-blue-500/10 mb-4">
              <ShieldCheck className="w-6 h-6 sm:w-7 sm:h-7 text-blue-400" />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl text-white">
              Точный анализ, основанный на данных
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mt-8">
              {[
                {
                  icon: Brain,
                  text: 'Персональные интерпретации по каждому параметру',
                },
                {
                  icon: Sparkles,
                  text: 'Больше 40 уникальных комбинаций для твоей даты и времени рождения',
                },
                {
                  icon: TrendingUp,
                  text: 'Алгоритм обучен на тысячах реальных карт',
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 hover:scale-105 transition-all duration-300"
                >
                  <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-5 h-5 text-blue-400" />
                  </div>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="max-w-4xl mx-auto mt-20 sm:mt-32 text-center space-y-6 pb-12 sm:pb-20 px-4 animate-fade-in-delay-7">
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-white">
            Готов узнать свою персональную карту?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Ответь на пару вопросов — мы покажем, какой энергетический код заложен в тебе с рождения.
          </p>
          <Button
            onClick={onStartQuiz}
            size="lg"
            className="bg-white hover:bg-white/90 text-slate-900 px-8 sm:px-12 py-5 sm:py-6 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group relative overflow-hidden"
          >
            <span className="relative z-10 flex items-center">
              Начать тест
              <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Button>
        </div>
      </div>

      <Footer />

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.6;
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float 6s ease-in-out infinite 2s;
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }

        .animate-fade-in-delay {
          opacity: 0;
          animation: fade-in 0.8s ease-out 0.3s forwards;
        }

        .animate-fade-in-delay-2 {
          opacity: 0;
          animation: fade-in 0.8s ease-out 0.6s forwards;
        }

        .animate-fade-in-delay-3 {
          opacity: 0;
          animation: fade-in 0.8s ease-out 0.9s forwards;
        }

        .animate-fade-in-delay-4 {
          opacity: 0;
          animation: fade-in 0.8s ease-out 1.2s forwards;
        }

        .animate-fade-in-delay-5 {
          opacity: 0;
          animation: fade-in 0.8s ease-out 1.5s forwards;
        }

        .animate-fade-in-delay-6 {
          opacity: 0;
          animation: fade-in 0.8s ease-out 1.8s forwards;
        }

        .animate-fade-in-delay-7 {
          opacity: 0;
          animation: fade-in 0.8s ease-out 2.1s forwards;
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        .animate-pulse-slow-delayed {
          animation: pulse-slow 4s ease-in-out infinite 2s;
        }
      `}</style>
    </div>
  );
}