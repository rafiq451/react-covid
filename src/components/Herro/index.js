import style from './Herro.module.css';
import img from './undraw_medical_care_movn.svg';
const Herro = () => {
  return (
    <div className={style.container}>
      <section className={style.hero}>
        <div className={style.hero__left}>
          <h2 className={style.hero__title}>Covid ID</h2>
          <h3 className={style.hero__gendre}>Monitoring Perkembangan Covid</h3>
          <p className={style.hero__deskription}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, maiores? Eum eligendi odit expedita asperiores esse nisi, laudantium neque tenetur, libero aliquid quis nulla veritatis voluptatum, deserunt mollitia? Laborum,
            error!
          </p>
          <button className={style.hero__button}>Vaccine</button>
        </div>
        <div className={style.hero__right}>
          <img className={style.hero__img} src={img} alt="" />
        </div>
      </section>
    </div>
  );
};
export default Herro;
