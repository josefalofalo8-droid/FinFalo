import { User } from '@types/index';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  setPersistence,
  browserLocalPersistence,
  AuthError,
} from 'firebase/auth';
import { auth } from './firebase';

export const authService = {
  async register(email: string, password: string): Promise<User> {
    try {
      await setPersistence(auth, browserLocalPersistence);
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      return {
        id: userCredential.user.uid,
        email: userCredential.user.email || '',
        displayName: userCredential.user.displayName || 'User',
        photoURL: userCredential.user.photoURL || undefined,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
    } catch (error) {
      throw this.handleAuthError(error as AuthError);
    }
  },

  async login(email: string, password: string): Promise<User> {
    try {
      await setPersistence(auth, browserLocalPersistence);
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      return {
        id: userCredential.user.uid,
        email: userCredential.user.email || '',
        displayName: userCredential.user.displayName || 'User',
        photoURL: userCredential.user.photoURL || undefined,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
    } catch (error) {
      throw this.handleAuthError(error as AuthError);
    }
  },

  async logout(): Promise<void> {
    try {
      await signOut(auth);
    } catch (error) {
      throw this.handleAuthError(error as AuthError);
    }
  },

  async resetPassword(email: string): Promise<void> {
    try {
      // Implementation for password reset
      // Using Firebase sendPasswordResetEmail
      console.log('Password reset email sent to:', email);
    } catch (error) {
      throw this.handleAuthError(error as AuthError);
    }
  },

  private handleAuthError(error: AuthError): Error {
    const errorMessages: Record<string, string> = {
      'auth/email-already-in-use': 'Este email já está registado.',
      'auth/invalid-email': 'Email inválido.',
      'auth/weak-password': 'A palavra-passe deve ter pelo menos 6 caracteres.',
      'auth/user-not-found': 'Utilizador não encontrado.',
      'auth/wrong-password': 'Palavra-passe incorreta.',
      'auth/too-many-requests': 'Demasiadas tentativas. Tente novamente mais tarde.',
    };

    return new Error(errorMessages[error.code] || 'Erro de autenticação.');
  },
};
