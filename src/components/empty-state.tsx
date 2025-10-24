import { ReceiptIcon } from "../assets/icons";

export const EmptyState: React.FC<{
  title?: string;
  description?: string;
  cta?: React.ReactNode;
}> = ({ title, description, cta }) => {
  return (
    <div className="mx-auto flex flex-col justify-center py-16 max-w-92.25">
      <div className="w-12 h-12 mb-5 rounded-2xl grid place-items-center bg-[linear-gradient(135deg,#DBDEE6_1.89%,#F6F7F9_98.77%)]">
        <ReceiptIcon />
      </div>
      <h2 className="text-2xl font-bold mb-2.5">
        {title || "No Data Available"}
      </h2>
      <p className="text-sm text-muted">
        {description || "There are no transactions to display."}
      </p>
      {cta && <div className="mt-8">{cta}</div>}
    </div>
  );
};
