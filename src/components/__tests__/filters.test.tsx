import { render, screen, fireEvent } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { Filters } from "../filters";

const initial = {
  preset: "",
  from: "",
  to: "",
  transactionTypes: [],
  transactionStatuses: [],
};

describe("Filters", () => {
  it("calls onApply when Apply is clicked", () => {
    const onChange = vi.fn();
    const onApply = vi.fn();
    // Provide a filters object that enables the Apply button (otherwise it's disabled)
    const enabled = { ...initial, from: "2025-01-01" };
    render(
      <Filters value={enabled as any} onChange={onChange} onApply={onApply} />
    );

    fireEvent.click(screen.getByText("Apply"));
    expect(onApply).toHaveBeenCalled();
  });

  it("calls onChange when a preset is toggled", () => {
    const onChange = vi.fn();
    render(<Filters value={initial as any} onChange={onChange} />);

    fireEvent.click(screen.getByText("Today"));
    expect(onChange).toHaveBeenCalled();
  });
});
