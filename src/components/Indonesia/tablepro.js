import { useSelector } from 'react-redux';
import StyleTable from './tablepro.modules';
import store from '../store';

const TablePro = () => {
  // const { proCovid } = props;
  const proCovid = useSelector((store) => store.provinsi.provinsi);
  return (
    <StyleTable>
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
              {proCovid.regions &&
                proCovid.regions.map((row, index) => (
                  <tr key={index}>
                    <td className="td">{row.name}</td>
                    <td className="td">{row.numbers.recovered}</td>
                    <td className="td">{row.numbers.confirmed}</td>
                    <td className="td">{row.numbers.death}</td>
                    <td className="td">{row.numbers.treatment}</td>
                  </tr>
                ))}
            </tbody>
          </table>
          {/* <p>{provinces.last_update}</p>
          <p>{provinces.total_province}</p> */}
        </div>
      </section>
    </StyleTable>
  );
};

export default TablePro;
