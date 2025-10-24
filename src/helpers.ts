//function to convert number to currency format with two decimal places
export const formatCurrency = (
  amount: number,
  noDecimalIfWhole?: boolean
): string => {
  if (amount === undefined || amount === null) {
    return "USD 0.00";
  }
  return `USD ${amount.toLocaleString(undefined, {
    minimumFractionDigits: noDecimalIfWhole ? 0 : 2,
    maximumFractionDigits: 2,
  })}`;
};

export const capitalize = (str: string): string => {
  if (!str) return "";
  return str.replace(/\b\w/g, (char) => char.toUpperCase());
};

export const getInitials = (str: string): string => {
  if (!str) return "";
  const names = str.split(" ");
  const initials = names.map((name) => name.charAt(0).toUpperCase());
  return initials.join("");
};

export const formatDate = (dateStr: string): string => {
  if (!dateStr) return "";
  const date = new Date(dateStr);
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  return date.toLocaleDateString(undefined, options);
};
