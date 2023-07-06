import { styled } from 'styled-components';

const StyleHero = styled.div`
  /* small screen */

  text-align: center;
  color: black;
  font-family: Poppins;

  .hero {
    margin-bottom: 2rem;
  }

  .hero__title {
    font-size: 40px;
    font-weight: 500;
    color: #06d6a0;
    margin-bottom: 5px;
    font-family: Viga;
  }
  .hero__gendre {
    font-size: 15px;
    font-weight: 500;
    color: #118ab2;
    margin-bottom: 2rem;
  }

  .hero__deskription {
    font-size: 13px;
    color: #626161;
  }

  .hero__button {
    padding: 0.5rem 2rem;
    margin: 1rem 1rem 2rem;
    background-color: #06d6a0;
    border: none;
    border-radius: 10px;
    color: #fff;
    cursor: pointer;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.5);
  }

  .hero__img {
    max-width: 100%;
  }
  /* tablet */
  @media (min-width: 768px) {
  }
  /* Laptop */
  @media (min-width: 992px) {
    text-align: left;
    max-width: 1200px;
    /* padding: 2rem; */
    margin: 0 auto;
    margin-top: 2rem;
    .hero {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
    .hero__deskription {
      font-size: 15px;
    }

    .hero__left {
      flex-basis: 40%;
    }
    .hero__right {
      max-width: 40%;
    }

    .hero__button {
      margin: 1rem 0;
    }
  }
`;

export default StyleHero;
