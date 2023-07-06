import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import IndonesiaPage from './pages/covid/indonesiaPage';
import ProvinsiPage from './pages/covid/provinsiPage';
import AboutPage from './pages/covid/aboutPage';
import Layout from './Layout';
// import data from './utils/constants/provinces';
function App() {
  // const [dataCovid, settProvinces] = useState(data.provinces);

  // const [indoCovid, setIndonesia] = useState([]);

  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/covid/indonesia" element={<IndonesiaPage />} />
          <Route path="/covid/provinsi" element={<ProvinsiPage />} />
          <Route path="/covid/about" element={<AboutPage />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
