import { Line, LineChart, ResponsiveContainer, XAxis } from "recharts";
import { format, parseISO } from "date-fns";

export const TransactionChart = ({
  transactions,
  wallet,
}: {
  transactions: Transaction[];
  wallet: Wallet;
}) => {
  const lineData =
    transactions
      ?.map((transaction) => ({
        name: transaction.date,
        uv: transaction.amount,
      }))
      .sort(
        (a, b) => new Date(a.name).getTime() - new Date(b.name).getTime()
      ) ?? [];

  const xTicks = lineData.length
    ? [lineData?.[0].name, lineData?.[lineData.length - 1].name]
    : undefined;

  return (
    <div className="w-full xl:w-191.25">
      <div className="flex items-center gap-4 sm:gap-16">
        <section className="grid gap-2">
          <h3 className="text-muted text-sm leading-4 tracking-[-0.2px]">
            Available Balance
          </h3>
          <p className="text-4xl font-bold leading-12 tracking-[-1.5px]">
            USD {wallet?.balance.toLocaleString() || "0.00"}
          </p>
        </section>
        <button className="bg-foreground text-background px-13 py-3.5 leading-6 tracking-[-0.4px] rounded-larger">
          Withdraw
        </button>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={lineData} width={765} height={257}>
          <XAxis
            dataKey="name"
            tickLine={false}
            stroke="#DBDEE5"
            ticks={xTicks}
            interval={"preserveStartEnd"}
            tickFormatter={(date) => format(parseISO(date), "MMM d, yyyy")}
            tick={{ fill: "#56616B", fontWeight: "500" }}
          />
          {/* <YAxis width="auto" /> */}
          <Line
            type="monotone"
            dot={false}
            activeDot={false}
            dataKey="uv"
            stroke="#FF5403"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
