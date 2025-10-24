import { ArrowIcon, ChevronArrow, DownloadIcon } from "../assets/icons";
import { capitalize, formatCurrency, formatDate } from "../helpers";
import { Button } from "./ui/button";
import { Drawer } from "./ui/drawer";
import { Filters } from "./filters";
import { type FiltersState } from "../hooks/useTransactionFilters";
import { EmptyState } from "./empty-state";

interface TransactionsTableProps {
  transactions: Transaction[];
  // optional externalized filter state & controls
  filteredTransactions: Transaction[] | null;
  isDrawerOpen: boolean;
  setDrawerOpen: (open: boolean) => void;
  filters: FiltersState;
  setFilters: (f: FiltersState) => void;
  apply: () => void;
  clear: () => void;
  appliedFilters: FiltersState;
}

export const TransactionsTable: React.FC<TransactionsTableProps> = ({
  filteredTransactions,
  isDrawerOpen,
  setDrawerOpen,
  filters,
  setFilters,
  apply,
  clear,
  appliedFilters,
}) => {
  const appliedFiltersCount = Object.values(appliedFilters ?? {}).filter((v) =>
    Array.isArray(v) ? v.length > 0 : Boolean(v)
  ).length;

  return (
    <div>
      <section className="flex items-center justify-between">
        <div>
          <h2 className="font-bold text-2xl leading-8 tracking-[-0.6px]">
            {filteredTransactions?.length || 0} Transactions
          </h2>
          <p className="text-muted font-medium text-sm tracking-[-0.2px]">
            Your transactions for the selected period
          </p>
        </div>
        <div className="flex gap-4">
          <Button
            variant="secondary"
            className="flex gap-1"
            icon={<ChevronArrow />}
            onClick={() => setDrawerOpen(true)}
          >
            Filter
            {appliedFiltersCount > 0 && (
              <span className="bg-foreground text-background text-xs font-semibold leading-4 tracking-[-0.2px] px-2 py-0.5 rounded-full">
                {appliedFiltersCount}
              </span>
            )}
          </Button>
          <Button variant="secondary" icon={<DownloadIcon />}>
            Export list
          </Button>
        </div>
      </section>
      <hr className="my-6 border-accent" />
      {filteredTransactions?.length === 0 ? (
        <EmptyState
          title="No matching transaction found for the selected filter"
          description="Change your filters to see more results, or add a new product."
          cta={
            <Button onClick={clear} variant="secondary">
              Clear Filter
            </Button>
          }
        />
      ) : (
        <section className="grid gap-6">
          {filteredTransactions?.map((transaction) => (
            <div
              key={transaction?.payment_reference}
              className="flex justify-between"
            >
              <div className="flex items-center gap-[.9063rem]">
                <div
                  className={`w-12 h-12 grid place-items-center rounded-full ${
                    transaction?.status === "successful"
                      ? "bg-[#E3FCF2] text-[#075132]"
                      : "bg-[#F9E3E0] text-[#961100]"
                  }`}
                >
                  <ArrowIcon
                    className={`${
                      transaction?.status === "successful" ? "" : "rotate-180"
                    }`}
                  />
                </div>
                <div>
                  <h4 className="text-base font-medium leading-6 tracking-[-0.2px]">
                    {transaction?.metadata?.product_name ||
                      `Cash ${transaction?.type}`}
                  </h4>
                  {transaction?.metadata?.name ? (
                    <p
                      className={`text-sm text-muted leading-6 tracking-[-0.2px]`}
                    >
                      {capitalize(transaction?.metadata?.name)}
                    </p>
                  ) : (
                    <p
                      className={`text-sm leading-6 tracking-[-0.2px] ${
                        transaction?.status === "successful"
                          ? "text-[#0EA163]"
                          : "text-muted"
                      }`}
                    >
                      {capitalize(transaction?.status)}
                    </p>
                  )}
                </div>
              </div>
              <div className="grid gap-1">
                <h4 className="font-bold text-end text-base leading-[150%] tracking-[-0.4px]">
                  {formatCurrency(transaction?.amount, true)}
                </h4>
                <p className="text-muted text-end font-medium text-sm leading-4 tracking-[-0.2px]">
                  {formatDate(transaction?.date)}
                </p>
              </div>
            </div>
          ))}
        </section>
      )}
      <Drawer
        isOpen={isDrawerOpen}
        onClose={() => setDrawerOpen(false)}
        content={
          <Filters
            value={filters}
            onChange={setFilters}
            onApply={apply}
            onClear={clear}
          />
        }
      />
    </div>
  );
};
