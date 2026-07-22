import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

interface NavbarProps {
  userName?: string;
  onLogout?: () => void;
}

export const Navbar = ({ userName = 'Usuário', onLogout }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-finfalo-white shadow-card sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-finfalo-green to-finfalo-dark rounded-lg flex items-center justify-center">
              <span className="text-finfalo-white font-bold text-lg">F</span>
            </div>
            <span className="text-xl font-bold text-finfalo-dark hidden sm:block">FinFalo</span>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="/dashboard" className="text-finfalo-text hover:text-finfalo-green transition-colors">
              Dashboard
            </a>
            <a href="/receitas" className="text-finfalo-text hover:text-finfalo-green transition-colors">
              Receitas
            </a>
            <a href="/despesas" className="text-finfalo-text hover:text-finfalo-green transition-colors">
              Despesas
            </a>
            <a href="/metas" className="text-finfalo-text hover:text-finfalo-green transition-colors">
              Metas
            </a>
            <a href="/relatorios" className="text-finfalo-text hover:text-finfalo-green transition-colors">
              Relatórios
            </a>
            <a href="/perfil" className="text-finfalo-text hover:text-finfalo-green transition-colors">
              {userName}
            </a>
            <button
              onClick={onLogout}
              className="px-4 py-2 bg-finfalo-green text-finfalo-white rounded-lg hover:brightness-110 transition-all"
            >
              Sair
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden pb-4 border-t border-finfalo-gray-100"
          >
            <a href="/dashboard" className="block py-2 text-finfalo-text hover:text-finfalo-green">
              Dashboard
            </a>
            <a href="/receitas" className="block py-2 text-finfalo-text hover:text-finfalo-green">
              Receitas
            </a>
            <a href="/despesas" className="block py-2 text-finfalo-text hover:text-finfalo-green">
              Despesas
            </a>
            <a href="/metas" className="block py-2 text-finfalo-text hover:text-finfalo-green">
              Metas
            </a>
            <a href="/relatorios" className="block py-2 text-finfalo-text hover:text-finfalo-green">
              Relatórios
            </a>
            <a href="/perfil" className="block py-2 text-finfalo-text hover:text-finfalo-green">
              {userName}
            </a>
            <button
              onClick={onLogout}
              className="w-full mt-2 px-4 py-2 bg-finfalo-green text-finfalo-white rounded-lg"
            >
              Sair
            </button>
          </motion.div>
        )}
      </div>
    </nav>
  );
};
