import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
}

export const Card = ({ children, className = '', hover = false, onClick }: CardProps) => {
  return (
    <motion.div
      whileHover={hover ? { y: -4, boxShadow: '0 10px 15px rgba(0, 0, 0, 0.1)' } : {}}
      onClick={onClick}
      className={`bg-finfalo-white rounded-xl shadow-card p-6 ${className} ${hover ? 'cursor-pointer' : ''}`}
    >
      {children}
    </motion.div>
  );
};
