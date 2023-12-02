import { About } from "./components/About/About";
import { Banner } from "./components/Banner/Banner";
import { MainLoyout } from "./loyouts/MainLoyout/MainLoyout";

function App() {
  return (
    <MainLoyout>
      <Banner />
      <About />
    </MainLoyout>
  );
}

export default App;
