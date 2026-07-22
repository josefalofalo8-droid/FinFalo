import { useState } from 'react';
import { motion } from 'framer-motion';
import { LoginForm, SignupForm, ForgotPasswordForm } from '@components/index';

type AuthMode = 'login' | 'signup' | 'forgot-password';

export const AuthLayout = () => {
  const [mode, setMode] = useState<AuthMode>('login');

  const handleLogin = async (data: any) => {
    try {
      console.log('Login:', data);
      // TODO: Implement login logic
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  const handleSignup = async (data: any) => {
    try {
      console.log('Signup:', data);
      // TODO: Implement signup logic
    } catch (error) {
      console.error('Signup error:', error);
    }
  };

  const handleForgotPassword = async (data: any) => {
    try {
      console.log('Forgot Password:', data);
      // TODO: Implement forgot password logic
    } catch (error) {
      console.error('Forgot password error:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-finfalo-dark to-finfalo-dark/95 flex items-center justify-center px-4">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-96 h-96 rounded-full opacity-5 border border-finfalo-green"
            animate={{
              x: Math.sin(Date.now() / 1000 + i) * 50,
              y: Math.cos(Date.now() / 1000 + i) * 50,
            }}
            transition={{
              duration: 20 + i * 2,
              repeat: Infinity,
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
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 w-full max-w-md"
      >
        {/* Header */}
        <div className="text-center mb-8">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring' }}
            className="inline-block mb-4"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-finfalo-green to-finfalo-green/70 rounded-2xl flex items-center justify-center shadow-lg shadow-finfalo-green/30">
              <span className="text-4xl font-bold text-finfalo-white">F</span>
            </div>
          </motion.div>
          <h1 className="text-3xl font-bold text-finfalo-white mb-2">FinFalo</h1>
          <p className="text-finfalo-gray/80">Gestão Financeira Familiar</p>
        </div>

        {/* Form Container */}
        <div className="bg-finfalo-white/10 backdrop-blur-md rounded-2xl p-8 border border-finfalo-white/20">
          {mode === 'login' && (
            <LoginForm
              onSubmit={handleLogin}
              onSignupClick={() => setMode('signup')}
              onForgotPasswordClick={() => setMode('forgot-password')}
            />
          )}

          {mode === 'signup' && (
            <SignupForm
              onSubmit={handleSignup}
              onLoginClick={() => setMode('login')}
            />
          )}

          {mode === 'forgot-password' && (
            <ForgotPasswordForm
              onSubmit={handleForgotPassword}
              onBackClick={() => setMode('login')}
            />
          )}
        </div>

        {/* Footer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center text-sm text-finfalo-gray/60 mt-8"
        >
          © 2024 FinFalo. Todos os direitos reservados.
        </motion.p>
      </motion.div>
    </div>
  );
};
