import clsx from "clsx";
import { useTranslation } from "react-i18next";

interface LanguageSelectorProps {
  langs: string[];
}

interface LangItem {
  lang: string;
}

export const LangItem = ({ lang }: LangItem) => {
  const { i18n } = useTranslation();
  const handleClick = () => i18n.changeLanguage(lang);
  const langIsSelected = i18n.resolvedLanguage === lang;

  return (
    <div
      className={clsx("mr-1 cursor-pointer text-[10px]/[10px]", {
        "text-black font-bold": langIsSelected,
        "text-gray-400": !langIsSelected,
      })}
      onClick={handleClick}
    >
      {lang.toUpperCase()}
    </div>
  );
};

export const LanguageSelector = ({ langs }: LanguageSelectorProps) => {
  return (
    <div className="flex">
      {langs.map((lang) => (
        <LangItem lang={lang} key={lang} />
      ))}
    </div>
  );
};
