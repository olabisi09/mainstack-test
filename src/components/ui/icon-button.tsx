import type { ButtonHTMLAttributes } from "react";

export const IconButton: React.FC<
  ButtonHTMLAttributes<HTMLButtonElement> & { icon: React.ReactNode }
> = ({ icon, ...props }) => {
  return (
    <button
      className="p-2.5 cursor-pointer rounded-full flex items-center justify-center"
      {...props}
    >
      {icon}
    </button>
  );
};
