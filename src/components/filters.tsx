import { Button } from "./ui/button";
import { Input } from "./ui/input";
import MultiSelect from "./ui/multiselect";
import type { FiltersState } from "../hooks/useTransactionFilters";

export const Filters: React.FC<{
  value: FiltersState;
  onChange: (filters: FiltersState) => void;
  onApply?: () => void;
  onClear?: () => void;
}> = ({ value, onChange, onApply, onClear }) => {
  const presetDates = ["Today", "Last 7 days", "This month", "Last 3 months"];
  const transactionTypeOptions = [
    { label: "Store Transactions", value: "Store Transactions" },
    { label: "Get Tipped", value: "Get Tipped" },
    { label: "Withdrawals", value: "Withdrawal" },
    { label: "Chargebacks", value: "Chargebacks" },
    { label: "Refer & Earn", value: "Refer & Earn" },
  ];
  const transactionStatusOptions = [
    { label: "Successful", value: "Successful" },
    { label: "Pending", value: "Pending" },
    { label: "Failed", value: "Failed" },
  ];
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (onApply) onApply();
      }}
      className="h-full flex flex-col justify-between"
    >
      <div>
        <section className="flex gap-3 mb-6">
          {presetDates.map((date) => (
            <Button
              key={date}
              variant="outline"
              className="text-sm font-semibold leading-4! tracking-[-0.4px]"
              onClick={() =>
                onChange({
                  ...value,
                  preset: value.preset === date ? "" : date,
                })
              }
            >
              {date}
            </Button>
          ))}
        </section>
        <section className="grid gap-6">
          <div className="grid grid-cols-2 items-end gap-1.5">
            <Input
              id="date-from"
              label="Date Range"
              type="date"
              value={value.from}
              onChange={(e) =>
                onChange({ ...value, from: e.target.value, preset: "" })
              }
            />
            <Input
              id="date-to"
              type="date"
              value={value.to}
              onChange={(e) =>
                onChange({ ...value, to: e.target.value, preset: "" })
              }
            />
          </div>
          <MultiSelect
            value={value.transactionTypes}
            onChange={(selected) =>
              onChange({ ...value, transactionTypes: selected })
            }
            label="Transaction Type"
            options={transactionTypeOptions}
          />
          <MultiSelect
            value={value.transactionStatuses}
            onChange={(selected) =>
              onChange({ ...value, transactionStatuses: selected })
            }
            label="Transaction Status"
            options={transactionStatusOptions}
          />
        </section>
      </div>
      <div className="flex gap-3 items-stretch">
        <Button
          type="button"
          onClick={() => {
            if (onClear) onClear();
          }}
          variant="outline"
          className="flex-1"
        >
          Clear
        </Button>
        <Button
          disabled={
            !value.from &&
            !value.to &&
            !value.transactionTypes.length &&
            !value.transactionStatuses.length
          }
          type="submit"
          className="flex-1"
        >
          Apply
        </Button>
      </div>
    </form>
  );
};
