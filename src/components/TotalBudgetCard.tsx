import { useBudgets, Expense } from "../contexts/BudgetsContext";
import BudgetCard from "./BudgetCard";

export default function TotalBudgetCard() {
  const { expenses, budgets } = useBudgets();
  const totalAmountSpent = expenses.reduce(
    (total: number, expense: Expense) => total + expense.amount,
    0
  );
  const totalBudgetAcrossAllBudgets = budgets.reduce((total, budget) => total + budget.max, 0);

  if (totalBudgetAcrossAllBudgets === 0) return null;

  return (
    <BudgetCard
      amount={totalAmountSpent}
      name="Total"
      gray
      max={totalBudgetAcrossAllBudgets}
      hideButtons
      // clickhandlers are not used but need to be defined!
      onAddExpenseClick={null}
      onViewExpensesClick={null}
    />
  );
}
