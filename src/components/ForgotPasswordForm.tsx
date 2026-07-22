import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion } from 'framer-motion';
import { Mail, ArrowLeft } from 'lucide-react';
import { Button } from './Button';
import { Input } from './Input';

const forgotPasswordSchema = z.object({
  email: z.string().email('Email inválido'),
});

type ForgotPasswordFormData = z.infer<typeof forgotPasswordSchema>;

interface ForgotPasswordFormProps {
  onSubmit: (data: ForgotPasswordFormData) => Promise<void>;
  onBackClick: () => void;
}

export const ForgotPasswordForm = ({
  onSubmit,
  onBackClick,
}: ForgotPasswordFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<ForgotPasswordFormData>({
    resolver: zodResolver(forgotPasswordSchema),
  });

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-md mx-auto space-y-6"
    >
      <button
        type="button"
        onClick={onBackClick}
        className="flex items-center gap-2 text-finfalo-green hover:text-finfalo-green/80 transition-colors"
      >
        <ArrowLeft size={20} />
        Voltar
      </button>

      <div>
        <h2 className="text-3xl font-bold text-finfalo-dark mb-2">
          Recuperar Palavra-passe
        </h2>
        <p className="text-finfalo-gray-300">
          Insira seu email para receber instruções de recuperação
        </p>
      </div>

      {!isSubmitSuccessful ? (
        <>
          <Input
            label="Email"
            type="email"
            placeholder="seu@email.com"
            icon={<Mail size={20} />}
            error={errors.email?.message}
            {...register('email')}
          />

          <Button
            type="submit"
            variant="primary"
            size="lg"
            loading={isSubmitting}
            className="w-full"
          >
            Enviar Instruções
          </Button>
        </>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="p-4 bg-green-50 border border-green-200 rounded-lg text-center"
        >
          <p className="text-green-800 font-medium">
            Email de recuperação enviado com sucesso!
          </p>
          <p className="text-sm text-green-700 mt-2">
            Verifique seu inbox para as instruções
          </p>
        </motion.div>
      )}
    </motion.form>
  );
};
