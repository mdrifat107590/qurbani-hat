"use client";

import { Toaster } from "react-hot-toast";

export function ToastProvider() {
  return (
    <Toaster
      position="top-right"
      toastOptions={{
        duration: 3200,
        style: {
          background: "#20160f",
          color: "#fffaf1",
          borderRadius: "16px",
          border: "1px solid rgba(255,255,255,0.12)",
        },
      }}
    />
  );
}