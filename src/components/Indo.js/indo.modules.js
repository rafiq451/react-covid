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


  /* Properti tambahan untuk mengubah warna .kotak__jumlah */
  /* color: ${(props) => props.color || 'black'}; */

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
    width: 250px;
  }

  @media (min-width: 992px) {
    margin: 10px;
    flex-basis: 20%;
}
`;

export default Styleindo;
