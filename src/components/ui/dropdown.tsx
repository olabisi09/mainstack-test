import React, { cloneElement, useEffect, useRef, useState } from "react";

type DropdownProps = {
  /** The element that will act as the trigger. We'll clone it to attach handlers. */
  trigger: React.ReactElement<Record<string, unknown>>;
  /** Menu/content shown when open */
  children: React.ReactNode;
  /** Additional wrapper classes */
  className?: string;
  /** Additional menu classes */
  menuClassName?: string;
  /** Whether the dropdown should close when an item inside is clicked (default true) */
  closeOnSelect?: boolean;
};

export const Dropdown: React.FC<DropdownProps> = ({
  trigger,
  children,
  className = "",
  menuClassName = "",
  closeOnSelect = true,
}) => {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onDocDown = (e: Event) => {
      if (!rootRef.current) return;
      const target = e.target as Node | null;
      if (target && !rootRef.current.contains(target)) {
        setOpen(false);
      }
    };

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", onDocDown as EventListener);
    document.addEventListener("touchstart", onDocDown as EventListener);
    document.addEventListener("keydown", onKey as EventListener);
    return () => {
      document.removeEventListener("mousedown", onDocDown as EventListener);
      document.removeEventListener("touchstart", onDocDown as EventListener);
      document.removeEventListener("keydown", onKey as EventListener);
    };
  }, []);

  // Clone trigger to attach click handler and accessibility attributes
  const triggerEl = cloneElement(trigger, {
    onClick: (e: React.MouseEvent) => {
      e.stopPropagation();
      setOpen((v) => !v);
      // call original handler if present
      const orig = (trigger.props as unknown as { onClick?: unknown })?.onClick;
      if (typeof orig === "function")
        (orig as (ev: React.MouseEvent) => void)(e);
    },
    "aria-expanded": open,
    "aria-haspopup": "menu",
  });

  // Close when clicking inside the menu on elements that should close the dropdown
  const onMenuClick: React.MouseEventHandler = (e) => {
    if (!closeOnSelect) return;
    const target = e.target as HTMLElement;
    // If clicked element (or its ancestor) has data-dropdown-close="true" then close
    let el: HTMLElement | null = target;
    while (el && el !== rootRef.current) {
      if (el.dataset && el.dataset.dropdownClose === "true") {
        setOpen(false);
        return;
      }
      el = el.parentElement;
    }
  };

  return (
    <div ref={rootRef} className={`relative inline-block ${className}`}>
      {triggerEl}

      {open && (
        <div
          role="menu"
          className={`absolute right-0 mt-2 z-50 bg-white rounded-md shadow-lg ${menuClassName}`}
          onClick={onMenuClick}
        >
          {children}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
