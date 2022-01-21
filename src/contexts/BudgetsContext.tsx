import React, { useContext } from "react";
import { useLocalStorage } from "usehooks-ts";
import { v4 as uuidV4 } from "uuid";

export type Budget = {
  id: string;
  name: string;
  max: number;
};

export type Expense = {
  id: string;
  description: string;
  amount: number;
  budgetId: string;
};

interface BudgetsContextInterface {
  budgets: Budget[];
  expenses: Expense[];
  getBudgetExpenses(budgetId: string): Expense[];
  addExpense({ description, amount, budgetId }: Expense): void;
  addBudget({ name, max }: Budget): void;
  deleteBudget(id: string): void;
  deleteExpense(id: string): void;
}

const BudgetsContext = React.createContext<BudgetsContextInterface>(
  {} as BudgetsContextInterface
);

export const UNCATEGORIZED_BUDGET_ID = "Uncategorized";

export function useBudgets() {
  return useContext(BudgetsContext);
}

export const BudgetsProvider = ({ children }) => {
  const [budgets, setBudgets] = useLocalStorage<Budget[]>("budgets", []);
  const [expenses, setExpenses] = useLocalStorage<Expense[]>("expenses", []);

  function addBudget({ name, max }: Budget): void {
    setBudgets((prevBudgets: Budget[]) => {
      if (prevBudgets.find((budget) => budget.name === name)) {
        return prevBudgets;
      }
      return [...prevBudgets, { id: uuidV4(), name, max }];
    });
  }
  function deleteBudget(id: string) {
    setExpenses((prevExpenses: Expense[]) => {
      return prevExpenses.map((expense) => {
        if (expense.budgetId !== id) return expense;
        return { ...expense, budgetId: UNCATEGORIZED_BUDGET_ID };
      });
    });
    setBudgets((prevBudgets: Budget[]) => {
      return prevBudgets.filter((budget) => budget.id !== id);
    });
  }

  function getBudgetExpenses(budgetId: string): Expense[] {
    return (expenses as Expense[]).filter(
      (expense: Expense) => expense.budgetId === budgetId
    );
  }
  function addExpense({ description, amount, budgetId }: Expense) {
    setExpenses((prevExpenses) => {
      return [...prevExpenses, { id: uuidV4(), description, amount, budgetId }];
    });
  }
  function deleteExpense(id: string) {
    setExpenses((prevExpenses: Expense[]) => {
      return prevExpenses.filter((expense) => expense.id !== id);
    });
  }

  return (
    <BudgetsContext.Provider
      value={{
        budgets,
        expenses,
        getBudgetExpenses,
        addExpense,
        addBudget,
        deleteBudget,
        deleteExpense,
      }}
    >
      {children}
    </BudgetsContext.Provider>
  );
};
