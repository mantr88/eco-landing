import { lazy } from 'react';
import { Banner } from './components/Banner/Banner';
import { Contact } from './components/Contact/Contact';
import { Electricity } from './components/Electricity/Electricity';
import { FAQ } from './components/FAQ/FAQ';
import { MainLoyout } from './loyouts/MainLoyout/MainLoyout';

const About = lazy(() => import('./components/About/About'));
const Cases = lazy(() => import('./components/Cases/Cases'));

function App() {
  return (
    <MainLoyout>
      <Banner />
      <About />
      <Electricity />
      <Cases />
      <FAQ />
      <Contact />
    </MainLoyout>
  );
}

export default App;
