import { ReactNode } from "react";
import { Container } from "./Container";
import { LanguageSelector } from "./LanguageSelector";
import { langs } from "../i18n";
import clsx from "clsx";

interface HeaderProps {
  title?: string;
  menu?: ReactNode;
  languageSelector?: boolean;
}

export const Header = ({ title, menu, languageSelector }: HeaderProps) => (
  <header className="flex justify-center border border-b-black-1 border-opacity-10 px-5 pb-2 pt-4 font-sans shadow-md">
    <div className="flex w-fit w-screen max-w-7xl justify-center">
      <Container>
        <div
          className={clsx(" mr-20 flex items-center justify-between", {
            "mb-[10px]": !languageSelector,
          })}
        >
          <div>
            {title && (
              <h1 className=" ml-3 inline-block align-top text-2xl font-bold">
                {title}
              </h1>
            )}
          </div>
          <div>{menu}</div>
        </div>
        {languageSelector && (
          <div className="flex justify-end">
            <LanguageSelector langs={langs} />
          </div>
        )}
      </Container>
    </div>
  </header>
);
