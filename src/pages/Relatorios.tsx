import { useEffect, useState } from 'react';
import { DashboardLayout } from '@layouts/index';
import { Card, Button } from '@components/index';
import { motion } from 'framer-motion';
import { PieChart, Pie, BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Download } from 'lucide-react';

const monthlyData = [
  { month: 'Janeiro', receitas: 450000, despesas: 280000 },
  { month: 'Fevereiro', receitas: 450000, despesas: 290000 },
  { month: 'Março', receitas: 450000, despesas: 275000 },
  { month: 'Abril', receitas: 450000, despesas: 285000 },
  { month: 'Maio', receitas: 450000, despesas: 280000 },
  { month: 'Junho', receitas: 450000, despesas: 295000 },
];

const expensesData = [
  { category: 'Habitação', value: 120000, percentage: 43 },
  { category: 'Alimentação', value: 60000, percentage: 21 },
  { category: 'Transporte', value: 40000, percentage: 14 },
  { category: 'Energia/Água', value: 30000, percentage: 11 },
  { category: 'Outros', value: 30000, percentage: 11 },
];

const incomeData = [
  { category: 'Salário', value: 400000, percentage: 89 },
  { category: 'Freelance', value: 50000, percentage: 11 },
];

export const Relatorios = () => {
  useEffect(() => {
    document.title = 'Relatórios - FinFalo';
  }, []);

  const [activeTab, setActiveTab] = useState<'monthly' | 'annual' | 'expenses' | 'income'>('monthly');

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

  const handleExportPDF = () => {
    console.log('Exportar PDF');
  };

  const handleExportExcel = () => {
    console.log('Exportar Excel');
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
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-4xl font-bold text-finfalo-dark mb-2">
                Relatórios Financeiros
              </h1>
              <p className="text-finfalo-gray-300">
                Análise completa do seu desempenho financeiro
              </p>
            </div>
            <div className="flex gap-3">
              <Button
                variant="outline"
                size="sm"
                onClick={handleExportPDF}
                className="flex items-center gap-2"
              >
                <Download size={18} />
                PDF
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={handleExportExcel}
                className="flex items-center gap-2"
              >
                <Download size={18} />
                Excel
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Tabs */}
        <motion.div variants={itemVariants} className="flex gap-4 border-b border-finfalo-gray-100">
          {[
            { id: 'monthly', label: 'Mensal' },
            { id: 'annual', label: 'Anual' },
            { id: 'expenses', label: 'Despesas' },
            { id: 'income', label: 'Receitas' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`pb-4 px-4 font-semibold transition-colors ${
                activeTab === tab.id
                  ? 'border-b-2 border-finfalo-green text-finfalo-green'
                  : 'text-finfalo-gray-300 hover:text-finfalo-text'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </motion.div>

        {/* Charts */}
        <motion.div variants={itemVariants}>
          {activeTab === 'monthly' && (
            <Card>
              <h3 className="text-xl font-bold text-finfalo-dark mb-6">
                Receitas vs Despesas (Últimos 6 meses)
              </h3>
              <div className="w-full h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={monthlyData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#E8EEF5" />
                    <XAxis dataKey="month" stroke="#A1A8B0" />
                    <YAxis stroke="#A1A8B0" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: '#081423',
                        border: 'none',
                        borderRadius: '8px',
                        color: '#fff',
                      }}
                    />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="receitas"
                      stroke="#16C784"
                      strokeWidth={2}
                      dot={{ fill: '#16C784', r: 5 }}
                    />
                    <Line
                      type="monotone"
                      dataKey="despesas"
                      stroke="#FF6B6B"
                      strokeWidth={2}
                      dot={{ fill: '#FF6B6B', r: 5 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </Card>
          )}

          {activeTab === 'annual' && (
            <Card>
              <h3 className="text-xl font-bold text-finfalo-dark mb-6">
                Comparativo Anual
              </h3>
              <div className="w-full h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={monthlyData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#E8EEF5" />
                    <XAxis dataKey="month" stroke="#A1A8B0" />
                    <YAxis stroke="#A1A8B0" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: '#081423',
                        border: 'none',
                        borderRadius: '8px',
                        color: '#fff',
                      }}
                    />
                    <Legend />
                    <Bar dataKey="receitas" fill="#16C784" />
                    <Bar dataKey="despesas" fill="#FF6B6B" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </Card>
          )}

          {activeTab === 'expenses' && (
            <Card>
              <h3 className="text-xl font-bold text-finfalo-dark mb-6">
                Distribuição de Despesas
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={expensesData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ category, percentage }) =>
                          `${category} (${percentage}%)`
                        }
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {expensesData.map((_, index) => (
                          <div
                            key={index}
                            style={{
                              fill: ['#16C784', '#FF6B6B', '#FFD93D', '#6BCB77', '#4D96FF'][
                                index % 5
                              ],
                            }}
                          />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="space-y-3">
                  {expensesData.map((item, idx) => (
                    <div key={idx} className="flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <div
                          className="w-4 h-4 rounded-full"
                          style={{
                            backgroundColor: ['#16C784', '#FF6B6B', '#FFD93D', '#6BCB77', '#4D96FF'][
                              idx % 5
                            ],
                          }}
                        />
                        <span className="text-finfalo-text">{item.category}</span>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-finfalo-dark">{item.value.toLocaleString('pt-AO')} Kz</p>
                        <p className="text-sm text-finfalo-gray-300">{item.percentage}%</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          )}

          {activeTab === 'income' && (
            <Card>
              <h3 className="text-xl font-bold text-finfalo-dark mb-6">
                Fontes de Receita
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={incomeData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ category, percentage }) =>
                          `${category} (${percentage}%)`
                        }
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {incomeData.map((_, index) => (
                          <div
                            key={index}
                            style={{
                              fill: ['#16C784', '#4D96FF'][index % 2],
                            }}
                          />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="space-y-3">
                  {incomeData.map((item, idx) => (
                    <div key={idx} className="flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <div
                          className="w-4 h-4 rounded-full"
                          style={{
                            backgroundColor: ['#16C784', '#4D96FF'][idx % 2],
                          }}
                        />
                        <span className="text-finfalo-text">{item.category}</span>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-finfalo-dark">{item.value.toLocaleString('pt-AO')} Kz</p>
                        <p className="text-sm text-finfalo-gray-300">{item.percentage}%</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          )}
        </motion.div>

        {/* Summary Stats */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <h3 className="text-sm font-medium text-finfalo-gray-300 mb-2">Total Receitas (Jun)</h3>
            <p className="text-3xl font-bold text-finfalo-green mb-2">450.000 Kz</p>
            <p className="text-sm text-finfalo-gray-300">↑ 5% vs mês anterior</p>
          </Card>
          <Card>
            <h3 className="text-sm font-medium text-finfalo-gray-300 mb-2">Total Despesas (Jun)</h3>
            <p className="text-3xl font-bold text-red-500 mb-2">295.000 Kz</p>
            <p className="text-sm text-finfalo-gray-300">↑ 5% vs mês anterior</p>
          </Card>
          <Card>
            <h3 className="text-sm font-medium text-finfalo-gray-300 mb-2">Saldo Mensal</h3>
            <p className="text-3xl font-bold text-finfalo-green mb-2">155.000 Kz</p>
            <p className="text-sm text-finfalo-gray-300">Poupança acumulada</p>
          </Card>
        </motion.div>
      </motion.div>
    </DashboardLayout>
  );
};
