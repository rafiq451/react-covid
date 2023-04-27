// import data from '../../utils/constants/provinces';
// import Province from '../Province';
import style from './Provinces.module.css';
const Provinces = (props) => {
  const { dataCovid } = props;

  return (
    <div className={style.container}>
      <section className={style.table}>
        <div className={style.table__top}>
          <h1 className={style.top__title}>Provinsi</h1>
          <p className={style.top__deskripsi}>Data Covid Berdasarkan Provinsi</p>
        </div>
        <div className={style.table__bottom}>
          <table className={style.table__container}>
            <thead>
              <tr>
                <th className={style.th}>Provinsi</th>
                <th className={style.th}>sembuh</th>
                <th className={style.th}>positif</th>
                <th className={style.th}>Meninggal</th>
                <th className={style.th}>Dirawat</th>
              </tr>
            </thead>
            <tbody>
              {dataCovid.map((row, index) => (
                <tr key={index}>
                  <td className={style.td}>{row.kota}</td>
                  <td className={style.td}>{row.sembuh}</td>
                  <td className={style.td}>{row.kasus}</td>
                  <td className={style.td}>{row.meninggal}</td>
                  <td className={style.td}>{row.dirawat}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {/* <p>{provinces.last_update}</p>
          <p>{provinces.total_province}</p> */}
        </div>
      </section>
    </div>
  );
};
export default Provinces;
