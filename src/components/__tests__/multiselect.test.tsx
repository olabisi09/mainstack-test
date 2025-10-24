import { render, screen, fireEvent } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import MultiSelect from "../ui/multiselect";

const options = [
  { label: "Option A", value: "a" },
  { label: "Option B", value: "b" },
];

describe("MultiSelect", () => {
  it("allows selecting an option", () => {
    const onChange = vi.fn();
    render(<MultiSelect options={options} value={[]} onChange={onChange} />);

    // open dropdown
    fireEvent.click(screen.getByText(/Select.../));
    // click an option row
    fireEvent.click(screen.getByText("Option A"));
    expect(onChange).toHaveBeenCalled();
  });
});
