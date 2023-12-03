import { About } from "./components/About/About";
import { Banner } from "./components/Banner/Banner";
import { Cases } from "./components/Cases/Cases";
import { Electricity } from "./components/Electricity/Electricity";
import { FAQ } from "./components/FAQ/FAQ";
import { MainLoyout } from "./loyouts/MainLoyout/MainLoyout";

function App() {
  return (
    <MainLoyout>
      <Banner />
      <About />
      <Electricity />
      <Cases />
      <FAQ />
    </MainLoyout>
  );
}

export default App;
