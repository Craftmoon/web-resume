import { useTranslation } from "react-i18next";
import { Header } from "./components/Header";
import { Menu } from "./components/Menu";
import { Footer } from "./components/Footer";
import { Partition } from "./components/Partition";
import { ContentBlock } from "./components/ContentBlock";
import { Button } from "./components/Button";

function App() {
  const { i18n } = useTranslation();

  return (
    <>
      <Header title="Vitor." menu={<Menu languageSelector />} />
      <div>
        <Partition />
        <ContentBlock>
          <h1>Hello! My name is Vitor Silva</h1>
          <div className="h-5">
            I am a web developer located in Florianópolis, Brazil. I graduated
            as a Software Engineer from Goiás University Unievangélica (Brazil)
            and Shibaura Institute of Technology (Japan) as an interchange
            student. I am looking for work as a front-end developer and to
            increase my skills as a web developer.
          </div>
          <div className="flex">
            <div>
              <div>PHONE</div>
              <div>EMAIL </div>
              <div>ADDRESS</div>
              <div>NETWORK</div>
            </div>
            <div>
              <div>+55 62 99254-7959</div>
              <div>v.augustosilva@gmail.com</div>
              <div>
                Brazil, Florianópolis, Itacorubi. Rod. Adgmar Gonzaga 1113
              </div>
              <div>linkedin</div>
            </div>
          </div>
          <div>
            <Button
              variant="primary"
              label="CONTACT ME"
              size="large"
              className="mr-10"
            />
            <Button variant="secondary" label="DOWNLOAD CV" size="large" />
          </div>
        </ContentBlock>
        <Partition />
        <Footer />
      </div>
    </>
  );
}

export default App;
