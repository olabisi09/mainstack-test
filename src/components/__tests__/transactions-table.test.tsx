import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { TransactionsTable } from "../transactions-table";

const defaultFilters = {
  preset: "",
  from: "",
  to: "",
  transactionTypes: [],
  transactionStatuses: [],
};

const txs = [
  {
    payment_reference: "r1",
    amount: 1000,
    date: "2025-01-01",
    status: "successful",
    type: "card",
    metadata: { product_name: "Product A", name: "Alice" },
  },
  {
    payment_reference: "r2",
    amount: 500,
    date: "2025-01-02",
    status: "failed",
    type: "cash",
    metadata: { product_name: "", name: "" },
  },
];

describe("TransactionsTable", () => {
  it("renders transaction count and list when transactions exist", () => {
    render(
      <TransactionsTable
        transactions={txs as any}
        filteredTransactions={txs as any}
        isDrawerOpen={false}
        setDrawerOpen={() => {}}
        filters={defaultFilters as any}
        setFilters={() => {}}
        apply={() => {}}
        clear={() => {}}
        appliedFilters={defaultFilters as any}
      />
    );
    expect(screen.getByText("2 Transactions")).toBeInTheDocument();
  });

  it("shows empty state when no transactions", () => {
    render(
      <TransactionsTable
        transactions={[] as any}
        filteredTransactions={[] as any}
        isDrawerOpen={false}
        setDrawerOpen={() => {}}
        filters={defaultFilters as any}
        setFilters={() => {}}
        apply={() => {}}
        clear={() => {}}
        appliedFilters={defaultFilters as any}
      />
    );
    expect(
      screen.getByText(/No matching transaction found for the selected filter/i)
    ).toBeInTheDocument();
  });
});
