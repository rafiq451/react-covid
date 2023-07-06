import StyleHero from './hero.modules';
import img from './undraw_medical_care_movn.svg';
const Herro = () => {
  return (
    <StyleHero>
      <section className="hero">
        <div className="hero__left">
          <h2 className="hero__title">Covid ID</h2>
          <h3 className="hero__gendre">Monitoring Perkembangan Covid</h3>
          <p className="hero__deskription">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, maiores? Eum eligendi odit expedita asperiores esse nisi, laudantium neque tenetur, libero aliquid quis nulla veritatis voluptatum, deserunt mollitia? Laborum,
            error!
          </p>
          <button className="hero__button">Vaccine</button>
        </div>
        <div className="hero__right">
          <img className="hero__img" src={img} alt="" />
        </div>
      </section>
    </StyleHero>
  );
};
export default Herro;
