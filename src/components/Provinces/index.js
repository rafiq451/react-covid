import { useSelector } from 'react-redux';
import StyleProvice from './province.modules';

const Provinces = () => {
  const data = useSelector((state) => state.covid.covid);
  // console.log(data);

  return (
    <StyleProvice>
      <section className="table">
        <div className="table__top">
          <h1 className="top__title">Provinsi</h1>
          <p className="top__deskripsi">Data Covid Berdasarkan Provinsi</p>
        </div>
        <div className="table__bottom">
          <table className="table__container">
            <thead>
              <tr>
                <th className="th">Provinsi</th>
                <th className="th">sembuh</th>
                <th className="th">positif</th>
                <th className="th">Meninggal</th>
                <th className="th">Dirawat</th>
              </tr>
            </thead>
            <tbody>
              {data &&
                data.map((row, index) => (
                  <tr key={index}>
                    <td className="td">{row.kota}</td>
                    <td className="td">{row.sembuh}</td>
                    <td className="td">{row.kasus}</td>
                    <td className="td">{row.meninggal}</td>
                    <td className="td">{row.dirawat}</td>
                  </tr>
                ))}
            </tbody>
          </table>
          {/* <p>{provinces.last_update}</p>
          <p>{provinces.total_province}</p> */}
        </div>
      </section>
    </StyleProvice>
  );
};
export default Provinces;
