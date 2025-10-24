import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";

// Mock the useAPI hook used inside Header
vi.mock("../../hooks/useAPI", () => ({
  useAPI: () => ({
    userQuery: {
      data: {
        data: {
          first_name: "Jane",
          last_name: "Doe",
          email: "jane@example.com",
        },
      },
    },
  }),
}));

import { Header } from "../header";

describe("Header", () => {
  it("renders logo and user initials", () => {
    render(<Header />);
    expect(screen.getByAltText("Logo")).toBeInTheDocument();
    // initials are first char of first & last name
    expect(screen.getByText("JD")).toBeInTheDocument();
  });
});
