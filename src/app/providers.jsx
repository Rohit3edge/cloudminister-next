"use client"; // Required for context in App Router

import CurrencyProvider from "@/components/currencyconversion/Currencyconversion";

export function Providers({ children }) {
  return <CurrencyProvider>{children}</CurrencyProvider>;
}