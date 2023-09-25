// index.tsx
import React from "react";
import { createRoot } from "react-dom/client";
import MinMaxLayout from "./Responsive";

const rootElement = document.getElementById("root");

if (rootElement) {
  createRoot(rootElement).render(<MinMaxLayout />);
}