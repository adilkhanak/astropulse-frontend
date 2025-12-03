import { useState, useEffect } from 'react';
import { HomePage } from './components/HomePage';
import { QuizPage } from './components/QuizPage';
import { InspirationPage } from './components/InspirationPage';
import { PaymentPage } from './components/PaymentPage';
import { BirthChartPage } from './components/BirthChartPage';
import { NumerologyPage } from './components/NumerologyPage';
import { aiService } from './services/aiService';
import { FullAnalysis } from './types/ai';

export type PageType = 'home' | 'quiz' | 'inspiration' | 'payment' | 'birth-chart' | 'numerology';

export interface QuizData {
  birthDate?: string;
  birthTime?: string;
  birthPlace?: string;
  fullName?: string;
}

function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [quizData, setQuizData] = useState<QuizData>({});
  const [isPaid, setIsPaid] = useState(false);
  const [analysis, setAnalysis] = useState<FullAnalysis | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const navigateTo = (page: PageType) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const updateQuizData = (data: Partial<QuizData>) => {
    setQuizData((prev) => ({ ...prev, ...data }));
  };

  const handlePaymentSuccess = async () => {
    setIsPaid(true);
    
    // Generate AI analysis if not already generated
    if (!analysis && quizData.birthDate && quizData.birthTime && quizData.birthPlace && quizData.fullName) {
      setIsGenerating(true);
      const result = await aiService.generateAnalysis({
        birthDate: quizData.birthDate,
        birthTime: quizData.birthTime,
        birthPlace: quizData.birthPlace,
        fullName: quizData.fullName,
      });
      
      if (result.success && result.data) {
        setAnalysis(result.data);
      }
      setIsGenerating(false);
    }
    
    navigateTo('birth-chart');
  };

  // Auto-generate analysis on payment page if quiz is completed
  useEffect(() => {
    if (currentPage === 'payment' && !analysis && quizData.birthDate && quizData.birthTime && quizData.birthPlace && quizData.fullName) {
      const generateAnalysis = async () => {
        setIsGenerating(true);
        const result = await aiService.generateAnalysis({
          birthDate: quizData.birthDate!,
          birthTime: quizData.birthTime!,
          birthPlace: quizData.birthPlace!,
          fullName: quizData.fullName!,
        });
        
        if (result.success && result.data) {
          setAnalysis(result.data);
        }
        setIsGenerating(false);
      };
      
      generateAnalysis();
    }
  }, [currentPage, quizData, analysis]);

  return (
    <div className="min-h-screen bg-[#0A0E27]">
      {currentPage === 'home' && <HomePage onStartQuiz={() => navigateTo('quiz')} />}
      {currentPage === 'quiz' && (
        <QuizPage
          onComplete={() => navigateTo('inspiration')}
          onDataUpdate={updateQuizData}
          quizData={quizData}
        />
      )}
      {currentPage === 'inspiration' && (
        <InspirationPage onContinue={() => navigateTo('payment')} />
      )}
      {currentPage === 'payment' && (
        <PaymentPage 
          onPaymentSuccess={handlePaymentSuccess} 
          quizData={quizData}
          isGenerating={isGenerating}
        />
      )}
      {currentPage === 'birth-chart' && isPaid && (
        <BirthChartPage
          quizData={quizData}
          onNavigate={navigateTo}
          analysis={analysis}
        />
      )}
      {currentPage === 'numerology' && isPaid && (
        <NumerologyPage
          quizData={quizData}
          onNavigate={navigateTo}
          analysis={analysis}
        />
      )}
    </div>
  );
}

export default App;