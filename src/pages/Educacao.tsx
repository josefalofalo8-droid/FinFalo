import { useEffect, useState } from 'react';
import { DashboardLayout } from '@layouts/index';
import { Card, Button } from '@components/index';
import { motion } from 'framer-motion';
import { ArrowRight, ThumbsUp, MessageCircle } from 'lucide-react';

interface FinancialTip {
  id: string;
  title: string;
  category: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  views: number;
  likes: number;
  featured: boolean;
}

const tips: FinancialTip[] = [
  {
    id: '1',
    title: '10 Dicas para Economizar 100.000 Kz por Mês',
    category: 'Poupança',
    excerpt: 'Descubra as melhores estratégias para reduzir despesas...',
    content: 'Conteúdo completo do artigo...',
    author: 'José Falo',
    date: '2024-07-20',
    views: 2534,
    likes: 345,
    featured: true,
  },
  {
    id: '2',
    title: 'Como Criar um Orçamento Eficaz',
    category: 'Orçamento',
    excerpt: 'Aprenda a planejar suas finanças de forma inteligente...',
    content: 'Conteúdo completo do artigo...',
    author: 'Maria Silva',
    date: '2024-07-18',
    views: 1890,
    likes: 267,
    featured: false,
  },
  {
    id: '3',
    title: 'Investimentos para Iniciantes',
    category: 'Investimentos',
    excerpt: 'Comece a investir com segurança e conhecimento...',
    content: 'Conteúdo completo do artigo...',
    author: 'João Santos',
    date: '2024-07-15',
    views: 3124,
    likes: 512,
    featured: true,
  },
  {
    id: '4',
    title: 'Quitando Dívidas em 12 Meses',
    category: 'Dívidas',
    excerpt: 'Um plano prático para eliminar dívidas rapidamente...',
    content: 'Conteúdo completo do artigo...',
    author: 'Ana Costa',
    date: '2024-07-12',
    views: 2156,
    likes: 389,
    featured: false,
  },
];

const dailyTip = {
  title: 'Dica Financeira do Dia',
  message: 'Use a regra 50/30/20: 50% para necessidades, 30% para desejos e 20% para poupança.',
  icon: '💡',
};

export const Educacao = () => {
  useEffect(() => {
    document.title = 'Educação Financeira - FinFalo';
  }, []);

  const [selectedTip, setSelectedTip] = useState<FinancialTip | null>(null);
  const [filter, setFilter] = useState<string>('all');

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

  const filteredTips = filter === 'all' ? tips : tips.filter((t) => t.category === filter);
  const categories = ['all', ...new Set(tips.map((t) => t.category))];

  return (
    <DashboardLayout>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-8"
      >
        {!selectedTip ? (
          <>
            {/* Header */}
            <motion.div variants={itemVariants}>
              <h1 className="text-4xl font-bold text-finfalo-dark mb-2">
                Educação Financeira
              </h1>
              <p className="text-finfalo-gray-300">
                Aprenda a gerir melhor suas finanças
              </p>
            </motion.div>

            {/* Daily Tip */}
            <motion.div variants={itemVariants}>
              <Card className="bg-gradient-to-r from-finfalo-green/10 to-finfalo-green/5 border border-finfalo-green/20">
                <div className="flex items-start gap-4">
                  <div className="text-4xl">{dailyTip.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-finfalo-dark mb-2">
                      {dailyTip.title}
                    </h3>
                    <p className="text-finfalo-text mb-4">{dailyTip.message}</p>
                    <Button
                      variant="primary"
                      size="sm"
                      className="flex items-center gap-2"
                    >
                      Ler mais <ArrowRight size={16} />
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Filters */}
            <motion.div variants={itemVariants} className="flex gap-2 overflow-x-auto pb-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-4 py-2 rounded-full font-semibold transition-all whitespace-nowrap ${
                    filter === cat
                      ? 'bg-finfalo-green text-finfalo-white'
                      : 'bg-finfalo-gray text-finfalo-text hover:bg-finfalo-gray-200'
                  }`}
                >
                  {cat === 'all' ? 'Todas' : cat}
                </button>
              ))}
            </motion.div>

            {/* Articles Grid */}
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {filteredTips.map((tip) => (
                <motion.div key={tip.id} variants={itemVariants}>
                  <Card
                    hover={true}
                    onClick={() => setSelectedTip(tip)}
                    className="cursor-pointer h-full flex flex-col"
                  >
                    {tip.featured && (
                      <div className="inline-block px-3 py-1 bg-finfalo-green text-finfalo-white text-xs font-bold rounded-full mb-3 w-fit">
                        Destaque
                      </div>
                    )}
                    <h3 className="text-lg font-semibold text-finfalo-dark mb-2">
                      {tip.title}
                    </h3>
                    <p className="text-finfalo-gray-300 mb-4 flex-grow">{tip.excerpt}</p>
                    <div className="flex items-center justify-between text-sm text-finfalo-gray-300 mb-4 pb-4 border-b border-finfalo-gray-100">
                      <span>{tip.author}</span>
                      <span>{new Date(tip.date).toLocaleDateString('pt-AO')}</span>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-finfalo-gray-300">
                      <div className="flex items-center gap-1">
                        <ThumbsUp size={16} />
                        {tip.likes}
                      </div>
                      <div className="flex items-center gap-1">
                        <MessageCircle size={16} />
                        {Math.floor(tip.views / 10)}
                      </div>
                      <div className="ml-auto">
                        {tip.views} visualizações
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </>
        ) : (
          /* Article View */
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <Button
              variant="ghost"
              onClick={() => setSelectedTip(null)}
            >
              ← Voltar
            </Button>

            <Card>
              <div className="mb-6">
                <div className="inline-block px-3 py-1 bg-finfalo-green text-finfalo-white text-sm font-bold rounded-full mb-4">
                  {selectedTip.category}
                </div>
                <h1 className="text-3xl font-bold text-finfalo-dark mb-4">
                  {selectedTip.title}
                </h1>
                <div className="flex items-center gap-4 text-finfalo-gray-300">
                  <span>Por {selectedTip.author}</span>
                  <span>•</span>
                  <span>{new Date(selectedTip.date).toLocaleDateString('pt-AO')}</span>
                  <span>•</span>
                  <span>{selectedTip.views} visualizações</span>
                </div>
              </div>

              <div className="prose prose-sm max-w-none text-finfalo-text mb-8 pb-8 border-b border-finfalo-gray-100">
                <p>{selectedTip.content}</p>
              </div>

              <div className="flex items-center gap-4">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-2"
                >
                  <ThumbsUp size={18} />
                  Gostei ({selectedTip.likes})
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-2"
                >
                  <MessageCircle size={18} />
                  Comentar
                </Button>
              </div>
            </Card>
          </motion.div>
        )}
      </motion.div>
    </DashboardLayout>
  );
};
