import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { TransactionChart } from "../transaction-chart";

const txs = [
  {
    payment_reference: "r1",
    amount: 1000,
    date: "2025-01-01",
    status: "successful",
    type: "card",
    metadata: {},
  },
  {
    payment_reference: "r2",
    amount: 500,
    date: "2025-01-02",
    status: "successful",
    type: "card",
    metadata: {},
  },
];

describe("TransactionChart", () => {
  it("renders balance and chart container", () => {
    const wallet = { balance: 1000 } as any;
    render(<TransactionChart transactions={txs as any} wallet={wallet} />);
    expect(screen.getByText(/Available Balance/i)).toBeInTheDocument();
    expect(screen.getByText(/USD\s?1,000/)).toBeInTheDocument();
  });
});
