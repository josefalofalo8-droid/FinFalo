/**
 * Calculate compound interest
 */
export const calculateCompoundInterest = (
  principal: number,
  rate: number,
  time: number,
  frequency: number = 12
): number => {
  return principal * Math.pow(1 + rate / (100 * frequency), frequency * time);
};

/**
 * Calculate loan repayment (EMI)
 */
export const calculateEMI = (
  principal: number,
  annualRate: number,
  months: number
): { emi: number; totalPayment: number; totalInterest: number } => {
  const monthlyRate = annualRate / 12 / 100;
  const emi =
    (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) /
    (Math.pow(1 + monthlyRate, months) - 1);
  const totalPayment = emi * months;
  const totalInterest = totalPayment - principal;

  return {
    emi: Math.round(emi),
    totalPayment: Math.round(totalPayment),
    totalInterest: Math.round(totalInterest),
  };
};

/**
 * Calculate savings goal time
 */
export const calculateSavingsGoalTime = (
  targetAmount: number,
  currentAmount: number,
  monthlySavings: number
): { months: number; years: number } => {
  const remainingAmount = targetAmount - currentAmount;
  if (remainingAmount <= 0) return { months: 0, years: 0 };

  const months = Math.ceil(remainingAmount / monthlySavings);
  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;

  return { months: remainingMonths, years };
};

/**
 * Calculate emergency fund
 */
export const calculateEmergencyFund = (
  monthlyExpenses: number,
  months: number = 6
): number => {
  return monthlyExpenses * months;
};

/**
 * Calculate debt payoff time
 */
export const calculateDebtPayoff = (
  debtAmount: number,
  monthlyPayment: number,
  annualInterestRate: number = 0
): { months: number; years: number; totalInterest: number } => {
  let remainingDebt = debtAmount;
  let months = 0;
  let totalInterest = 0;
  const monthlyRate = annualInterestRate / 12 / 100;

  while (remainingDebt > 0 && months < 600) {
    const interest = remainingDebt * monthlyRate;
    totalInterest += interest;
    remainingDebt -= monthlyPayment - interest;
    months++;
  }

  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;

  return {
    months: remainingMonths,
    years,
    totalInterest: Math.round(totalInterest),
  };
};

/**
 * Calculate budget allocation (50/30/20 rule)
 */
export const calculateBudgetAllocation = (income: number) => {
  return {
    essentials: Math.round(income * 0.5), // 50%
    wants: Math.round(income * 0.3), // 30%
    savings: Math.round(income * 0.2), // 20%
  };
};

/**
 * Calculate inflation impact
 */
export const calculateInflationImpact = (
  amount: number,
  inflationRate: number,
  years: number
): { futureValue: number; loss: number } => {
  const futureValue = amount / Math.pow(1 + inflationRate / 100, years);
  const loss = amount - futureValue;

  return {
    futureValue: Math.round(futureValue),
    loss: Math.round(loss),
  };
};
