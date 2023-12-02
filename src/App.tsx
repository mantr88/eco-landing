import { About } from "./components/About/About";
import { Banner } from "./components/Banner/Banner";
import { Electricity } from "./components/Electricity/Electricity";
import { MainLoyout } from "./loyouts/MainLoyout/MainLoyout";

function App() {
  return (
    <MainLoyout>
      <Banner />
      <About />
      <Electricity />
    </MainLoyout>
  );
}

export default App;
