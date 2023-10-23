import clsx from "clsx";

type ButtonVariant = "primary" | "secondary";
type Size = "small" | "medium" | "large";

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  variant?: ButtonVariant;
  /**
   * How large should the button be?
   */
  size?: Size;
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;

  className?: string;
}

export const Button = ({
  variant = "secondary",
  size = "medium",
  label,
  className,
  ...props
}: ButtonProps) => (
  <button
    type="button"
    className={clsx(
      "font-title inline-block min-w-[170px] cursor-pointer border-0 p-4 text-xs font-bold uppercase leading-none",
      {
        "bg-secondary text-black-2": variant === "secondary",
        "bg-primary text-white": variant === "primary",
        "px-3 py-2 text-sm": size === "small",
        "px-5 py-3 text-base": size === "medium",
        "px-6 py-4 text-lg": size === "large",
      },
      className,
    )}
    {...props}
  >
    {label}
  </button>
);
