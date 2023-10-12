interface HeaderProps {
  title: string;
}

export const Header = ({ title }: HeaderProps) => (
  <header>
    <div className="bg-green-600">
      <div>
        {title && (
          <h1 className=" bg-red-500 font-bold text-xl my-2 ml-3 inline-block align-top">
            {title}
          </h1>
        )}
      </div>
    </div>
  </header>
);
