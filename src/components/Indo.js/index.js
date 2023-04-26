import style from '../Indonesia/indonesia.module.css';
const Indo = (props) => {
  const { indo } = props;
  return (
    <div className={style.indo__card}>
      <div className={style.kotak}>
        <h3 className={style.kotak__status}>
          <a className={style.kotak__link} href={indo.detail}>
            {indo.status}
          </a>
        </h3>
        <h2 className={style.kotak__jumlah}>{indo.total}</h2>
      </div>
    </div>
  );
};
export default Indo;
