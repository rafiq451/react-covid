import style from './indonesia.module.css';
import Indo from '../Indo.js';
import data from '../../utils/constants/indonesia';
const Indonesia = () => {
  const indonesia = data;
  return (
    <div className={style.container}>
      <section className={style.indo}>
        <div className={style.indo__top}>
          <h1 className={style.indo__title}>Indonesia</h1>
          <p className={style.indo__deskripsi}>Data Covid Berdasarkan Indonesia</p>
        </div>
        <p>{indonesia.last_update}</p>
        <div className={style.indo__bottom}>
          {indonesia.indonesia.map((indo, index) => {
            return <Indo key={index} indo={indo} />;
          })}
        </div>
      </section>
    </div>
  );
};
export default Indonesia;
