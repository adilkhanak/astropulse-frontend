// Payment Integration Types

export interface PaymentRequest {
  amount: number;
  currency: string;
  userId?: string;
  email?: string;
  metadata: {
    analysisId: string;
    birthDate: string;
    fullName: string;
  };
}

export interface PaymentResponse {
  success: boolean;
  paymentId?: string;
  paymentUrl?: string;
  error?: string;
}

export interface PaymentStatus {
  paymentId: string;
  status: 'pending' | 'completed' | 'failed' | 'cancelled';
  amount: number;
  currency: string;
  createdAt: string;
  completedAt?: string;
}

// For future payment provider integration
export interface PaymentProvider {
  initialize: (config: PaymentProviderConfig) => void;
  createPayment: (request: PaymentRequest) => Promise<PaymentResponse>;
  verifyPayment: (paymentId: string) => Promise<PaymentStatus>;
}

export interface PaymentProviderConfig {
  apiKey: string;
  environment: 'test' | 'production';
  webhookUrl?: string;
}
