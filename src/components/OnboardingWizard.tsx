import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button, Card, Input, ProgressBar } from '@components/index';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { OnboardingData, FinancialGoalData, ExpenseCategory } from '@types/index';

interface OnboardingWizardProps {
  onComplete: (data: OnboardingData) => void;
}

const steps = [
  { title: 'Bem-vindo', description: 'Vamos configurar sua conta' },
  { title: 'Rendimento', description: 'Qual é seu rendimento?' },
  { title: 'Despesas Fixas', description: 'Suas despesas mensais' },
  { title: 'Despesas Variáveis', description: 'Despesas adicionais' },
  { title: 'Metas', description: 'Seus objetivos financeiros' },
  { title: 'Informações', description: 'Detalhes adicionais' },
  { title: 'Notificações', description: 'Preferências de alerta' },
  { title: 'Resumo', description: 'Seu plano financeiro' },
];

export const OnboardingWizard = ({ onComplete }: OnboardingWizardProps) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [data, setData] = useState<Partial<OnboardingData>>({
    monthlyIncome: 0,
    incomeType: 'fixed',
    otherIncomes: [],
    fixedExpenses: [],
    variableExpenses: [],
    goals: [],
    hasDebts: false,
    savesMonthly: false,
    wantNotifications: true,
    mainFinancialGoal: '',
    notificationPreferences: {
      dailySummary: true,
      weeklySummary: true,
      monthlySummary: true,
      budgetAlert: true,
      goalAlert: true,
    },
  });

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      onComplete(data as OnboardingData);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const updateData = (newData: Partial<OnboardingData>) => {
    setData({ ...data, ...newData });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-finfalo-dark to-finfalo-dark/95 flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-2xl">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-3xl font-bold text-finfalo-white">{steps[currentStep].title}</h1>
            <span className="text-finfalo-green font-semibold">
              {currentStep + 1} de {steps.length}
            </span>
          </div>
          <ProgressBar
            percentage={((currentStep + 1) / steps.length) * 100}
            height="h-2"
          />
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-finfalo-white rounded-2xl p-8 shadow-lg mb-8"
          >
            {/* Step 1: Welcome */}
            {currentStep === 0 && (
              <div className="text-center py-8">
                <h2 className="text-2xl font-bold text-finfalo-dark mb-4">
                  Bem-vindo à FinFalo!
                </h2>
                <p className="text-finfalo-gray-300 mb-6 text-lg">
                  Vamos configurar sua conta e criar um plano financeiro personalizado para você.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-left">
                    <div className="w-8 h-8 bg-finfalo-green rounded-full flex items-center justify-center text-white font-bold">✓</div>
                    <span>Gerencie suas receitas e despesas</span>
                  </div>
                  <div className="flex items-center gap-3 text-left">
                    <div className="w-8 h-8 bg-finfalo-green rounded-full flex items-center justify-center text-white font-bold">✓</div>
                    <span>Defina e acompanhe suas metas</span>
                  </div>
                  <div className="flex items-center gap-3 text-left">
                    <div className="w-8 h-8 bg-finfalo-green rounded-full flex items-center justify-center text-white font-bold">✓</div>
                    <span>Receba recomendações personalizadas</span>
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Income */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-finfalo-text mb-2">
                    Rendimento Mensal (Kz)
                  </label>
                  <input
                    type="number"
                    value={data.monthlyIncome || ''}
                    onChange={(e) => updateData({ monthlyIncome: parseFloat(e.target.value) })}
                    className="w-full px-4 py-3 border-2 border-finfalo-gray-100 rounded-lg focus:border-finfalo-green focus:outline-none"
                    placeholder="0.00"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-finfalo-text mb-3">
                    Tipo de Rendimento
                  </label>
                  <div className="flex gap-4">
                    {['fixed', 'variable'].map((type) => (
                      <label key={type} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="incomeType"
                          value={type}
                          checked={data.incomeType === type}
                          onChange={(e) => updateData({ incomeType: e.target.value as 'fixed' | 'variable' })}
                          className="w-4 h-4"
                        />
                        <span className="text-finfalo-text">
                          {type === 'fixed' ? 'Fixo' : 'Variável'}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Fixed Expenses */}
            {currentStep === 2 && (
              <div className="space-y-4">
                <p className="text-finfalo-gray-300 mb-6">
                  Indique suas despesas fixas mensais:
                </p>
                {[
                  'Habitação',
                  'Água',
                  'Energia',
                  'Internet',
                  'Telefone',
                  'Transporte',
                  'Alimentação',
                  'Educação',
                  'Saúde',
                  'Empréstimos',
                ].map((category) => (
                  <div key={category}>
                    <label className="block text-sm font-medium text-finfalo-text mb-1">
                      {category} (Kz)
                    </label>
                    <input
                      type="number"
                      placeholder="0.00"
                      onChange={(e) => {
                        const expenses = [...(data.fixedExpenses || [])];
                        const existing = expenses.findIndex((ex) => ex.category === category);
                        if (existing >= 0) {
                          expenses[existing].amount = parseFloat(e.target.value) || 0;
                        } else if (e.target.value) {
                          expenses.push({ category, amount: parseFloat(e.target.value) });
                        }
                        updateData({ fixedExpenses: expenses });
                      }}
                      className="w-full px-4 py-2 border-2 border-finfalo-gray-100 rounded-lg focus:border-finfalo-green focus:outline-none text-sm"
                    />
                  </div>
                ))}
              </div>
            )}

            {/* Step 4: Variable Expenses */}
            {currentStep === 3 && (
              <div className="space-y-4">
                <p className="text-finfalo-gray-300 mb-6">
                  Indique suas despesas variáveis típicas:
                </p>
                {['Lazer', 'Compras', 'Restaurantes', 'Vestuário', 'Entretenimento'].map(
                  (category) => (
                    <div key={category}>
                      <label className="block text-sm font-medium text-finfalo-text mb-1">
                        {category} (Kz)
                      </label>
                      <input
                        type="number"
                        placeholder="0.00"
                        onChange={(e) => {
                          const expenses = [...(data.variableExpenses || [])];
                          const existing = expenses.findIndex((ex) => ex.category === category);
                          if (existing >= 0) {
                            expenses[existing].amount = parseFloat(e.target.value) || 0;
                          } else if (e.target.value) {
                            expenses.push({ category, amount: parseFloat(e.target.value) });
                          }
                          updateData({ variableExpenses: expenses });
                        }}
                        className="w-full px-4 py-2 border-2 border-finfalo-gray-100 rounded-lg focus:border-finfalo-green focus:outline-none text-sm"
                      />
                    </div>
                  )
                )}
              </div>
            )}

            {/* Step 5: Goals */}
            {currentStep === 4 && (
              <div className="space-y-6">
                <p className="text-finfalo-gray-300 mb-4">
                  Defina suas metas financeiras:
                </p>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-finfalo-text mb-2">
                      Meta Principal
                    </label>
                    <input
                      type="text"
                      placeholder="ex: Comprar casa"
                      value={data.mainFinancialGoal || ''}
                      onChange={(e) => updateData({ mainFinancialGoal: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-finfalo-gray-100 rounded-lg focus:border-finfalo-green focus:outline-none"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 6: Additional Info */}
            {currentStep === 5 && (
              <div className="space-y-6">
                <div>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={data.hasDebts || false}
                      onChange={(e) => updateData({ hasDebts: e.target.checked })}
                      className="w-5 h-5 rounded"
                    />
                    <span className="text-finfalo-text">Tenho dívidas</span>
                  </label>
                </div>
                <div>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={data.savesMonthly || false}
                      onChange={(e) => updateData({ savesMonthly: e.target.checked })}
                      className="w-5 h-5 rounded"
                    />
                    <span className="text-finfalo-text">Costumo poupar mensalmente</span>
                  </label>
                </div>
                <div>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={data.wantNotifications || false}
                      onChange={(e) => updateData({ wantNotifications: e.target.checked })}
                      className="w-5 h-5 rounded"
                    />
                    <span className="text-finfalo-text">Pretendo receber lembretes</span>
                  </label>
                </div>
              </div>
            )}

            {/* Step 7: Notifications */}
            {currentStep === 6 && (
              <div className="space-y-4">
                <p className="text-finfalo-gray-300 mb-6">
                  Escolha suas preferências de notificações:
                </p>
                {[
                  { key: 'dailySummary', label: 'Resumo Diário' },
                  { key: 'weeklySummary', label: 'Resumo Semanal' },
                  { key: 'monthlySummary', label: 'Resumo Mensal' },
                  { key: 'budgetAlert', label: 'Alerta de Orçamento' },
                  { key: 'goalAlert', label: 'Alerta de Metas' },
                ].map(({ key, label }) => (
                  <label key={key} className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={data.notificationPreferences?.[key as keyof typeof data.notificationPreferences] || false}
                      onChange={(e) =>
                        updateData({
                          notificationPreferences: {
                            ...data.notificationPreferences,
                            [key]: e.target.checked,
                          },
                        })
                      }
                      className="w-5 h-5 rounded"
                    />
                    <span className="text-finfalo-text">{label}</span>
                  </label>
                ))}
              </div>
            )}

            {/* Step 8: Summary */}
            {currentStep === 7 && (
              <div className="space-y-6">
                <div className="bg-finfalo-green/10 border border-finfalo-green rounded-lg p-6">
                  <h3 className="text-lg font-bold text-finfalo-dark mb-4">
                    Seu Plano Financeiro
                  </h3>
                  <p className="text-finfalo-text mb-4">
                    Com base nas suas informações, recomendamos poupar 15% do seu rendimento mensal.
                  </p>
                  <p className="text-finfalo-gray-300">
                    Mantendo este ritmo, você poderá atingir sua principal meta em aproximadamente 12 meses!
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="bg-finfalo-gray p-4 rounded-lg">
                    <p className="text-finfalo-gray-300 mb-1">Rendimento</p>
                    <p className="text-lg font-bold text-finfalo-dark">{data.monthlyIncome?.toLocaleString('pt-AO')} Kz</p>
                  </div>
                  <div className="bg-finfalo-gray p-4 rounded-lg">
                    <p className="text-finfalo-gray-300 mb-1">Recomendação</p>
                    <p className="text-lg font-bold text-finfalo-green">15% Poupança</p>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center">
          <Button
            variant="ghost"
            onClick={handlePrev}
            disabled={currentStep === 0}
            className="disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeft size={20} />
            Voltar
          </Button>

          <Button
            variant="primary"
            onClick={handleNext}
            className="flex items-center gap-2"
          >
            {currentStep === steps.length - 1 ? 'Entrar no Dashboard' : 'Continuar'}
            {currentStep < steps.length - 1 && <ChevronRight size={20} />}
          </Button>
        </div>
      </div>
    </div>
  );
};
