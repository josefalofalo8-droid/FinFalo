import { create } from 'zustand';
import { User, OnboardingData } from '@types/index';

interface AuthStore {
  user: User | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  setUser: (user: User | null) => void;
  setLoading: (loading: boolean) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  isLoading: false,
  isAuthenticated: false,
  setUser: (user) => set({ user, isAuthenticated: !!user }),
  setLoading: (loading) => set({ isLoading: loading }),
  logout: () => set({ user: null, isAuthenticated: false }),
}));

interface OnboardingStore {
  isOnboarding: boolean;
  currentStep: number;
  data: OnboardingData | null;
  setOnboarding: (isOnboarding: boolean) => void;
  setCurrentStep: (step: number) => void;
  setData: (data: Partial<OnboardingData>) => void;
  resetOnboarding: () => void;
}

export const useOnboardingStore = create<OnboardingStore>((set) => ({
  isOnboarding: true,
  currentStep: 0,
  data: null,
  setOnboarding: (isOnboarding) => set({ isOnboarding }),
  setCurrentStep: (step) => set({ currentStep: step }),
  setData: (newData) => set((state) => ({
    data: state.data ? { ...state.data, ...newData } : (newData as OnboardingData),
  })),
  resetOnboarding: () => set({ isOnboarding: true, currentStep: 0, data: null }),
}));

interface ThemeStore {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  setDarkMode: (isDark: boolean) => void;
}

export const useThemeStore = create<ThemeStore>((set) => ({
  isDarkMode: false,
  toggleDarkMode: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
  setDarkMode: (isDark) => set({ isDarkMode: isDark }),
}));
