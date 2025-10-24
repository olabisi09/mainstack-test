import React from "react";
import { render } from "@testing-library/react";

// Re-export everything from testing library
export * from "@testing-library/react";

// Custom render in case we need providers later
export const customRender = (ui: React.ReactElement, options = {}) =>
  render(ui, options);

export default customRender;
