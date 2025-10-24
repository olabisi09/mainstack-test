import { CancelIcon } from "../../assets/icons";

export const Drawer: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  content?: React.ReactNode;
}> = ({ isOpen, onClose, title = "Filter", content }) => {
  return (
    <>
      {/* overlay */}
      <div
        className={`fixed inset-0 bg-black/40 transition-opacity duration-300 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
        aria-hidden={!isOpen}
      />

      <aside
        className={`fixed top-0 right-0 z-99 h-full bg-transparent p-2 w-[min(28.5rem,100%)] 
    transition duration-300 ease-in-out
    ${isOpen ? "translate-x-0" : "translate-x-full"}`}
        role="dialog"
        aria-modal="true"
        aria-hidden={!isOpen}
      >
        <div className="bg-background shadow-xl w-full h-full rounded-[20px] flex flex-col">
          <div className="flex items-center justify-between p-4">
            <h3 className="text-lg font-semibold">{title}</h3>
            <button
              onClick={onClose}
              aria-label="Close drawer"
              className="w-[34px] h-[34px] flex items-center justify-center rounded-full hover:bg-accent"
            >
              <CancelIcon />
            </button>
          </div>
          <div className="p-4 flex-1 overflow-auto">{content}</div>
        </div>
      </aside>
    </>
  );
};
