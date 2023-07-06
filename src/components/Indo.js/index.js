// import style from '../Indonesia/indonesia.module.css';
import { styled } from 'styled-components';
const Styleindo = styled.div`
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
  padding: 1rem;
  background-color: #fff;
  margin: 20px;

  .kotak {
    margin: 30px auto;
  }
  .kotak__status {
    font-size: 25px;
    font-family: Poppins;
    font-weight: 500;
  }
  .kotak__link {
    text-decoration: none;
    color: #3a3a3a;
  }

  .kotak__jumlah {
    font-size: 40px;
    margin-top: -1.5rem;
    font-family: Poppins;
    font-weight: 500;
  }
  /* .indo__bottom div:nth-child(1) .kotak__jumlah {
    color: var(--primary);
  }
  .indo__bottom div:nth-child(2) .kotak__jumlah {
    color: red;
  }
  .indo__bottom div:nth-child(3) .kotak__jumlah {
    color: #ef476f;
  } */

  /* Properti tambahan untuk mengubah warna .kotak__jumlah */
  color: ${(props) => props.color || 'black'};

  /* tampilan tablet */
  @media (min-width: 768px) {
    /* .indo__bottom {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      max-width: 1200px;
      margin: 1rem auto;
    } */

    margin: 10px;
    flex-basis: 40%;
  }

  @media (min-width: 992px) {
    margin: 10px;
    flex-basis: 20%;
  }
`;
const Indo = (props) => {
  const { indo } = props;

  const colors = ['#06d6a0', '#ef476f', '#118ab2'];

  // Tentukan indeks warna berdasarkan properti tertentu dari "indo"
  const colorIndex = indo.total % colors.length;
  return (
    <Styleindo color={colors[colorIndex]}>
      <div className="kotak">
        <h3 className="kotak__status">
          <a className="kotak__link" href={indo.detail}>
            {indo.status || indo.status}
          </a>
        </h3>
        <h2 className="kotak__jumlah">{indo.total || indo.total}</h2>
      </div>
    </Styleindo>
  );
};
export default Indo;
