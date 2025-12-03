// AI Integration Types

export interface AIAnalysisRequest {
  birthDate: string;
  birthTime: string;
  birthPlace: string;
  fullName: string;
}

export interface BirthChartAnalysis {
  // Big Three
  sunSign: {
    sign: string;
    description: string;
  };
  moonSign: {
    sign: string;
    description: string;
  };
  risingSign: {
    sign: string;
    description: string;
  };

  // Energy Profile - NEW
  energyProfile: {
    type: string; // e.g. "Созидатель", "Исследователь", "Лидер"
    description: string;
    strengths: string[];
    challenges: string[];
  };

  // Planetary Positions
  planets: Array<{
    planet: string;
    sign: string;
    house: string;
    meaning: string;
  }>;

  // Life Purpose
  lifePurpose: {
    overview: string;
    recommendations: string[];
  };

  // Career Potential - NEW
  careerPotential: {
    overview: string;
    keyStrengths: string[];
    suitedFields: string[];
    workStyle: string;
  };

  // Additional AI-generated sections
  strengths: string[];
  challenges: string[];
  opportunities: string[];
  timing: {
    bestPeriods: string[];
    cautionPeriods: string[];
  };
}

export interface NumerologyAnalysis {
  // Core Numbers
  lifePathNumber: {
    number: number;
    meaning: string;
    description: string;
  };
  destinyNumber: {
    number: number;
    meaning: string;
    description: string;
  };
  soulNumber: {
    number: number;
    meaning: string;
    description: string;
  };

  // Detailed Analysis
  strengths: string[];
  growthAreas: string[];
  
  // Personal Year
  personalYear: {
    year: number;
    number: number;
    description: string;
    recommendations: string[];
  };

  // Money Archetype - NEW
  moneyArchetype: {
    type: string; // e.g. "Стратег", "Созидатель", "Инвестор"
    description: string;
    financialStrengths: string[];
    recommendations: string[];
  };

  // 3-Month Forecast - NEW
  threeMonthForecast: {
    period: string;
    energyType: string;
    description: string;
    opportunities: string[];
    advice: string[];
  };

  // Lucky Numbers
  luckyNumbers: number[];

  // Additional AI-generated sections
  personality: {
    traits: string[];
    motivations: string[];
  };
  relationships: {
    compatibility: string;
    advice: string[];
  };
  career: {
    suitedFields: string[];
    talents: string[];
  };
}

export interface FullAnalysis {
  birthChart: BirthChartAnalysis;
  numerology: NumerologyAnalysis;
  metadata: {
    generatedAt: string;
    userId?: string;
    analysisId: string;
  };
}

// API Response Types
export interface AIGenerateResponse {
  success: boolean;
  data?: FullAnalysis;
  error?: string;
}