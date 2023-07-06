import { useDispatch } from 'react-redux';
import Alert from '../Alert';
// import style from './From.module.css';
import img from './from_img.svg';
import { useState } from 'react';
import { updateCovid } from '../Features/CovidSlice';
import data from '../../utils/constants/provinces';
import StyleFtom from './from.modules';

const From = () => {
  const [dataCovid, settProvinces] = useState(data.provinces);
  // console.log(dataCovid);

  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    provinsi: '',
    status: '',
    jumlah: '',
  });

  const [error, setError] = useState({
    isProvinsiError: false,
    isStatusError: false,
    isJumlahError: false,
  });

  const { isProvinsiError, isStatusError, isJumlahError } = error;
  const { provinsi, status, jumlah } = formData;

  function handleError(key, value) {
    setError((prevError) => ({
      ...prevError,
      [key]: value,
    }));
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  function updateProvinces() {
    if (!dataCovid) {
      return;
    }

    const newDataCovid = dataCovid.map((item) => {
      if (item.kota === provinsi) {
        return {
          ...item,
          [status]: parseInt(item[status]) + parseInt(jumlah),
        };
      }
      return item;
    });

    settProvinces(newDataCovid);
    dispatch(updateCovid(newDataCovid));
  }

  function validate() {
    let isValid = true;

    if (provinsi === '') {
      handleError('isProvinsiError', true);
      isValid = false;
    } else {
      handleError('isProvinsiError', false);
    }

    if (status === '') {
      handleError('isStatusError', true);
      isValid = false;
    } else {
      handleError('isStatusError', false);
    }

    if (jumlah === '') {
      handleError('isJumlahError', true);
      isValid = false;
    } else {
      handleError('isJumlahError', false);
    }

    return isValid;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validate()) {
      updateProvinces();
    }
  };

  return (
    <StyleFtom>
      <section className="from">
        <div className="from__left">
          <img className="from__image" src={img} alt="" />
        </div>
        <div className="from__right">
          <h2 className="right__title">From Covid</h2>
          <form onSubmit={handleSubmit}>
            <div className="from_grup">
              <label className="from__label" htmlFor="kota">
                Provinsi
              </label>
              <br />
              <select className="from__input" id="provinsi" name="provinsi" value={provinsi} onChange={handleChange}>
                <option value="">-- Pilih Provinsi --</option>
                {dataCovid && dataCovid.map((row) => <option key={row.kota}>{row.kota}</option>)}
              </select>
              {isProvinsiError && (
                <Alert>
                  <p className="eror">Masukan provinsi</p>
                </Alert>
              )}
            </div>
            <br />
            <div className="from_grup">
              <label className="from__label" htmlFor="status">
                Status
              </label>
              <br />
              <select className="from__input" id="status" name="status" value={status} onChange={handleChange}>
                <option value="">-- Pilih Status --</option>
                <option value="kasus">kasus</option>
                <option value="sembuh">sembuh</option>
                <option value="meninggal">meninggal</option>
                <option value="dirawat">dirawat</option>
              </select>
              {isStatusError && (
                <Alert>
                  <p className="eror">Masukan Status</p>
                </Alert>
              )}
            </div>
            <br />
            <div className="from_grup">
              <br />
              <label className="from__label" htmlFor="jumlah">
                Jumlah
              </label>
              <br />
              <input type="number" id="jumlah" name="jumlah" className="from__input" value={jumlah} onChange={handleChange} />
              {isJumlahError && (
                <Alert>
                  <p className="eror">Masukan Jumlah</p>
                </Alert>
              )}
            </div>
            <button className="from__button" type="submit">
              Submit
            </button>
          </form>
        </div>
      </section>
    </StyleFtom>
  );
};

export default From;
