import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface SplashScreenProps {
  onComplete: () => void;
}

export const SplashScreen = ({ onComplete }: SplashScreenProps) => {
  const [showText1, setShowText1] = useState(false);
  const [showText2, setShowText2] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setShowText1(true), 1500);
    const timer2 = setTimeout(() => setShowText2(true), 3500);
    const timer3 = setTimeout(onComplete, 5000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [onComplete]);

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
        duration: 0.8,
      },
    },
  };

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-finfalo-dark to-finfalo-dark/90 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-finfalo-green rounded-full opacity-20"
            animate={{
              x: Math.random() * 400 - 200,
              y: Math.random() * 400 - 200,
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: Math.random() * 10 + 20,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="absolute inset-0 flex flex-col items-center justify-center z-10"
      >
        {/* Logo */}
        <motion.div
          variants={itemVariants}
          animate={{
            scale: [1, 1.1, 1],
            rotateY: [0, 360],
          }}
          transition={{
            duration: 2,
            ease: 'easeInOut',
          }}
          className="mb-8"
        >
          <motion.div
            animate={{
              boxShadow: [
                '0 0 20px rgba(22, 199, 132, 0.3)',
                '0 0 40px rgba(22, 199, 132, 0.6)',
                '0 0 20px rgba(22, 199, 132, 0.3)',
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            className="w-24 h-24 bg-gradient-to-br from-finfalo-green to-finfalo-green/70 rounded-2xl flex items-center justify-center"
          >
            <span className="text-5xl font-bold text-finfalo-white">F</span>
          </motion.div>
        </motion.div>

        {/* Text 1 */}
        {showText1 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-4"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-finfalo-white mb-4">
              Olá, seja bem-vindo à FinFalo.
            </h1>
            <p className="text-lg text-finfalo-gray/80 inline-block">
              {"A sua gest".split('').map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: i * 0.05 }}
                >
                  {char}
                </motion.span>
              ))}
              ão financeira começa agora.
            </p>
          </motion.div>
        )}

        {/* Text 2 */}
        {showText2 && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-xl text-finfalo-green font-semibold mt-8"
          >
            Transformando sonhos em realidade financeira...
          </motion.p>
        )}
      </motion.div>

      {/* Progress Bar */}
      <motion.div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-48">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: 5, ease: 'easeInOut' }}
          className="h-1 bg-gradient-to-r from-finfalo-green to-finfalo-green/50 rounded-full"
        />
      </motion.div>
    </div>
  );
};
