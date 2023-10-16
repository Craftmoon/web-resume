import clsx from "clsx";
import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}
export const Container = ({ children, className }: ContainerProps) => (
  <div className={clsx("container", className)}>{children}</div>
);
