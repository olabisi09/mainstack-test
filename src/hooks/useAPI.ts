import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const baseURL = "https://fe-task-api.mainstack.io";

export const useAPI = () => {
  const transactionsQuery = useQuery({
    queryKey: ["transactions"],
    queryFn: async () =>
      await axios.get<Transaction[]>(`${baseURL}/transactions`),
  });

  const walletQuery = useQuery({
    queryKey: ["wallet"],
    queryFn: async () => await axios.get<Wallet>(`${baseURL}/wallet`),
  });

  return { transactionsQuery, walletQuery };
};
