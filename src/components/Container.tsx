import type { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "article";
}

export default function Container({ children, className = "", as: As = "div" }: ContainerProps) {
  return (
    <As className={`mx-auto w-full max-w-container px-6 md:px-10 lg:px-12 ${className}`}>
      {children}
    </As>
  );
}
