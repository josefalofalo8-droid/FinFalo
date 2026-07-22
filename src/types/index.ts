// User Types
export interface User {
  id: string;
  email: string;
  displayName: string;
  photoURL?: string;
  createdAt: Date;
  updatedAt: Date;
}

// Financial Data Types
export interface Income {
  id: string;
  userId: string;
  amount: number;
  category: string;
  description: string;
  date: Date;
  isRecurring: boolean;
  frequency?: 'monthly' | 'weekly' | 'daily';
  createdAt: Date;
  updatedAt: Date;
}

export interface Expense {
  id: string;
  userId: string;
  amount: number;
  category: string;
  description: string;
  date: Date;
  isRecurring: boolean;
  frequency?: 'monthly' | 'weekly' | 'daily';
  createdAt: Date;
  updatedAt: Date;
}

export interface FinancialGoal {
  id: string;
  userId: string;
  name: string;
  targetAmount: number;
  currentAmount: number;
  deadline: Date;
  priority: 'low' | 'medium' | 'high';
  category: string;
  status: 'active' | 'completed' | 'cancelled';
  createdAt: Date;
  updatedAt: Date;
}

// Onboarding Types
export interface OnboardingData {
  monthlyIncome: number;
  incomeType: 'fixed' | 'variable';
  otherIncomes: IncomeSource[];
  fixedExpenses: ExpenseCategory[];
  variableExpenses: ExpenseCategory[];
  goals: FinancialGoalData[];
  hasDebts: boolean;
  debtAmount?: number;
  savesMonthly: boolean;
  savingsPercentage?: number;
  wantNotifications: boolean;
  mainFinancialGoal: string;
  notificationPreferences: NotificationPreferences;
}

export interface IncomeSource {
  name: string;
  amount: number;
}

export interface ExpenseCategory {
  category: string;
  amount: number;
}

export interface FinancialGoalData {
  name: string;
  targetAmount: number;
  deadline: Date;
  priority: 'low' | 'medium' | 'high';
}

export interface NotificationPreferences {
  dailySummary: boolean;
  weeklySummary: boolean;
  monthlySummary: boolean;
  budgetAlert: boolean;
  goalAlert: boolean;
}

// Dashboard Types
export interface DashboardData {
  totalBalance: number;
  monthlyIncome: number;
  monthlyExpenses: number;
  monthlySavings: number;
  mainGoal: FinancialGoal | null;
  recentTransactions: Transaction[];
  achievementRate: number;
}

export interface Transaction {
  id: string;
  type: 'income' | 'expense';
  amount: number;
  category: string;
  description: string;
  date: Date;
}

// Report Types
export interface MonthlyReport {
  month: string;
  totalIncome: number;
  totalExpenses: number;
  netSavings: number;
  expenses: ExpenseBreakdown[];
  incomes: IncomeBreakdown[];
}

export interface ExpenseBreakdown {
  category: string;
  amount: number;
  percentage: number;
}

export interface IncomeBreakdown {
  category: string;
  amount: number;
  percentage: number;
}

// Achievement Types
export interface Achievement {
  id: string;
  userId: string;
  title: string;
  description: string;
  icon: string;
  unlockedAt: Date;
  type: 'milestone' | 'streak' | 'goal' | 'other';
}

// Consultant Types
export interface Consultant {
  id: string;
  name: string;
  email: string;
  specialty: string;
  availability: TimeSlot[];
  rating: number;
  reviews: number;
}

export interface TimeSlot {
  day: string;
  startTime: string;
  endTime: string;
}

export interface ConsultationBooking {
  id: string;
  userId: string;
  consultantId: string;
  dateTime: Date;
  topic: string;
  status: 'scheduled' | 'completed' | 'cancelled';
  notes?: string;
}

// Financial Tip Types
export interface FinancialTip {
  id: string;
  title: string;
  content: string;
  category: string;
  author: string;
  views: number;
  likes: number;
  publishedAt: Date;
  featured: boolean;
}

// AI Recommendation Types
export interface FinaRecommendation {
  id: string;
  userId: string;
  title: string;
  description: string;
  recommendation: string;
  impact: string;
  priority: 'low' | 'medium' | 'high';
  createdAt: Date;
  read: boolean;
}

// Calculator Types
export interface BudgetCalculatorInput {
  income: number;
  expenses: number;
}

export interface SavingsCalculatorInput {
  monthlyAmount: number;
  months: number;
  interestRate?: number;
}

export interface EmergencyFundCalculatorInput {
  monthlyExpenses: number;
  months: number; // 3-6 months
}

export interface DebtPayoffCalculatorInput {
  debtAmount: number;
  interestRate: number;
  monthlyPayment: number;
}

export interface GoalCalculatorInput {
  targetAmount: number;
  currentAmount: number;
  monthlyContribution: number;
}
