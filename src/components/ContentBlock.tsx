import { Container } from "./Container";

interface ContentBlockProps {
  children: React.ReactNode;
}

export const ContentBlock = ({ children }: ContentBlockProps) => {
  return (
    <div className="flex justify-center">
      <div className="flex w-fit w-screen max-w-7xl justify-center">
        <Container>{children}</Container>
      </div>
    </div>
  );
};
