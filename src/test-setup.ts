import "@testing-library/jest-dom";

// JSDOM doesn't implement ResizeObserver which some charting libraries rely on.
// Provide a minimal mock so components using ResponsiveContainer from recharts don't crash in tests.
class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}

if (typeof (globalThis as any).ResizeObserver === "undefined") {
  (globalThis as any).ResizeObserver = ResizeObserver;
}
