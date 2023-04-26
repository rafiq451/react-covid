import style from './From.module.css';
import img from './from_img.svg';
// import data from '../../utils/constants';
// import Kota from './kota';
import { useState } from 'react';
// import Status from '../Status';
const From = (props) => {
  const { dataCovid, settProvinces } = props;

  const [province, setKota] = useState('');
  const [status, setStatus] = useState('');
  const [jumlah, setJumlah] = useState('');
  console.log(jumlah);
  console.log(status);
  // const [provinces, setCovidData] = useState(data.provinces);
  function updateProvinces() {
    const index = dataCovid.findIndex((item) => item.kota === province);
    const foundProvince = dataCovid.find((item) => item.kota === province);
    dataCovid[index] = {
      ...foundProvince,
      [status]: parseInt(foundProvince[status]) + parseInt(jumlah),
    };
    settProvinces([...dataCovid]);
    console.log(index);
    console.log(foundProvince);
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    updateProvinces();
    // console.log(`Kota: ${province}, Status: ${status}, Jumlah: ${jumlah}`);
    // console.log(`${jumlah}`);
  };
  // const status = Status;
  return (
    <div className={style.container}>
      <section className={style.from}>
        <div className={style.from__left}>
          <img className={style.from__image} src={img} alt="" />
        </div>
        <div className={style.from__right}>
          <h2 className={style.right__title}>From Covid</h2>
          <form onChange={handleSubmit}>
            <div className="from_grup">
              <label className={style.from__label} htmlFor="kota">
                Provinsi
              </label>
              <br />
              <select className={style.from__input} id="provinsi" value={province} onChange={(event) => setKota(event.target.value)}>
                <option value="">-- Pilih Provinsi --</option>
                {dataCovid.map((row, index) => (
                  <option key={index} value={row.kota}>
                    {row.kota}
                  </option>
                ))}
              </select>
            </div>
            <br />
            <div className="from_grup">
              <label className={style.from__label} htmlFor="status">
                Status
              </label>
              <br />
              <select className={style.from__input} id="status" value={status} onChange={(event) => setStatus(event.target.value)}>
                <option value="">-- Pilih Status --</option>
                <option value="sembuh">sembuh</option>
                <option value="kasus">kasus</option>
                <option value="meninggal">meninggal</option>
                <option value="dirawat">dirawat</option>
              </select>
            </div>
            <br />
            <div className="from_grup">
              <br />
              <label className={style.from__label} htmlFor="jumlah">
                Jumlah
              </label>
              <br />
              <input type="number" id="jumlah" className={style.from__input} value={jumlah} onChange={(event) => setJumlah(event.target.value)} />
            </div>
            <button className={style.from__button} type="submit">
              Submit
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default From;
