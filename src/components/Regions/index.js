import { useSelector } from 'react-redux';
import Region from '../Region';
// import style from './regions.module.css';
import { styled } from 'styled-components';
import store from '../store';

const StyleRegions = styled.div`
  .regions__top {
    text-align: center;
  }

  .regions__title {
    font-family: Viga;
    font-weight: 400;
    font-size: 30px;
    color: #06d6a0;
    margin-bottom: 2rem;
  }
  .regions__deskripsi {
    font-family: Poppins;
    margin-top: -1.5rem;
    color: #118ab2;
    font-size: 15px;
  }

  .regions__card {
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
    padding: 1rem;
    width: 300px;
    background-color: #fff;
    margin: 2rem auto;
  }

  /* tampilan tablet */
  @media (min-width: 768px) {
    .regions_bottom {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      margin: 1rem auto;
      /* border: 1px solid black; */
    }
    .regions__card {
      width: 400px;
    }
  }

  @media (min-width: 1200px) {
    .regions__card {
      width: 300px;
    }
  }
`;
const Regions = (props) => {
  const gloCovid = useSelector((store) => store.global.global);
  // console.log(gloCovid);

  return (
    <StyleRegions>
      <section className="regions">
        <div className="regions__top">
          <h1 className="regions__title">{props.title}</h1>
          <p className="regions__deskripsi">{props.deskripsi}</p>
        </div>
        <div className="regions_bottom">
          {gloCovid.regions &&
            gloCovid.regions.map((reg, index) => {
              return <Region key={index} reg={reg} />;
            })}
        </div>
      </section>
    </StyleRegions>
  );
};

export default Regions;
