import { motion } from 'framer-motion';

interface StatsCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  trend?: number;
  color?: 'green' | 'blue' | 'purple' | 'orange';
}

const colorMap = {
  green: 'bg-green-100 text-green-600',
  blue: 'bg-blue-100 text-blue-600',
  purple: 'bg-purple-100 text-purple-600',
  orange: 'bg-orange-100 text-orange-600',
};

export const StatsCard = ({
  title,
  value,
  icon,
  trend,
  color = 'green',
}: StatsCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="bg-finfalo-white rounded-xl shadow-card p-6"
    >
      <div className="flex justify-between items-start mb-4">
        <div className={`p-3 rounded-lg ${colorMap[color]}`}>
          {icon}
        </div>
        {trend !== undefined && (
          <span className={`text-sm font-semibold ${trend > 0 ? 'text-green-600' : 'text-red-600'}`}>
            {trend > 0 ? '+' : ''}{trend}%
          </span>
        )}
      </div>
      <h3 className="text-sm font-medium text-finfalo-gray-300 mb-2">{title}</h3>
      <p className="text-2xl font-bold text-finfalo-dark">{value}</p>
    </motion.div>
  );
};
