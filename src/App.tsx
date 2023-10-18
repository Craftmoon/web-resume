import { useTranslation } from "react-i18next";
import { Header } from "./components/Header";
import { Menu } from "./components/Menu";

function App() {
  const { i18n } = useTranslation();

  return (
    <>
      <Header title="Vitor." menu={<Menu />} languageSelector />
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
