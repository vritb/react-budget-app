import React, { useContext } from "react";
import {useLocalStorage} from "usehooks-ts";
import { v4 as uuidV4 } from "uuid";
//import useLocalStorage from "../hooks/useLocalStorage";

export type Budget = {
  id: string;
  name: string;
  max: number;
}

export type Expense = {
  id: string;
  description: string;
  amount: number;
  budgetId: string;
}

interface BudgetsContextInterface {
  budgets: Budget[];
  expenses: Expense[];
  getBudgetExpenses;
  addExpense;
  addBudget;
  deleteBudget;
  deleteExpense;
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

  function getBudgetExpenses(budgetId:string) {
    return (expenses as Expense[]).filter((expense:Expense) => expense.budgetId === budgetId);
  }
  function addExpense({ description, amount, budgetId} : Expense) {
    setExpenses(prevExpenses => {
      return [...prevExpenses, { id: uuidV4(), description, amount, budgetId }];
    });
  }
  function addBudget({ name, max } : Budget) {
    setBudgets((prevBudgets : Budget[]) => {
      if (prevBudgets.find((budget) => budget.name === name)) {
        return prevBudgets;
      }
      return [...prevBudgets, { id: uuidV4(), name, max }];
    });
  }
  function deleteBudget({ id }) {
    setExpenses((prevExpenses : Expense[]) => {
      return prevExpenses.map((expense) => {
        if (expense.budgetId !== id) return expense;
        return { ...expense, budgetId: UNCATEGORIZED_BUDGET_ID };
      });
    });

    setBudgets((prevBudgets : Budget[]) => {
      return prevBudgets.filter((budget) => budget.id !== id);
    });
  }

  function deleteExpense({ id }) {
    setExpenses((prevExpenses : Expense[]) => {
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
