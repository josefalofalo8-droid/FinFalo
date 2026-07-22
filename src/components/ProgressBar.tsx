import { motion } from 'framer-motion';

interface ProgressBarProps {
  percentage: number;
  showLabel?: boolean;
  height?: string;
  className?: string;
}

export const ProgressBar = ({
  percentage,
  showLabel = true,
  height = 'h-2',
  className = '',
}: ProgressBarProps) => {
  return (
    <div className={`w-full bg-finfalo-gray-100 rounded-full overflow-hidden ${height} ${className}`}>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${Math.min(percentage, 100)}%` }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="bg-gradient-to-r from-finfalo-green to-finfalo-green h-full flex items-center justify-end pr-2"
      >
        {showLabel && percentage > 10 && (
          <span className="text-xs font-bold text-white">{percentage}%</span>
        )}
      </motion.div>
    </div>
  );
};
