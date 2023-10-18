import { useTranslation } from "react-i18next";
import { Header } from "./stories/Header";
import { Menu } from "./stories/Menu";

function App() {
  const { i18n } = useTranslation();

  return (
    <>
      <Header title="Vitor." rightAlignedComponent={<Menu />} />
      <div>content</div>
      <button
        onClick={() => {
          i18n.changeLanguage("pt");
        }}
      >
        change language
      </button>
    </>
  );
}

export default App;
