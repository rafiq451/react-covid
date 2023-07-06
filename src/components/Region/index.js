// import from '../Regions/regions.module.css';
import img_deat from './deat.png';
import img_sakit from './sakit.png';
import img_sembuh from './sembuh.png';
import { styled } from 'styled-components';

const StyleRegion = styled.div`
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
  padding: 1rem;
  width: 300px;
  background-color: #fff;
  margin: 2rem auto;

  .kotak__status {
    text-align: center;
    font-size: 20px;
  }

  .kotak__link {
    text-decoration: none;
    color: #01232f;
    font-family: Viga;
    font-size: 25px;
  }

  .kotak {
    margin-top: -1rem;
  }
  .componen {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: -20px;
  }

  .img {
    max-width: 40%;
  }

  .comp__title {
    color: #01232f;
  }

  .kotak__jumlah {
    flex-basis: 40%;
    margin-top: -2px;
    font-weight: 400;
  }

  /* .kotak__componen:nth */
  .kotak__componen:nth-child(2) .componen .kotak__jumlah {
    color: #06d6a0;
  }
  .kotak__componen:nth-child(3) .componen .kotak__jumlah {
    color: #118ab2;
  }
  .kotak__componen:nth-child(4) .componen .kotak__jumlah {
    color: #ef476f;
  }

  /* tampilan tablet */
  @media (min-width: 768px) {
    .kotak__status {
      text-align: center;
      font-size: 40px;
    }

    .kotak {
      margin-top: -2rem;
    }

    .regions__card {
      width: 400px;
    }
  }

  @media (min-width: 1200px) {
    width: 300px;
  }
`;
const Region = ({ reg }) => {
  //   console.log(reg);

  return (
    <StyleRegion>
      <div className="kotak">
        <h3 className="kotak__status">
          <a className="kotak__link" href="#">
            {reg.name}
          </a>
        </h3>
        <div className="kotak__componen">
          <h4 className="comp__title">Confirmed</h4>
          <div className="componen">
            <h2 className="kotak__jumlah">{reg.numbers.confirmed}</h2>
            <img className="img" src={img_sakit} alt="" />
          </div>
        </div>
        <div className="kotak__componen">
          <h4 className="comp__title">Recovered</h4>
          <div className="componen">
            <h2 className="kotak__jumlah">{reg.numbers.recovered}</h2>
            <img className="img" src={img_sembuh} alt="" />
          </div>
        </div>
        <div className="kotak__componen">
          <h4 className="comp__title">Death</h4>
          <div className="componen">
            <h2 className="kotak__jumlah">{reg.numbers.death}</h2>
            <img className="img" src={img_deat} alt="" />
          </div>
        </div>
      </div>
    </StyleRegion>
  );
};

export default Region;
