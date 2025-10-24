import { useEffect, useRef, useState } from "react";
import "./multiselect.css";

export type Option = { value: string; label: string };

type MultiSelectProps = {
  options: Option[];
  value: string[];
  onChange: (next: string[]) => void;
  placeholder?: string;
  className?: string;
  label?: string;
  id?: string;
};

export default function MultiSelect({
  options,
  value,
  onChange,
  placeholder = "Select...",
  className = "",
  label,
  id,
}: MultiSelectProps) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function onDoc(e: MouseEvent) {
      if (!rootRef.current) return;
      if (!rootRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
      if (e.key === "Enter") setOpen((s) => !s);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  function toggleValue(val: string) {
    const next = value.includes(val)
      ? value.filter((s) => s !== val)
      : [...value, val];
    onChange(next);
  }

  const selectedLabels = options
    .filter((o) => value.includes(o.value))
    .map((o) => o.label);

  return (
    <div className="flex flex-col">
      {label && (
        <label htmlFor={id} className="mb-2 text-sm font-semibold">
          {label}
        </label>
      )}
      <div className={`ms-select-root ${className}`} ref={rootRef}>
        <button
          type="button"
          className={`ms-select-header focus:outline-none focus:ring-2! focus:ring-foreground! ${
            open ? "open" : ""
          }`}
          aria-haspopup="listbox"
          aria-expanded={open}
          onClick={() => setOpen((s) => !s)}
        >
          <div
            className="ms-select-label font-medium"
            title={selectedLabels.join(", ")}
          >
            {selectedLabels.length > 0
              ? selectedLabels.join(", ")
              : placeholder}
          </div>
          <svg
            className={`ms-select-caret ${open ? "rot" : ""}`}
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden
          >
            <path
              d="M6 9l6 6 6-6"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {open && (
          <div
            className="ms-select-dropdown"
            role="listbox"
            aria-multiselectable
          >
            {options.map((opt) => {
              const checked = value.includes(opt.value);
              return (
                <div
                  key={opt.value}
                  role="option"
                  aria-selected={checked}
                  tabIndex={0}
                  className="ms-select-row"
                  onClick={() => toggleValue(opt.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      toggleValue(opt.value);
                    }
                  }}
                >
                  <input
                    type="checkbox"
                    className="ms-native-checkbox"
                    checked={checked}
                    onChange={(e) => {
                      // Prevent the parent row's onClick from also firing which would
                      // toggle the value twice (net no-op). Stop propagation here
                      // and handle the toggle once.
                      e.stopPropagation();
                      toggleValue(opt.value);
                    }}
                    onClick={(e) => e.stopPropagation()}
                    aria-hidden={false}
                  />
                  <span className="ms-row-label">{opt.label}</span>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
