import { useEffect } from 'react';
import { DashboardLayout } from '@layouts/index';
import { motion } from 'framer-motion';

export const Despesas = () => {
  useEffect(() => {
    document.title = 'Despesas - FinFalo';
  }, []);

  return (
    <DashboardLayout>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-8"
      >
        <h1 className="text-4xl font-bold text-finfalo-dark">
          Gestão de Despesas
        </h1>
        <p className="text-finfalo-gray-300">
          Em construção...
        </p>
      </motion.div>
    </DashboardLayout>
  );
};
