import { Button } from './ui/button';
import { Card } from './ui/card';
import { ArrowLeft, Hash, DollarSign, TrendingUp, Calendar, Sparkles, Target, Users, Heart, Briefcase, Zap } from 'lucide-react';
import { PageType, QuizData } from '../App';
import { FullAnalysis } from '../types/ai';
import { Header } from './Header';
import { Footer } from './Footer';

interface NumerologyPageProps {
  quizData: QuizData;
  onNavigate: (page: PageType) => void;
  analysis: FullAnalysis | null;
}

export function NumerologyPage({ quizData, onNavigate, analysis }: NumerologyPageProps) {
  const numerologyData = analysis?.numerology || {
    lifePathNumber: { number: 7, meaning: 'Число Пути', description: 'Описание...' },
    destinyNumber: { number: 3, meaning: 'Число Судьбы', description: 'Описание...' },
    soulNumber: { number: 9, meaning: 'Число Души', description: 'Описание...' },
    strengths: [],
    growthAreas: [],
    personalYear: { year: new Date().getFullYear(), number: 5, description: '', recommendations: [] },
    luckyNumbers: [3, 7, 9, 12, 21, 27],
    personality: { traits: [], motivations: [] },
    relationships: { compatibility: '', advice: [] },
    career: { suitedFields: [], talents: [] },
    moneyArchetype: { type: 'Стратег', description: '', financialStrengths: [], recommendations: [] },
    threeMonthForecast: { period: '', energyType: '', description: '', opportunities: [], advice: [] }
  };

  return (
    <div className="min-h-screen bg-[#0A0E27]">
      <Header variant="simple" />
      
      {/* Background */}
      <div className="fixed inset-0 opacity-[0.02] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '48px 48px',
          }}
        />
      </div>

      <div className="fixed top-20 right-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl animate-pulse-slow pointer-events-none" />
      <div className="fixed bottom-20 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse-slow-delayed pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 space-y-12 sm:space-y-16">
        {/* Header */}
        <div className="text-center space-y-4 sm:space-y-6">
          <Button
            variant="ghost"
            onClick={() => onNavigate('birth-chart')}
            className="text-slate-400 hover:text-white mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            К Карте Рождения
          </Button>
          
          <div className="inline-flex items-center gap-2 bg-purple-500/10 backdrop-blur-sm px-4 py-2 rounded-full border border-purple-500/20">
            <Hash className="w-4 h-4 text-purple-400" />
            <span className="text-slate-300 text-sm">Нумерология</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl text-white">
            Ваша Нумерологическая Карта
          </h1>
          
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto">
            Глубокий анализ чисел вашей жизни и их влияния на ваш путь
          </p>
        </div>

        {/* Core Numbers - Creative Circle Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="group relative overflow-hidden bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm rounded-3xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-500 hover:scale-105">
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />
            
            <div className="relative flex flex-col items-center text-center space-y-4">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-3xl text-white shadow-lg shadow-purple-500/30 group-hover:rotate-12 transition-transform duration-500">
                {numerologyData.lifePathNumber.number}
              </div>
              <div>
                <h3 className="text-purple-400 text-sm mb-2">{numerologyData.lifePathNumber.meaning}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {numerologyData.lifePathNumber.description}
                </p>
              </div>
            </div>
          </div>

          <div className="group relative overflow-hidden bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-sm rounded-3xl p-8 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-500 hover:scale-105">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />
            
            <div className="relative flex flex-col items-center text-center space-y-4">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-3xl text-white shadow-lg shadow-blue-500/30 group-hover:rotate-12 transition-transform duration-500">
                {numerologyData.destinyNumber.number}
              </div>
              <div>
                <h3 className="text-blue-400 text-sm mb-2">{numerologyData.destinyNumber.meaning}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {numerologyData.destinyNumber.description}
                </p>
              </div>
            </div>
          </div>

          <div className="group relative overflow-hidden bg-gradient-to-br from-emerald-500/10 to-teal-500/10 backdrop-blur-sm rounded-3xl p-8 border border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-500 hover:scale-105">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />
            
            <div className="relative flex flex-col items-center text-center space-y-4">
              <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center text-3xl text-white shadow-lg shadow-emerald-500/30 group-hover:rotate-12 transition-transform duration-500">
                {numerologyData.soulNumber.number}
              </div>
              <div>
                <h3 className="text-emerald-400 text-sm mb-2">{numerologyData.soulNumber.meaning}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {numerologyData.soulNumber.description}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Analysis */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-sm border-green-500/20 p-6">
            <h3 className="text-lg text-green-400 mb-4 flex items-center gap-2">
              <Target className="w-5 h-5" />
              Сильные Стороны
            </h3>
            <ul className="space-y-2">
              {numerologyData.strengths.map((strength, i) => (
                <li key={i} className="text-slate-300 text-sm flex items-start gap-2">
                  <span className="text-green-400 mt-1">✦</span>
                  <span>{strength}</span>
                </li>
              ))}
            </ul>
          </Card>

          <Card className="bg-gradient-to-br from-amber-500/10 to-orange-500/10 backdrop-blur-sm border-amber-500/20 p-6">
            <h3 className="text-lg text-amber-400 mb-4 flex items-center gap-2">
              <TrendingUp className="w-5 h-5" />
              Области Роста
            </h3>
            <ul className="space-y-2">
              {numerologyData.growthAreas.map((area, i) => (
                <li key={i} className="text-slate-300 text-sm flex items-start gap-2">
                  <span className="text-amber-400 mt-1">•</span>
                  <span>{area}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>

        {/* Money Archetype - NEW with luxury design */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/5 via-amber-500/5 to-orange-500/5 rounded-3xl blur-xl" />
          
          <Card className="relative bg-gradient-to-br from-yellow-500/10 via-amber-500/10 to-orange-500/10 backdrop-blur-sm border-yellow-500/20 p-8 sm:p-12">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center shadow-lg shadow-yellow-500/30">
                  <DollarSign className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl sm:text-3xl text-white">
                  Ваш Денежный Архетип
                </h2>
              </div>

              <p className="text-slate-300 leading-relaxed max-w-3xl">
                Этот блок показывает, как вы относитесь к деньгам, какие финансовые стратегии вам подходят и что помогает вам расти материально.
              </p>

              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="px-4 py-2 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full">
                    <span className="text-white">{numerologyData.moneyArchetype.type}</span>
                  </div>
                </div>
                
                <p className="text-slate-300 leading-relaxed mb-6">
                  {numerologyData.moneyArchetype.description}
                </p>

                <div className="space-y-6">
                  {/* Financial Strengths */}
                  <div>
                    <h4 className="text-yellow-400 mb-3 flex items-center gap-2">
                      <Sparkles className="w-4 h-4" />
                      Финансовые сильные стороны
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {numerologyData.moneyArchetype.financialStrengths.map((strength, i) => (
                        <div key={i} className="flex items-start gap-2 bg-yellow-500/5 rounded-lg p-3 border border-yellow-500/10">
                          <span className="text-yellow-400 mt-1">$</span>
                          <span className="text-slate-300 text-sm">{strength}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Recommendations */}
                  <div>
                    <h4 className="text-orange-400 mb-3">Рекомендации</h4>
                    <div className="space-y-2">
                      {numerologyData.moneyArchetype.recommendations.map((rec, i) => (
                        <div key={i} className="flex items-start gap-2 bg-white/5 rounded-lg p-3">
                          <span className="text-orange-400 mt-1">→</span>
                          <span className="text-slate-300 text-sm">{rec}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Personal Year */}
        <Card className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-sm border-blue-500/20 p-6 sm:p-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center text-2xl text-white shadow-lg shadow-blue-500/30">
              {numerologyData.personalYear.number}
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl text-white">
                Персональный Год {numerologyData.personalYear.year}
              </h2>
              <p className="text-slate-400 text-sm">Энергия вашего текущего года</p>
            </div>
          </div>
          
          <p className="text-slate-300 leading-relaxed mb-6">
            {numerologyData.personalYear.description}
          </p>

          {numerologyData.personalYear.recommendations && numerologyData.personalYear.recommendations.length > 0 && (
            <div className="space-y-2">
              <h3 className="text-blue-400 mb-3">Рекомендации на год:</h3>
              {numerologyData.personalYear.recommendations.map((rec, i) => (
                <div key={i} className="flex items-start gap-2 bg-white/5 rounded-lg p-3">
                  <Sparkles className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                  <p className="text-slate-300 text-sm">{rec}</p>
                </div>
              ))}
            </div>
          )}
        </Card>

        {/* Additional Insights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Personality */}
          <Card className="bg-white/5 backdrop-blur-sm border-white/10 p-6">
            <h3 className="text-lg text-purple-400 mb-4 flex items-center gap-2">
              <Users className="w-5 h-5" />
              Личность
            </h3>
            <div className="space-y-4">
              <div>
                <p className="text-slate-400 text-xs mb-2">Черты характера</p>
                <div className="flex flex-wrap gap-2">
                  {numerologyData.personality.traits.slice(0, 3).map((trait, i) => (
                    <span key={i} className="px-2 py-1 bg-purple-500/10 text-purple-300 rounded-lg text-xs">
                      {trait}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Card>

          {/* Relationships */}
          <Card className="bg-white/5 backdrop-blur-sm border-white/10 p-6">
            <h3 className="text-lg text-pink-400 mb-4 flex items-center gap-2">
              <Heart className="w-5 h-5" />
              Отношения
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              {numerologyData.relationships.compatibility}
            </p>
          </Card>

          {/* Career */}
          <Card className="bg-white/5 backdrop-blur-sm border-white/10 p-6">
            <h3 className="text-lg text-cyan-400 mb-4 flex items-center gap-2">
              <Briefcase className="w-5 h-5" />
              Карьера
            </h3>
            <div className="flex flex-wrap gap-2">
              {numerologyData.career.suitedFields.slice(0, 3).map((field, i) => (
                <span key={i} className="px-2 py-1 bg-cyan-500/10 text-cyan-300 rounded-lg text-xs">
                  {field}
                </span>
              ))}
            </div>
          </Card>
        </div>

        {/* 3-Month Forecast - NEW Premium Block */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl blur-2xl" />
          
          <Card className="relative bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10 backdrop-blur-xl border-indigo-500/30 p-8 sm:p-12 shadow-2xl">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/30">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl sm:text-3xl text-white">
                    Ваш Ближайший Энергетический Период
                  </h2>
                  <p className="text-slate-400 text-sm mt-1">{numerologyData.threeMonthForecast.period}</p>
                </div>
              </div>

              <p className="text-slate-300 leading-relaxed max-w-3xl">
                Прогноз показывает, какая энергия будет активна в вашей жизни в ближайшие месяцы — это помогает понимать, куда лучше направлять силы.
              </p>

              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <div className="mb-6">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full mb-4">
                    <Zap className="w-4 h-4 text-white" />
                    <span className="text-white text-sm">{numerologyData.threeMonthForecast.energyType}</span>
                  </div>
                  
                  <p className="text-slate-300 leading-relaxed">
                    {numerologyData.threeMonthForecast.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Opportunities */}
                  <div>
                    <h4 className="text-indigo-400 mb-3 flex items-center gap-2">
                      <Target className="w-4 h-4" />
                      Возможности
                    </h4>
                    <ul className="space-y-2">
                      {numerologyData.threeMonthForecast.opportunities.map((opp, i) => (
                        <li key={i} className="text-slate-400 text-sm flex items-start gap-2">
                          <span className="text-indigo-400 mt-1">★</span>
                          <span>{opp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Advice */}
                  <div>
                    <h4 className="text-pink-400 mb-3 flex items-center gap-2">
                      <Sparkles className="w-4 h-4" />
                      Советы
                    </h4>
                    <ul className="space-y-2">
                      {numerologyData.threeMonthForecast.advice.map((advice, i) => (
                        <li key={i} className="text-slate-400 text-sm flex items-start gap-2">
                          <span className="text-pink-400 mt-1">→</span>
                          <span>{advice}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Lucky Numbers */}
        <Card className="bg-white/5 backdrop-blur-sm border-white/10 p-6 sm:p-8">
          <h3 className="text-xl text-white mb-4">Ваши Счастливые Числа</h3>
          <div className="flex flex-wrap gap-4 justify-center">
            {numerologyData.luckyNumbers.map((num, i) => (
              <div
                key={i}
                className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-2xl flex items-center justify-center text-2xl text-white hover:scale-110 hover:bg-gradient-to-br hover:from-purple-500/30 hover:to-pink-500/30 transition-all duration-300 shadow-lg hover:shadow-purple-500/20"
              >
                {num}
              </div>
            ))}
          </div>
        </Card>
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
