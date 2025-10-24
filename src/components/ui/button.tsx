import type { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  icon,
  children,
  variant = "primary",
  className,
  ...props
}) => {
  return (
    <button
      className={`pl-5 pr-5 py-3 cursor-pointer rounded-larger flex items-center justify-center gap-1 text-nowrap font-semibold leading-6 tracking-[-0.4px] ${
        variant === "primary"
          ? "bg-foreground text-background disabled:bg-disabled"
          : variant === "outline"
          ? "border pl-4.5! pr-4.5! py-2.5! bg-background border-accent text-foreground hover:bg-accent"
          : "bg-accent text-foreground"
      } ${className || ""}`}
      {...props}
    >
      {children}
      {icon}
    </button>
  );
};
