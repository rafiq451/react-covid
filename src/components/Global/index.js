// import style from '../Indonesia/indonesia.module.css';
import { useSelector } from 'react-redux';
import Indo from '../Indo.js';
import { styled } from 'styled-components';
import store from '../store/index.js';
const StyleGlobal = styled.div`
  padding: 1rem;
  margin: 0 auto;
  text-align: center;
  background-color: #f8f9fa;
  margin-bottom: 40px;

  h1 {
    font-family: Viga;
    font-weight: 400;
    font-size: 30px;
    color: #06d6a0;
    margin-bottom: 2rem;
  }
  .indo__deskripsi {
    font-family: Poppins;
    margin-top: -1.5rem;
    font-size: 15px;
    color: #118ab2;
  }
  .indo__bottom {
    margin-top: 1rem;
    padding: 1rem;
  }

  .kotak__jumlah {
    font-size: 40px;
    margin-top: -1.5rem;
    font-family: Poppins;
    font-weight: 500;
  }

  /* tampilan tablet */
  @media (min-width: 768px) {
    .indo__bottom {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      max-width: 1200px;
      margin: 1rem auto;
    }
  }
`;

const DataGlobal = (props) => {
  // const { gloCovid } = props;
  const gloCovid = useSelector((store) => store.global.global);
  // console.log(gloCovid);
  return (
    <StyleGlobal>
      <section className="indo">
        <div className="indo__top">
          <h1>{props.title}</h1>
          <p className="indo__deskripsi">Data Covid Berdasarkan Data Global</p>
        </div>
        {/* <p>{indonesia.last_update}</p> */}
        <div className="indo__bottom">
          {gloCovid.global &&
            gloCovid.global.map((indo, index) => {
              return <Indo key={index} indo={indo} />;
            })}
        </div>
      </section>
    </StyleGlobal>
  );
};
export default DataGlobal;
