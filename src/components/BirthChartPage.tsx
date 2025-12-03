import { Button } from './ui/button';
import { Card } from './ui/card';
import { ArrowLeft, Star, Sun, Moon, Sparkles, TrendingUp, AlertCircle, Zap, Briefcase, Target } from 'lucide-react';
import { PageType, QuizData } from '../App';
import { FullAnalysis } from '../types/ai';
import { Header } from './Header';
import { Footer } from './Footer';

interface BirthChartPageProps {
  quizData: QuizData;
  onNavigate: (page: PageType) => void;
  analysis: FullAnalysis | null;
}

export function BirthChartPage({ quizData, onNavigate, analysis }: BirthChartPageProps) {
  const birthChartData = analysis?.birthChart || {
    sunSign: { sign: 'Телец', description: 'Ваша истинная суть...' },
    moonSign: { sign: 'Рыбы', description: 'Ваши эмоции...' },
    risingSign: { sign: 'Лев', description: 'Как вас видят...' },
    energyProfile: { type: 'Созидатель', description: '', strengths: [], challenges: [] },
    planets: [],
    lifePurpose: { overview: '', recommendations: [] },
    careerPotential: { overview: '', keyStrengths: [], suitedFields: [], workStyle: '' },
    strengths: [],
    challenges: [],
    opportunities: [],
    timing: { bestPeriods: [], cautionPeriods: [] }
  };

  return (
    <div className="min-h-screen bg-[#0A0E27]">
      <Header variant="simple" />
      
      {/* Subtle Background Pattern */}
      <div className="fixed inset-0 opacity-[0.02] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '48px 48px',
          }}
        />
      </div>

      {/* Gradient Orbs */}
      <div className="fixed top-20 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse-slow pointer-events-none" />
      <div className="fixed bottom-20 right-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl animate-pulse-slow-delayed pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 space-y-12 sm:space-y-16">
        {/* Header */}
        <div className="text-center space-y-4 sm:space-y-6">
          <Button
            variant="ghost"
            onClick={() => onNavigate('numerology')}
            className="text-slate-400 hover:text-white mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            К Нумерологии
          </Button>
          
          <div className="inline-flex items-center gap-2 bg-blue-500/10 backdrop-blur-sm px-4 py-2 rounded-full border border-blue-500/20">
            <Star className="w-4 h-4 text-blue-400" />
            <span className="text-slate-300 text-sm">Карта Рождения</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl text-white">
            Ваша Астрологическая Карта
          </h1>
          
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto">
            Глубокий анализ положения планет и их влияния на вашу жизнь
          </p>
        </div>

        {/* Big Three - Hexagon Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="group bg-gradient-to-br from-amber-500/10 to-orange-500/10 backdrop-blur-sm rounded-3xl p-8 border border-amber-500/20 hover:border-amber-500/40 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/20">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-500 shadow-lg shadow-amber-500/30">
                <Sun className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-amber-400 text-sm mb-2">Солнце</h3>
                <p className="text-white text-xl mb-2">{birthChartData.sunSign.sign}</p>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {birthChartData.sunSign.description}
                </p>
              </div>
            </div>
          </div>

          <div className="group bg-gradient-to-br from-blue-500/10 to-indigo-500/10 backdrop-blur-sm rounded-3xl p-8 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-500 shadow-lg shadow-blue-500/30">
                <Moon className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-blue-400 text-sm mb-2">Луна</h3>
                <p className="text-white text-xl mb-2">{birthChartData.moonSign.sign}</p>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {birthChartData.moonSign.description}
                </p>
              </div>
            </div>
          </div>

          <div className="group bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm rounded-3xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-500 shadow-lg shadow-purple-500/30">
                <Star className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-purple-400 text-sm mb-2">Асцендент</h3>
                <p className="text-white text-xl mb-2">{birthChartData.risingSign.sign}</p>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {birthChartData.risingSign.description}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Energy Profile - NEW with creative design */}
        <div className="relative overflow-hidden bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10 backdrop-blur-sm rounded-3xl p-8 sm:p-12 border border-indigo-500/20">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-indigo-500/20 to-transparent rounded-full blur-3xl" />
          
          <div className="relative space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/30">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl sm:text-3xl text-white">
                Ваш Энергетический Профиль
              </h2>
            </div>

            <p className="text-slate-300 leading-relaxed max-w-3xl">
              Ваш тип энергии — это фундамент вашей личности. Он показывает, как вы действуете в мире, что вас заряжает, а что истощает.
            </p>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="flex items-center gap-3 mb-4">
                <div className="px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full">
                  <span className="text-white">{birthChartData.energyProfile.type}</span>
                </div>
              </div>
              <p className="text-slate-300 leading-relaxed mb-6">
                {birthChartData.energyProfile.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-green-400 mb-3 flex items-center gap-2">
                    <Target className="w-4 h-4" />
                    Сильные стороны
                  </h4>
                  <ul className="space-y-2">
                    {birthChartData.energyProfile.strengths.map((strength, i) => (
                      <li key={i} className="text-slate-400 text-sm flex items-start gap-2">
                        <span className="text-green-400 mt-1">•</span>
                        <span>{strength}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-amber-400 mb-3 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4" />
                    Вызовы
                  </h4>
                  <ul className="space-y-2">
                    {birthChartData.energyProfile.challenges.map((challenge, i) => (
                      <li key={i} className="text-slate-400 text-sm flex items-start gap-2">
                        <span className="text-amber-400 mt-1">•</span>
                        <span>{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Planetary Positions */}
        {birthChartData.planets && birthChartData.planets.length > 0 && (
          <Card className="bg-white/5 backdrop-blur-sm border-white/10 p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl text-white mb-6 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-indigo-400" />
              Положение Планет
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {birthChartData.planets.map((planet, index) => (
                <div
                  key={index}
                  className="bg-white/5 rounded-xl p-4 border border-white/5 hover:bg-white/10 hover:border-indigo-500/30 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 bg-indigo-500/20 rounded-lg flex items-center justify-center">
                      <Sparkles className="w-4 h-4 text-indigo-400" />
                    </div>
                    <div>
                      <p className="text-white">{planet.planet}</p>
                      <p className="text-xs text-slate-400">{planet.sign} • {planet.house}</p>
                    </div>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed">{planet.meaning}</p>
                </div>
              ))}
            </div>
          </Card>
        )}

        {/* Life Purpose */}
        <Card className="bg-gradient-to-br from-blue-500/10 to-indigo-500/10 backdrop-blur-sm border-blue-500/20 p-6 sm:p-8">
          <h2 className="text-xl sm:text-2xl text-white mb-4">
            Ваше Предназначение
          </h2>
          
          <p className="text-slate-300 leading-relaxed mb-6">
            {birthChartData.lifePurpose.overview}
          </p>

          {birthChartData.lifePurpose.recommendations && birthChartData.lifePurpose.recommendations.length > 0 && (
            <div className="space-y-3">
              <h3 className="text-blue-400">Рекомендации:</h3>
              <div className="space-y-2">
                {birthChartData.lifePurpose.recommendations.map((rec, index) => (
                  <div key={index} className="flex items-start gap-3 bg-white/5 rounded-lg p-3">
                    <Star className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                    <p className="text-slate-300 text-sm leading-relaxed">{rec}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </Card>

        {/* Career Potential - NEW with diamond shape design */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 via-teal-500/5 to-cyan-500/5 rounded-3xl blur-xl" />
          
          <Card className="relative bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 backdrop-blur-sm border-emerald-500/20 p-8 sm:p-12">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-500/30">
                  <Briefcase className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl sm:text-3xl text-white">
                  Ваш Потенциал в Карьере
                </h2>
              </div>

              <p className="text-slate-300 leading-relaxed max-w-3xl">
                Ваша карта рождения раскрывает направления, где вы особенно сильны. Этот блок даёт практическое понимание, куда вам легче всего развиваться.
              </p>

              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <p className="text-slate-300 leading-relaxed mb-6">
                  {birthChartData.careerPotential.overview}
                </p>

                <div className="space-y-6">
                  {/* Key Strengths */}
                  <div>
                    <h4 className="text-emerald-400 mb-3 flex items-center gap-2">
                      <TrendingUp className="w-4 h-4" />
                      Ключевые сильные стороны
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {birthChartData.careerPotential.keyStrengths.map((strength, i) => (
                        <div key={i} className="flex items-start gap-2 bg-emerald-500/5 rounded-lg p-3 border border-emerald-500/10">
                          <span className="text-emerald-400 mt-1">✦</span>
                          <span className="text-slate-300 text-sm">{strength}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Suited Fields */}
                  <div>
                    <h4 className="text-cyan-400 mb-3">Подходящие сферы</h4>
                    <div className="flex flex-wrap gap-2">
                      {birthChartData.careerPotential.suitedFields.map((field, i) => (
                        <span
                          key={i}
                          className="px-3 py-1.5 bg-cyan-500/10 text-cyan-300 rounded-full text-sm border border-cyan-500/20"
                        >
                          {field}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Work Style */}
                  <div className="bg-white/5 rounded-xl p-4 border border-white/5">
                    <h4 className="text-slate-300 mb-2 text-sm">Ваш стиль работы</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {birthChartData.careerPotential.workStyle}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Additional Insights */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-white/5 backdrop-blur-sm border-white/10 p-6">
            <h3 className="text-lg text-green-400 mb-4 flex items-center gap-2">
              <TrendingUp className="w-5 h-5" />
              Возможности
            </h3>
            <ul className="space-y-3">
              {birthChartData.opportunities.map((opp, i) => (
                <li key={i} className="text-slate-300 text-sm flex items-start gap-2 pl-4 border-l-2 border-green-500/30 py-1">
                  {opp}
                </li>
              ))}
            </ul>
          </Card>

          <Card className="bg-white/5 backdrop-blur-sm border-white/10 p-6">
            <h3 className="text-lg text-amber-400 mb-4 flex items-center gap-2">
              <AlertCircle className="w-5 h-5" />
              Области Роста
            </h3>
            <ul className="space-y-3">
              {birthChartData.challenges.map((challenge, i) => (
                <li key={i} className="text-slate-300 text-sm flex items-start gap-2 pl-4 border-l-2 border-amber-500/30 py-1">
                  {challenge}
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>

      <Footer />

      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.6;
          }
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
