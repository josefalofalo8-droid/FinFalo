import { motion } from 'framer-motion';

interface SkeletonProps {
  width?: string | number;
  height?: string | number;
  className?: string;
  variant?: 'text' | 'circle' | 'rect';
}

export const Skeleton = ({
  width = '100%',
  height = '1rem',
  className = '',
  variant = 'rect',
}: SkeletonProps) => {
  const borderRadius = {
    text: '0.25rem',
    circle: '50%',
    rect: '0.5rem',
  };

  return (
    <motion.div
      animate={{ opacity: [0.5, 1, 0.5] }}
      transition={{ duration: 1.5, repeat: Infinity }}
      style={{
        width,
        height,
        borderRadius: borderRadius[variant],
        backgroundColor: '#E8EEF5',
      }}
      className={className}
    />
  );
};
