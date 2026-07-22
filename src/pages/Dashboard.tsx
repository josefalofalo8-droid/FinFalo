import { useEffect } from 'react';
import { DashboardLayout } from '@layouts/index';
import { StatsCard, Card, ProgressBar } from '@components/index';
import { motion } from 'framer-motion';
import {
  TrendingUp,
  Wallet,
  Target,
  BarChart3,
  Calculator,
  BookOpen,
} from 'lucide-react';

export const Dashboard = () => {
  useEffect(() => {
    document.title = 'Dashboard - FinFalo';
  }, []);

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
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <DashboardLayout userName="José Falo" onLogout={() => {}}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-8"
      >
        {/* Header */}
        <motion.div variants={itemVariants}>
          <h1 className="text-4xl font-bold text-finfalo-dark mb-2">
            Bom dia, José
          </h1>
          <p className="text-finfalo-gray-300">
            Aqui está um resumo do seu desempenho financeiro
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <motion.div variants={itemVariants}>
            <StatsCard
              title="Saldo Atual"
              value="850.000 Kz"
              icon={<Wallet size={24} />}
              color="green"
              trend={12}
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <StatsCard
              title="Receitas Mês"
              value="450.000 Kz"
              icon={<TrendingUp size={24} />}
              color="blue"
              trend={5}
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <StatsCard
              title="Despesas Mês"
              value="280.000 Kz"
              icon={<Wallet size={24} />}
              color="orange"
              trend={-3}
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <StatsCard
              title="Poupança"
              value="170.000 Kz"
              icon={<Target size={24} />}
              color="purple"
              trend={8}
            />
          </motion.div>
        </motion.div>

        {/* Main Goal */}
        <motion.div variants={itemVariants}>
          <Card className="bg-gradient-to-br from-finfalo-dark to-finfalo-dark/90">
            <div className="text-finfalo-white">
              <h3 className="text-lg font-semibold mb-2">Meta Principal</h3>
              <p className="text-finfalo-gray/80 mb-4">
                Comprar casa - 2.500.000 Kz
              </p>
              <ProgressBar percentage={34} showLabel={true} className="mb-4" />
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-finfalo-gray/80">Poupado</p>
                  <p className="text-xl font-bold">850.000 Kz</p>
                </div>
                <div>
                  <p className="text-finfalo-gray/80">Restante</p>
                  <p className="text-xl font-bold">1.650.000 Kz</p>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Main Cards */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {[
            {
              title: 'Receitas',
              description: 'Gerir suas receitas',
              icon: <TrendingUp size={32} />,
              color: 'bg-blue-100 text-blue-600',
            },
            {
              title: 'Despesas',
              description: 'Acompanhar despesas',
              icon: <Wallet size={32} />,
              color: 'bg-orange-100 text-orange-600',
            },
            {
              title: 'Metas',
              description: 'Definir objetivos',
              icon: <Target size={32} />,
              color: 'bg-purple-100 text-purple-600',
            },
            {
              title: 'Relatórios',
              description: 'Visualizar análises',
              icon: <BarChart3 size={32} />,
              color: 'bg-green-100 text-green-600',
            },
            {
              title: 'Calculadoras',
              description: 'Ferramentas financeiras',
              icon: <Calculator size={32} />,
              color: 'bg-yellow-100 text-yellow-600',
            },
            {
              title: 'Educação',
              description: 'Aprender finanças',
              icon: <BookOpen size={32} />,
              color: 'bg-pink-100 text-pink-600',
            },
          ].map((item, idx) => (
            <motion.div key={idx} variants={itemVariants}>
              <Card hover={true} className="cursor-pointer">
                <div className={`inline-block p-3 rounded-lg mb-4 ${item.color}`}>
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-finfalo-dark mb-1">
                  {item.title}
                </h3>
                <p className="text-finfalo-gray-300">{item.description}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </DashboardLayout>
  );
};
