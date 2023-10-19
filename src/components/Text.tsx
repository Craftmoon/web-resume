import clsx from "clsx";

interface TextProps {
  className?: string;
  children: string | React.ReactNode;
}

export const Text = ({ className, children }: TextProps) => {
  return <div className={clsx("font-sans", className)}>{children}</div>;
};
