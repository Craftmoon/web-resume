import { ReactNode } from "react";
import { Container } from "./Container";

interface HeaderProps {
  title?: string;
  menu?: ReactNode;
}

export const Header = ({ title, menu }: HeaderProps) => (
  <header className="flex justify-center border border-b-black-1 border-opacity-10 px-5 pb-2 pt-4 font-sans shadow-md">
    <div className="flex w-fit w-screen max-w-7xl justify-center">
      <Container>
        <div className={"flex items-center justify-between"}>
          <div>
            {title && (
              <h1 className="mb-[10px] ml-3 inline-block align-top text-2xl font-bold">
                {title}
              </h1>
            )}
          </div>
          <div>{menu}</div>
        </div>
      </Container>
    </div>
  </header>
);
