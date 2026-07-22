/* eslint-disable */

/**
 * Mock authentication service for development
 * Replace with real Firebase/Supabase implementation in production
 */

export const mockAuthService = {
  async login(email: string, password: string) {
    console.log('Mock login:', email);
    return { success: true, userId: '123' };
  },

  async signup(email: string, password: string, displayName: string) {
    console.log('Mock signup:', email, displayName);
    return { success: true, userId: '123' };
  },

  async logout() {
    console.log('Mock logout');
    return { success: true };
  },

  async resetPassword(email: string) {
    console.log('Mock password reset:', email);
    return { success: true };
  },
};

/**
 * Mock database service for development
 */
export const mockDatabaseService = {
  async getUserData(userId: string) {
    console.log('Mock get user data:', userId);
    return {
      id: userId,
      name: 'José Falo',
      email: 'josefalofalo8@gmail.com',
      monthlyIncome: 450000,
      monthlyExpenses: 280000,
    };
  },

  async saveExpense(userId: string, expense: any) {
    console.log('Mock save expense:', userId, expense);
    return { success: true, id: '123' };
  },

  async saveIncome(userId: string, income: any) {
    console.log('Mock save income:', userId, income);
    return { success: true, id: '123' };
  },

  async saveGoal(userId: string, goal: any) {
    console.log('Mock save goal:', userId, goal);
    return { success: true, id: '123' };
  },
};
