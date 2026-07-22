import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion } from 'framer-motion';
import { Mail, Lock, User, Eye, EyeOff } from 'lucide-react';
import { Button } from './Button';
import { Input } from './Input';

const signupSchema = z
  .object({
    displayName: z.string().min(2, 'Nome inválido'),
    email: z.string().email('Email inválido'),
    password: z.string().min(6, 'Mínimo 6 caracteres'),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Palavras-passe não coincidem',
    path: ['confirmPassword'],
  });

type SignupFormData = z.infer<typeof signupSchema>;

interface SignupFormProps {
  onSubmit: (data: SignupFormData) => Promise<void>;
  onLoginClick: () => void;
}

export const SignupForm = ({ onSubmit, onLoginClick }: SignupFormProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
  });

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-md mx-auto space-y-6"
    >
      <div>
        <h2 className="text-3xl font-bold text-finfalo-dark mb-2">Criar Conta</h2>
        <p className="text-finfalo-gray-300">Comece sua jornada financeira com FinFalo</p>
      </div>

      <Input
        label="Nome Completo"
        type="text"
        placeholder="João Silva"
        icon={<User size={20} />}
        error={errors.displayName?.message}
        {...register('displayName')}
      />

      <Input
        label="Email"
        type="email"
        placeholder="seu@email.com"
        icon={<Mail size={20} />}
        error={errors.email?.message}
        {...register('email')}
      />

      <div>
        <label className="block text-sm font-medium text-finfalo-text mb-2">
          Palavra-passe
        </label>
        <div className="relative">
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="••••••••"
            className="w-full px-4 py-3 pl-12 rounded-lg border-2 border-finfalo-gray-100 focus:border-finfalo-green focus:outline-none transition-colors"
            {...register('password')}
          />
          <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-finfalo-gray-300" size={20} />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-finfalo-gray-300"
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>
        {errors.password && (
          <p className="mt-1 text-sm text-red-500">{errors.password.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-finfalo-text mb-2">
          Confirmar Palavra-passe
        </label>
        <div className="relative">
          <input
            type={showConfirmPassword ? 'text' : 'password'}
            placeholder="••••••••"
            className="w-full px-4 py-3 pl-12 rounded-lg border-2 border-finfalo-gray-100 focus:border-finfalo-green focus:outline-none transition-colors"
            {...register('confirmPassword')}
          />
          <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-finfalo-gray-300" size={20} />
          <button
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-finfalo-gray-300"
          >
            {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>
        {errors.confirmPassword && (
          <p className="mt-1 text-sm text-red-500">{errors.confirmPassword.message}</p>
        )}
      </div>

      <Button
        type="submit"
        variant="primary"
        size="lg"
        loading={isSubmitting}
        className="w-full"
      >
        Criar Conta
      </Button>

      <div className="text-center">
        <p className="text-finfalo-gray-300 mb-2">
          Já tem conta?
        </p>
        <button
          type="button"
          onClick={onLoginClick}
          className="text-finfalo-green font-semibold hover:underline"
        >
          Faça login aqui
        </button>
      </div>
    </motion.form>
  );
};
