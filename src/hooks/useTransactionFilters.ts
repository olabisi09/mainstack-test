import { useMemo, useState } from "react";

export type FiltersState = {
  preset?: string;
  from?: string;
  to?: string;
  transactionTypes: string[];
  transactionStatuses: string[];
};

export const defaultFilters: FiltersState = {
  preset: "",
  from: "",
  to: "",
  transactionTypes: [],
  transactionStatuses: [],
};

export function useTransactionFilters(transactions: Transaction[]) {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [filters, setFilters] = useState<FiltersState>(defaultFilters);
  const [appliedFilters, setAppliedFilters] =
    useState<FiltersState>(defaultFilters);

  const apply = () => {
    setAppliedFilters(filters);
    setDrawerOpen(false);
  };

  const clear = () => {
    setFilters(defaultFilters);
    setAppliedFilters(defaultFilters);
  };

  const filteredTransactions = useMemo(() => {
    if (!transactions?.length) return [];

    const now = new Date();
    let fromDate: Date | null = null;
    let toDate: Date | null = null;

    if (appliedFilters.preset) {
      const preset = appliedFilters.preset;
      toDate = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate(),
        23,
        59,
        59
      );
      if (preset === "Today") {
        fromDate = new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate(),
          0,
          0,
          0
        );
      } else if (preset === "Last 7 days") {
        fromDate = new Date(now);
        fromDate.setDate(now.getDate() - 6);
        fromDate.setHours(0, 0, 0, 0);
      } else if (preset === "This month") {
        fromDate = new Date(now.getFullYear(), now.getMonth(), 1);
      } else if (preset === "Last 3 months") {
        fromDate = new Date(now.getFullYear(), now.getMonth() - 2, 1);
      }
    } else if (appliedFilters.from || appliedFilters.to) {
      if (appliedFilters.from) {
        const d = new Date(appliedFilters.from);
        fromDate = new Date(
          d.getFullYear(),
          d.getMonth(),
          d.getDate(),
          0,
          0,
          0
        );
      }
      if (appliedFilters.to) {
        const d = new Date(appliedFilters.to);
        toDate = new Date(
          d.getFullYear(),
          d.getMonth(),
          d.getDate(),
          23,
          59,
          59
        );
      }
    }

    return transactions.filter((tx) => {
      if ((fromDate || toDate) && tx?.date) {
        const txDate = new Date(tx.date);
        if (fromDate && txDate < fromDate) return false;
        if (toDate && txDate > toDate) return false;
      }

      if (appliedFilters.transactionStatuses?.length) {
        const txStatus = String(tx?.status || "").toLowerCase();
        const matchStatus = appliedFilters.transactionStatuses.some(
          (s) => s.toLowerCase() === txStatus
        );
        if (!matchStatus) return false;
      }

      if (appliedFilters.transactionTypes?.length) {
        const candidates = [
          String(tx?.type || ""),
          String(tx?.metadata?.product_name || ""),
          String(tx?.metadata?.name || ""),
        ]
          .join(" ")
          .toLowerCase();

        const matchType = appliedFilters.transactionTypes.some((t) =>
          candidates.includes(t.toLowerCase())
        );
        if (!matchType) return false;
      }

      return true;
    });
  }, [transactions, appliedFilters]);

  return {
    isDrawerOpen,
    setDrawerOpen,
    filters,
    setFilters,
    appliedFilters,
    apply,
    clear,
    filteredTransactions,
  };
}
