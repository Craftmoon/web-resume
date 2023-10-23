import clsx from "clsx";

interface ButtonProps {
  label: string;
  className?: string;
  onClick?: () => void;
}

export const LinkButton = ({ label, className, ...props }: ButtonProps) => {
  return (
    <a
      className={clsx(
        "font-title inline-block cursor-pointer text-xs font-bold uppercase leading-none transition-all duration-300 hover:text-primary hover:underline",
        className,
      )}
      {...props}
    >
      {label}
    </a>
  );
};
