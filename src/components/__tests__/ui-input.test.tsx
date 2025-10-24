import { describe, expect, it } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";

import { Input } from "../ui/input";

describe("Input", () => {
  it("renders label and updates value", () => {
    render(<Input id="test" label="Name" />);
    const input = screen.getByLabelText("Name") as HTMLInputElement;
    fireEvent.change(input, { target: { value: "hello" } });
    expect(input.value).toBe("hello");
  });
});
