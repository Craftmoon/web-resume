import { Header } from "./stories/Header";
import { Menu } from "./stories/Menu";

function App() {
  return (
    <>
      <Header title="Vitor." rightAlignedComponent={<Menu />} />
      <div>content</div>
    </>
  );
}

export default App;
