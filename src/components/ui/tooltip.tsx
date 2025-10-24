import type { HTMLAttributes } from "react";

interface TooltipProps extends HTMLAttributes<HTMLDivElement> {
  text: string;
}

export const Tooltip: React.FC<TooltipProps> = ({
  text,
  className = "",
  ...props
}) => {
  return (
    <div className={className} {...props}>
      <div className="relative inline-block">
        <div
          style={{
            position: "absolute",
            left: -6,
            top: "50%",
            transform: "translateY(-50%)",
            width: 0,
            height: 0,
            borderTop: "6px solid transparent",
            borderBottom: "6px solid transparent",
            borderRight: "6px solid var(--color-foreground)",
          }}
        ></div>
        <div className="rounded shadow-lg bg-foreground text-background whitespace-nowrap text-sm px-3 py-1">
          {text}
        </div>
      </div>
    </div>
  );
};
