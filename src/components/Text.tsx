import clsx from "clsx";

export const enum FontVariant {
  TEXT = "TEXT",
  TITLE = "TITLE",
}

interface TextProps {
  className?: string;
  children: string | React.ReactNode;
  bold?: boolean;
  italic?: boolean;
  variant?: FontVariant;
}

export const Text = ({
  className,
  children,
  bold,
  italic,
  variant = FontVariant.TEXT,
}: TextProps) => {
  return (
    <div
      className={clsx(
        {
          "font-bold": bold,
          italic: italic,
          "font-title": variant === FontVariant.TITLE,
          "font-text": variant === FontVariant.TEXT,
        },
        className,
      )}
    >
      {children}
    </div>
  );
};
