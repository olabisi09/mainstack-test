import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { EmptyState } from "../empty-state";

describe("EmptyState", () => {
  it("renders provided title, description and cta", () => {
    render(
      <EmptyState
        title="My title"
        description="My description"
        cta={<button>Click me</button>}
      />
    );

    expect(screen.getByText("My title")).toBeInTheDocument();
    expect(screen.getByText("My description")).toBeInTheDocument();
    expect(screen.getByText("Click me")).toBeInTheDocument();
  });
});
