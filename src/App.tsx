import { InfoIcon } from "./assets/icons";
import { FloatingBar } from "./components/floating-bar";
import { Header } from "./components/header";
import { TransactionChart } from "./components/transaction-chart";
import { TransactionsTable } from "./components/transactions-table";
import { formatCurrency } from "./helpers";
import { useAPI } from "./hooks/useAPI";

function App() {
  const { transactionsQuery, walletQuery } = useAPI();

  const transactions = transactionsQuery.data?.data as Transaction[];
  const wallet = walletQuery.data?.data as Wallet;

  return (
    <main>
      <Header />
      <div className="px-12 xl:px-35 pt-16 pb-23.25">
        <section className="flex flex-col xl:flex-row justify-between mb-20.5">
          <TransactionChart transactions={transactions} wallet={wallet} />
          <div className="xl:w-67.75 grid gap-8">
            <div className="grid gap-2">
              <div className="flex items-center justify-between">
                <h6 className="text-muted text-sm leading-4 tracking-[-0.2px]">
                  Ledger Balance
                </h6>
                <InfoIcon />
              </div>
              <p className="text-4xl font-bold leading-12 tracking-[-1.5px]">
                {formatCurrency(wallet?.ledger_balance) || "0.00"}
              </p>
            </div>
            <div className="grid gap-2">
              <div className="flex items-center justify-between">
                <h6 className="text-muted text-sm leading-4 tracking-[-0.2px]">
                  Total Payout
                </h6>
                <InfoIcon />
              </div>
              <p className="text-4xl font-bold leading-12 tracking-[-1.5px]">
                {formatCurrency(wallet?.total_payout) || "0.00"}
              </p>
            </div>
            <div className="grid gap-2">
              <div className="flex items-center justify-between">
                <h6 className="text-muted text-sm leading-4 tracking-[-0.2px]">
                  Total Revenue
                </h6>
                <InfoIcon />
              </div>
              <p className="text-4xl font-bold leading-12 tracking-[-1.5px]">
                {formatCurrency(wallet?.total_revenue) || "0.00"}
              </p>
            </div>
            <div className="grid gap-2">
              <div className="flex items-center justify-between">
                <h6 className="text-muted text-sm leading-4 tracking-[-0.2px]">
                  Pending Payout
                </h6>
                <InfoIcon />
              </div>
              <p className="text-4xl font-bold leading-12 tracking-[-1.5px]">
                {formatCurrency(wallet?.pending_payout) || "0.00"}
              </p>
            </div>
          </div>
        </section>
        <section>
          <TransactionsTable transactions={transactions} />
        </section>
      </div>
      <FloatingBar />
    </main>
  );
}

export default App;
