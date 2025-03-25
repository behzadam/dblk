"use client";

import { useTheme } from "next-themes";
import { Toaster as Sonner, ToasterProps, toast } from "sonner";
import { useDirection } from "../hooks/use-direction.js";

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "light" } = useTheme();
  const dir = useDirection();

  return (
    <Sonner
      dir={dir}
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      style={
        {
          "--normal-bg": "var(--popover)",
          "--normal-text": "var(--popover-foreground)",
          "--normal-border": "var(--border)",
        } as React.CSSProperties
      }
      {...props}
    />
  );
};

export { Toaster, toast };
