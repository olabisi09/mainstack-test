import { render, screen, fireEvent } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { Button } from "../ui/button";

describe("Button", () => {
  it("renders children and responds to click", () => {
    const onClick = vi.fn();
    render(
      <Button onClick={onClick} variant="primary">
        Click me
      </Button>
    );
    const btn = screen.getByText("Click me");
    fireEvent.click(btn);
    expect(onClick).toHaveBeenCalled();
  });
});
