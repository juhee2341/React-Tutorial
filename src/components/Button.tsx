import "./custom-button.css";
import type { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export function Button({ children, ...rest }: ButtonProps) {
  return (
    <button {...rest} className=".custom-secondary-btn">
      {children}
    </button>
  );
}
