# AstroPulse - Руководство по Интеграции

## Обзор

AstroPulse - это веб-приложение для астрологического и нумерологического анализа с интеграцией AI и системой оплаты.

## Архитектура

```
/
├── components/          # React компоненты
├── services/           # Сервисы для внешних интеграций
│   ├── aiService.ts    # AI интеграция
│   └── paymentService.ts # Платежная интеграция
├── types/              # TypeScript типы
│   ├── ai.ts          # Типы для AI
│   └── payment.ts     # Типы для платежей
└── App.tsx            # Главный компонент
```

## 1. Интеграция AI

### Текущая реализация

Файл: `/services/aiService.ts`

Сервис предоставляет mock-данные для демонстрации. Для интеграции реального AI:

### Шаг 1: Настройка переменных окружения

Создайте `.env` файл:

```env
VITE_AI_API_ENDPOINT=https://your-ai-api.com/analyze
VITE_AI_API_KEY=your_api_key_here
```

**Примечание**: Для Vite используется префикс `VITE_` вместо `REACT_APP_`

### Шаг 2: Замените mock функцию на реальный API

В `aiService.ts` найдите метод `generateAnalysis`:

```typescript
async generateAnalysis(request: AIAnalysisRequest): Promise<AIGenerateResponse> {
  try {
    // Замените это на реальный API вызов
    const response = await fetch(this.apiEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.apiKey}`,
      },
      body: JSON.stringify(request),
    });
    
    if (!response.ok) {
      throw new Error(`API Error: ${response.statusText}`);
    }
    
    const data = await response.json();
    
    return {
      success: true,
      data: data as FullAnalysis,
    };
  } catch (error) {
    console.error('AI Analysis Error:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to generate analysis',
    };
  }
}
```

### Шаг 3: Структура данных для AI

AI должен возвращать данные в следующем формате (см. `/types/ai.ts`):

```typescript
{
  birthChart: {
    sunSign: { sign: "Телец", description: "..." },
    moonSign: { sign: "Рыбы", description: "..." },
    risingSign: { sign: "Лев", description: "..." },
    planets: [...],
    lifePurpose: { overview: "...", recommendations: [...] },
    strengths: [...],
    challenges: [...],
    opportunities: [...],
    timing: { bestPeriods: [...], cautionPeriods: [...] }
  },
  numerology: {
    lifePathNumber: { number: 7, meaning: "...", description: "..." },
    destinyNumber: { number: 3, meaning: "...", description: "..." },
    soulNumber: { number: 9, meaning: "...", description: "..." },
    strengths: [...],
    growthAreas: [...],
    personalYear: {...},
    luckyNumbers: [...],
    personality: {...},
    relationships: {...},
    career: {...}
  },
  metadata: {
    generatedAt: "2025-01-01T00:00:00.000Z",
    analysisId: "analysis_123456"
  }
}
```

### Рекомендуемые AI провайдеры

1. **OpenAI GPT-4** - для генерации персонализированных текстов
2. **Anthropic Claude** - для длинных, детальных анализов
3. **Custom Model** - обученная на астрологических данных

### Пример промпта для AI

```
Проанализируй астрологическую карту рождения для человека:
- Дата рождения: {birthDate}
- Время рождения: {birthTime}
- Место рождения: {birthPlace}
- Имя: {fullName}

Предоставь детальный анализ включающий:
1. Большую тройку (Солнце, Луна, Асцендент)
2. Положение планет
3. Жизненное предназначение
4. Нумерологические числа
5. Персональные рекомендации

Формат ответа: JSON
```

## 2. Интеграция Платежной Системы

### Текущая реализация

Файл: `/services/paymentService.ts`

Сервис предоставляет mock-данные для демонстрации.

### Шаг 1: Выбор платежного провайдера

Рекомендуемые провайдеры для Казахстана:

1. **Kaspi Pay** - популярный в Казахстане
2. **CloudPayments** - поддержка KZT
3. **PayBox** - локальный провайдер
4. **Stripe** - международный провайдер

### Шаг 2: Настройка переменных окружения

```env
VITE_PAYMENT_API_ENDPOINT=https://your-payment-api.com
VITE_PAYMENT_API_KEY=your_payment_api_key
```

**Примечание**: Для Vite используется префикс `VITE_` вместо `REACT_APP_`

### Шаг 3: Реализация платежного процесса

#### Создание платежа

В `paymentService.ts`:

```typescript
async createPayment(request: PaymentRequest): Promise<PaymentResponse> {
  try {
    const response = await fetch(`${this.apiEndpoint}/create-payment`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.apiKey}`,
      },
      body: JSON.stringify({
        amount: request.amount,
        currency: request.currency,
        description: 'AstroPulse Анализ',
        metadata: request.metadata,
        success_url: `${window.location.origin}/success`,
        failure_url: `${window.location.origin}/payment`,
      }),
    });

    const data = await response.json();

    return {
      success: true,
      paymentId: data.id,
      paymentUrl: data.confirmation_url,
    };
  } catch (error) {
    return {
      success: false,
      error: error.message,
    };
  }
}
```

#### Верификация платежа

```typescript
async verifyPayment(paymentId: string): Promise<PaymentStatus> {
  const response = await fetch(`${this.apiEndpoint}/verify/${paymentId}`, {
    headers: {
      'Authorization': `Bearer ${this.apiKey}`,
    },
  });

  return await response.json();
}
```

### Шаг 4: Обработка вебхуков (Backend)

Вебхуки должны обрабатываться на backend:

```typescript
// Example Express.js endpoint
app.post('/webhook/payment', async (req, res) => {
  const signature = req.headers['x-signature'];
  
  // Verify webhook signature
  if (!verifySignature(req.body, signature)) {
    return res.status(401).send('Invalid signature');
  }

  const { paymentId, status } = req.body;

  if (status === 'succeeded') {
    // Update database: mark payment as completed
    // Grant access to analysis
    // Send confirmation email
  }

  res.status(200).send('OK');
});
```

## 3. Подключение к Supabase (Опционально)

Для хранения данных пользователей и результатов анализа:

### Схема базы данных

```sql
-- Users table
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Quiz responses table
CREATE TABLE quiz_responses (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id),
  birth_date DATE,
  birth_time TIME,
  birth_place TEXT,
  full_name TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Payments table
CREATE TABLE payments (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id),
  quiz_response_id UUID REFERENCES quiz_responses(id),
  payment_id TEXT UNIQUE,
  amount INTEGER,
  currency TEXT,
  status TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  completed_at TIMESTAMP
);

-- Analysis results table
CREATE TABLE analysis_results (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id),
  quiz_response_id UUID REFERENCES quiz_responses(id),
  birth_chart JSONB,
  numerology JSONB,
  generated_at TIMESTAMP DEFAULT NOW()
);
```

## 4. Безопасность

### Важные моменты:

1. **API ключи** - никогда не храните в frontend коде
2. **Платежи** - обрабатывайте через backend
3. **Персональные данные** - соблюдайте GDPR/местное законодательство
4. **HTTPS** - обязательно для production
5. **Валидация** - проверяйте все входящие данные

### Рекомендуемая архитектура

```
Frontend (React)
    ↓
Backend API (Node.js/Python/PHP)
    ↓
├── AI Service (OpenAI/Claude)
├── Payment Provider (Kaspi/CloudPayments)
└── Database (Supabase/PostgreSQL)
```

## 5. Развертывание

### Frontend

```bash
npm run build
# Deploy to Vercel, Netlify, or any static hosting
```

### Backend

Создайте backend сервер для:
- Безопасного хранения API ключей
- Обработки платежей
- Обработки вебхуков
- Кэширования результатов

### Environment Variables

Production `.env`:

```env
# AI (Vite uses VITE_ prefix)
VITE_AI_API_ENDPOINT=https://api.yourdomain.com/ai
VITE_AI_API_KEY=***

# Payment
VITE_PAYMENT_API_ENDPOINT=https://api.yourdomain.com/payment
VITE_PAYMENT_API_KEY=***

# Backend
VITE_BACKEND_URL=https://api.yourdomain.com
```

## 6. Тестирование

### Тестовые данные

```javascript
const testQuizData = {
  birthDate: '1990-05-15',
  birthTime: '14:30',
  birthPlace: 'Алматы',
  fullName: 'Тестовый Пользователь'
};
```

### Тестовые платежи

Используйте тестовые карты вашего платежного провайдера.

## 7. Мониторинг

Рекомендуется настроить:

1. **Error tracking** - Sentry, Rollbar
2. **Analytics** - Google Analytics, Mixpanel
3. **Performance** - Vercel Analytics, Lighthouse
4. **Payment monitoring** - Dashboard провайдера

## Поддержка

Для вопросов по интеграции создайте issue в репозитории или свяжитесь с разработчиком.

---

**Важно**: Это базовый шаблон. Перед production запус��ом:
- Проведите security audit
- Настройте proper error handling
- Реализуйте rate limiting
- Добавьте logging
- Настройте backup стратегию