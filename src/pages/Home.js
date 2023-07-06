import Herro from '../components/Herro';
import React, { useEffect } from 'react';
import axios from 'axios';
import ENPOINTS from '../utils/constants/enpoints';
import Regions from '../components/Regions';
import DataGlobal from '../components/Global';
import { useDispatch } from 'react-redux';
import { updateGlobal } from '../components/Features/CovidSlice/gloSlice';

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    getGlobal();
  }, []);

  async function getGlobal() {
    const response = await axios(ENPOINTS.GLOBAL);
    dispatch(updateGlobal(response.data));
  }

  return (
    <>
      <Herro />
      <DataGlobal title="Global Situation" />
      <Regions title="Situation By Regions" deskripsi="Bacaan Pilihan Covid" />
    </>
  );
}

export default Home;
