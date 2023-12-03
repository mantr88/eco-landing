import { About } from "./components/About/About";
import { Banner } from "./components/Banner/Banner";
import { Cases } from "./components/Cases/Cases";
import { Contact } from "./components/Contact/Contact";
import { Electricity } from "./components/Electricity/Electricity";
import { FAQ } from "./components/FAQ/FAQ";
import { ContactForm } from "./components/Form/ContactForm";
import { MainLoyout } from "./loyouts/MainLoyout/MainLoyout";

function App() {
  return (
    <MainLoyout>
      <Banner />
      <About />
      <Electricity />
      <Cases />
      <FAQ />
      <Contact />
      <ContactForm />
    </MainLoyout>
  );
}

export default App;
