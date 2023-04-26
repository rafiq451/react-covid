import Footer from '../components/Footer';
import Herro from '../components/Herro';
import Navbar from '../components/Navbar';
import Indonesia from '../components/Indonesia';
import Provinces from '../components/Provinces';
import From from '../components/From_Covid/index.js';
import { useState } from 'react';
import data from '../utils/constants/provinces';
function Main() {
  const [dataCovid, settProvinces] = useState(data.provinces);
  // const [province, setKota] = useState('');

  return (
    <main>
      <Herro />
      <Indonesia />
      <Provinces dataCovid={dataCovid} />
      <From dataCovid={dataCovid} settProvinces={settProvinces} />
    </main>
  );
}

function Home() {
  return (
    <>
      <Navbar />
      <Main />
      <Footer />
    </>
  );
}

export default Home;
