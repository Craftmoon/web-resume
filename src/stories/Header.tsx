import { ReactNode } from "react";
import { Container } from "./Container";
import { LanguageSelector } from "./LanguageSelector";
import { langs } from "../i18n";

interface HeaderProps {
  title: string;
  rightAlignedComponent?: ReactNode;
}

export const Header = ({ title, rightAlignedComponent }: HeaderProps) => (
  <header className="flex justify-center border border-b-black-1 border-opacity-10 px-5 pb-2 pt-4 font-sans shadow-md">
    <div className="flex w-fit w-screen max-w-7xl justify-center">
      <Container>
        <div className=" mr-20 flex items-center justify-between">
          <div>
            {title && (
              <h1 className=" ml-3 inline-block align-top text-2xl font-bold">
                {title}
              </h1>
            )}
          </div>
          <div>{rightAlignedComponent}</div>
        </div>
        <div className="flex justify-end">
          <LanguageSelector langs={langs} />
        </div>
      </Container>
    </div>
  </header>
);
