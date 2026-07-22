import { motion } from 'framer-motion';
import clsx from 'clsx';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: React.ReactNode;
}

export const Input = ({ label, error, icon, className, ...props }: InputProps) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-finfalo-text mb-2">
          {label}
        </label>
      )}
      <div className="relative">
        {icon && <div className="absolute left-4 top-1/2 -translate-y-1/2 text-finfalo-gray-300">{icon}</div>}
        <input
          className={clsx(
            'w-full px-4 py-3 rounded-lg border-2 border-finfalo-gray-100 focus:border-finfalo-green focus:outline-none transition-colors',
            icon && 'pl-12',
            error && 'border-red-500',
            className
          )}
          {...props}
        />
      </div>
      {error && (
        <motion.p
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-1 text-sm text-red-500"
        >
          {error}
        </motion.p>
      )}
    </div>
  );
};
