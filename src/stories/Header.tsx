import { ReactNode } from "react";
import { Container } from "./Container";

interface HeaderProps {
  title: string;
  rightAlignedComponent?: ReactNode;
}

export const Header = ({ title, rightAlignedComponent }: HeaderProps) => (
  <header className="flex justify-center border border-b-black-1 border-opacity-10 px-5 py-3 font-sans shadow-md">
    <div className="flex w-fit w-screen max-w-7xl justify-center">
      <Container>
        <div className=" flex items-center justify-between">
          <div>
            {title && (
              <h1 className="my-2 ml-3 inline-block align-top text-2xl font-bold">
                {title}
              </h1>
            )}
          </div>
          <div>{rightAlignedComponent}</div>
        </div>
      </Container>
    </div>
  </header>
);
