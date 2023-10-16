import clsx from "clsx";

interface ButtonProps {
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

export const LinkButton = ({ label, ...props }: ButtonProps) => {
  return (
    <a
      className={clsx(
        "ease inline-block cursor-pointer font-sans text-xs font-bold uppercase leading-none transition-all duration-300 hover:text-primary hover:underline",
      )}
      {...props}
    >
      {label}
    </a>
  );
};
