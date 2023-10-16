interface HeaderProps {
  title: string;
}

export const Header = ({ title }: HeaderProps) => (
  <header>
    <div className="border-black flex items-center justify-between border border-opacity-10 px-5 py-3 font-sans shadow-md">
      <div>
        {title && (
          <h1 className="my-2 ml-3 inline-block align-top text-2xl font-bold">
            {title}
          </h1>
        )}
      </div>
    </div>
  </header>
);
