import Herro from '../components/Herro';
// import Indonesia from '../components/Indonesia';
import { useEffect, useState } from 'react';
import axios from 'axios';
import ENPOINTS from '../utils/constants/enpoints';
import Regions from '../components/Regions';
import DataGlobal from '../components/Global';
import { useDispatch } from 'react-redux';
import { updateGlobal } from '../components/Features/CovidSlice/gloSlice';

function Home() {
  // const [regiCovid, setRegions] = useState([])
  // const [gloCovid, setglobal] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    getGlobal();
  }, []);

  async function getGlobal() {
    const response = await axios(ENPOINTS.GLOBAL);
    dispatch(updateGlobal(response.data));
    // setglobal(response.data);
    // console.log(response.data);
  }

  return (
    <>
      <Herro />
      <DataGlobal title="Global Situation" />
      {/* <Indonesia global={global} title="indohayu" /> */}
      <Regions title="Situation By Regions" deskripsi="Bacaan Pilihan Covid" />
    </>
  );
}

export default Home;
