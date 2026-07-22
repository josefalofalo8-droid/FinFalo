import { useEffect } from 'react';
import { DashboardLayout } from '@layouts/index';
import { Card, Button, Input } from '@components/index';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, Mail, Phone } from 'lucide-react';

interface Consultant {
  id: string;
  name: string;
  specialty: string;
  available: boolean;
  rating: number;
}

const consultants: Consultant[] = [
  {
    id: '1',
    name: 'Dr. João Silva',
    specialty: 'Planejamento Financeiro',
    available: true,
    rating: 4.8,
  },
  {
    id: '2',
    name: 'Dra. Maria Santos',
    specialty: 'Investimentos',
    available: true,
    rating: 4.9,
  },
  {
    id: '3',
    name: 'Eng. Carlos Mendes',
    specialty: 'Impostos e Deduções',
    available: false,
    rating: 4.7,
  },
];

export const Consultoria = () => {
  useEffect(() => {
    document.title = 'Consultoria - FinFalo';
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
      transition: { duration: 0.5 },
    },
  };

  const handleBooking = (consultantId: string) => {
    console.log('Agendar consulta com:', consultantId);
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
            Consultoria Financeira
          </h1>
          <p className="text-finfalo-gray-300">
            Agende uma consulta com nossos especialistas financeiros
          </p>
        </motion.div>

        {/* Consultants */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {consultants.map((consultant) => (
            <motion.div key={consultant.id} variants={itemVariants}>
              <Card className="h-full flex flex-col">
                <div className="w-16 h-16 bg-gradient-to-br from-finfalo-green to-finfalo-green/70 rounded-full flex items-center justify-center mb-4">
                  <User size={32} className="text-finfalo-white" />
                </div>
                <h3 className="text-lg font-semibold text-finfalo-dark mb-1">
                  {consultant.name}
                </h3>
                <p className="text-sm text-finfalo-green font-medium mb-4">
                  {consultant.specialty}
                </p>
                <div className="flex items-center gap-1 mb-4">
                  <span className="text-yellow-400">★</span>
                  <span className="font-semibold text-finfalo-dark">
                    {consultant.rating}
                  </span>
                  <span className="text-finfalo-gray-300 text-sm">/ 5.0</span>
                </div>
                <Button
                  variant={consultant.available ? 'primary' : 'ghost'}
                  size="sm"
                  disabled={!consultant.available}
                  className="mt-auto"
                  onClick={() => handleBooking(consultant.id)}
                >
                  {consultant.available ? 'Agendar' : 'Indisponível'}
                </Button>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Booking Form */}
        <motion.div variants={itemVariants}>
          <Card>
            <h2 className="text-2xl font-bold text-finfalo-dark mb-6">
              Formulário de Agendamento
            </h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  label="Nome Completo"
                  icon={<User size={20} />}
                  placeholder="Seu nome"
                />
                <Input
                  label="Email"
                  icon={<Mail size={20} />}
                  type="email"
                  placeholder="seu@email.com"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  label="Telefone"
                  icon={<Phone size={20} />}
                  placeholder="+244 9xx xxx xxx"
                />
                <div>
                  <label className="block text-sm font-medium text-finfalo-text mb-2">
                    Consultor
                  </label>
                  <select className="w-full px-4 py-3 border-2 border-finfalo-gray-100 rounded-lg focus:border-finfalo-green focus:outline-none">
                    <option>Selecione um consultor</option>
                    {consultants
                      .filter((c) => c.available)
                      .map((c) => (
                        <option key={c.id} value={c.id}>
                          {c.name}
                        </option>
                      ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  label="Data"
                  icon={<Calendar size={20} />}
                  type="date"
                />
                <Input
                  label="Hora"
                  icon={<Clock size={20} />}
                  type="time"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-finfalo-text mb-2">
                  Assunto
                </label>
                <textarea
                  placeholder="Descreva sua situação financeira e dúvidas"
                  rows={4}
                  className="w-full px-4 py-3 border-2 border-finfalo-gray-100 rounded-lg focus:border-finfalo-green focus:outline-none resize-none"
                />
              </div>

              <Button variant="primary" size="lg" className="w-full">
                Agendar Consulta
              </Button>
            </form>
          </Card>
        </motion.div>
      </motion.div>
    </DashboardLayout>
  );
};
