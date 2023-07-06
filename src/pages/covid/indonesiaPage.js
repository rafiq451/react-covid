import { useEffect } from 'react';
import Herro from '../../components/Herro';
import Indonesia from '../../components/Indonesia';
import axios from 'axios';
import ENPOINTS from '../../utils/constants/enpoints';
// import { useState } from 'react';
import TablePro from '../../components/Indonesia/tablepro';
import { useDispatch } from 'react-redux';
import { updateIndonesia } from '../../components/Features/CovidSlice/indoSlice';
import { updateProvinsi } from '../../components/Features/CovidSlice/proSlice';

const IndonesiaPage = () => {
  // const [proCovid, settProvinsi] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    getIndonesiaPage();
  }, []);

  async function getIndonesiaPage() {
    const response = await axios(ENPOINTS.INDONESIA);
    dispatch(updateIndonesia(response.data));
    dispatch(updateProvinsi(response.data));
    // settProvinsi(response.data);
  }

  return (
    <>
      <Herro />
      <Indonesia title="Indonesia Situation" />
      <TablePro />
    </>
  );
};

export default IndonesiaPage;
