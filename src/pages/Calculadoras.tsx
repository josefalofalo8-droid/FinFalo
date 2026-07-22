import { useEffect, useState } from 'react';
import { DashboardLayout } from '@layouts/index';
import { Card, Button, Input } from '@components/index';
import { motion } from 'framer-motion';
import { Calculator as CalcIcon } from 'lucide-react';

interface Calculator {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const calculators: Calculator[] = [
  {
    id: 'budget',
    title: 'Calculadora de Orçamento',
    description: 'Planifique seu orçamento mensal',
    icon: <CalcIcon size={32} />,
  },
  {
    id: 'savings',
    title: 'Calculadora de Poupança',
    description: 'Calcule quanto pode poupar',
    icon: <CalcIcon size={32} />,
  },
  {
    id: 'emergency',
    title: 'Fundo de Emergência',
    description: 'Quanto precisa para emergências',
    icon: <CalcIcon size={32} />,
  },
  {
    id: 'debt',
    title: 'Quitação de Dívidas',
    description: 'Calcule o tempo de quitação',
    icon: <CalcIcon size={32} />,
  },
  {
    id: 'goals',
    title: 'Objetivos Financeiros',
    description: 'Alcance suas metas',
    icon: <CalcIcon size={32} />,
  },
  {
    id: 'compound',
    title: 'Juros Compostos',
    description: 'Cresça seu dinheiro',
    icon: <CalcIcon size={32} />,
  },
];

export const Calculadoras = () => {
  useEffect(() => {
    document.title = 'Calculadoras - FinFalo';
  }, []);

  const [activeCalc, setActiveCalc] = useState<string | null>(null);
  const [result, setResult] = useState<any>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const handleCalculate = (id: string) => {
    // Simulated calculations
    const calculations: Record<string, any> = {
      budget: {
        income: 450000,
        essentials: 45,
        nonessentials: 30,
        savings: 25,
      },
      savings: {
        monthly: 112500,
        annual: 1350000,
        in5years: 6750000,
      },
      emergency: {
        monthlyExpenses: 280000,
        recommended3months: 840000,
        recommended6months: 1680000,
      },
      debt: {
        debtAmount: 500000,
        monthlyPayment: 50000,
        months: 10,
        years: 0.83,
      },
    };

    setActiveCalc(id);
    setResult(calculations[id]);
  };

  return (
    <DashboardLayout>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-8"
      >
        {/* Header */}
        <motion.div variants={itemVariants}>
          <h1 className="text-4xl font-bold text-finfalo-dark mb-2">
            Calculadoras Financeiras
          </h1>
          <p className="text-finfalo-gray-300">
            Ferramentas para ajudá-lo a tomar melhores decisões financeiras
          </p>
        </motion.div>

        {!activeCalc ? (
          /* Grid of Calculators */
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {calculators.map((calc, idx) => (
              <motion.div key={calc.id} variants={itemVariants}>
                <Card
                  hover={true}
                  onClick={() => handleCalculate(calc.id)}
                  className="cursor-pointer h-full flex flex-col items-start"
                >
                  <div className="p-3 bg-blue-100 text-blue-600 rounded-lg mb-4">
                    {calc.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-finfalo-dark mb-2">
                    {calc.title}
                  </h3>
                  <p className="text-finfalo-gray-300 flex-grow">
                    {calc.description}
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="mt-4"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleCalculate(calc.id);
                    }}
                  >
                    Usar
                  </Button>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          /* Calculator Result */
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <Button
              variant="ghost"
              onClick={() => {
                setActiveCalc(null);
                setResult(null);
              }}
            >
              ← Voltar
            </Button>

            <Card>
              <h2 className="text-2xl font-bold text-finfalo-dark mb-6">
                {calculators.find((c) => c.id === activeCalc)?.title}
              </h2>

              {activeCalc === 'budget' && result && (
                <div className="space-y-6">
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-finfalo-text mb-2">
                        Rendimento Mensal (Kz)
                      </label>
                      <input
                        type="number"
                        defaultValue={450000}
                        className="w-full px-4 py-3 border-2 border-finfalo-gray-100 rounded-lg"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-finfalo-gray-100">
                    <div className="text-center">
                      <p className="text-finfalo-gray-300 text-sm mb-2">Essenciais</p>
                      <p className="text-2xl font-bold text-finfalo-dark">{result.essentials}%</p>
                    </div>
                    <div className="text-center">
                      <p className="text-finfalo-gray-300 text-sm mb-2">Não Essenciais</p>
                      <p className="text-2xl font-bold text-finfalo-dark">{result.nonessentials}%</p>
                    </div>
                    <div className="text-center">
                      <p className="text-finfalo-gray-300 text-sm mb-2">Poupança</p>
                      <p className="text-2xl font-bold text-finfalo-green">{result.savings}%</p>
                    </div>
                  </div>
                </div>
              )}

              {activeCalc === 'savings' && result && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 bg-finfalo-gray rounded-lg">
                      <p className="text-finfalo-gray-300 text-sm mb-2">Poupança Mensal</p>
                      <p className="text-2xl font-bold text-finfalo-green">
                        {result.monthly.toLocaleString('pt-AO')} Kz
                      </p>
                    </div>
                    <div className="p-4 bg-finfalo-gray rounded-lg">
                      <p className="text-finfalo-gray-300 text-sm mb-2">Poupança Anual</p>
                      <p className="text-2xl font-bold text-finfalo-green">
                        {result.annual.toLocaleString('pt-AO')} Kz
                      </p>
                    </div>
                    <div className="p-4 bg-finfalo-gray rounded-lg">
                      <p className="text-finfalo-gray-300 text-sm mb-2">Em 5 Anos</p>
                      <p className="text-2xl font-bold text-finfalo-green">
                        {result.in5years.toLocaleString('pt-AO')} Kz
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {activeCalc === 'emergency' && result && (
                <div className="space-y-6">
                  <div className="space-y-4">
                    <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                      <p className="text-blue-900 text-sm mb-1">Despesas Mensais</p>
                      <p className="text-2xl font-bold text-blue-600">
                        {result.monthlyExpenses.toLocaleString('pt-AO')} Kz
                      </p>
                    </div>
                    <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                      <p className="text-green-900 text-sm mb-1">Recomendado (3 meses)</p>
                      <p className="text-2xl font-bold text-green-600">
                        {result.recommended3months.toLocaleString('pt-AO')} Kz
                      </p>
                    </div>
                    <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                      <p className="text-green-900 text-sm mb-1">Ideal (6 meses)</p>
                      <p className="text-2xl font-bold text-green-600">
                        {result.recommended6months.toLocaleString('pt-AO')} Kz
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {activeCalc === 'debt' && result && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-finfalo-gray rounded-lg">
                      <p className="text-finfalo-gray-300 text-sm mb-2">Valor da Dívida</p>
                      <p className="text-2xl font-bold text-finfalo-dark">
                        {result.debtAmount.toLocaleString('pt-AO')} Kz
                      </p>
                    </div>
                    <div className="p-4 bg-finfalo-gray rounded-lg">
                      <p className="text-finfalo-gray-300 text-sm mb-2">Pagamento Mensal</p>
                      <p className="text-2xl font-bold text-finfalo-dark">
                        {result.monthlyPayment.toLocaleString('pt-AO')} Kz
                      </p>
                    </div>
                  </div>
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-center">
                    <p className="text-green-900 text-sm mb-2">Tempo de Quitação</p>
                    <p className="text-3xl font-bold text-green-600">
                      {result.months} meses
                    </p>
                    <p className="text-green-700 text-sm mt-2">({result.years.toFixed(2)} anos)</p>
                  </div>
                </div>
              )}
            </Card>
          </motion.div>
        )}
      </motion.div>
    </DashboardLayout>
  );
};
