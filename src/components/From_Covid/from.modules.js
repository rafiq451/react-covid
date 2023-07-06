import { styled } from 'styled-components';

const StyleFtom = styled.div`
  padding: 2rem;
  font-family: Poppins;
  background-color: #f8f9fa;

  .from__left {
    margin-bottom: 1rem;
  }
  .from__image {
    max-width: 100%;
  }

  /* from right */
  .from__right {
    max-width: 100%;
    margin: auto;
    /* background-color: #118ab2; */
    padding: 1rem;
  }
  .right__title {
    color: #06d6a0;
    font-weight: 500;
    margin-bottom: 1rem;
    text-align: center;
  }

  .from__label {
    color: #118ab2;
    font-size: 15px;
  }

  .from__input {
    width: 100%;
    height: 2rem;
    border-radius: 5px;
    border: 2px solid rgb(177, 177, 177);
  }

  .from__button {
    padding: 0.4rem 4rem;
    margin-top: 1rem;
    background-color: #06d6a0;
    border: none;
    border-radius: 5px;
    color: #fff;
    cursor: pointer;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.5);
    width: 100%;
  }
  .error {
    color: lightcoral;
  }
  @media (min-width: 768px) {
    .from__right {
      max-width: 50%;
    }

    .from__left {
      max-width: 70%;
      margin: auto;
    }

    .right__title {
      font-size: 30px;
    }

    .from__label {
      font-size: medium;
    }
  }
  @media (min-width: 992px) {
    margin: 2rem auto;

    .from {
      max-width: 1300px;
      display: flex;
      justify-content: center;
      /* flex-direction: row; */
      align-items: center;
    }

    .right__title {
      font-size: 40px;
    }

    .from__input {
      width: 100%;
      padding: 1px;
      margin-bottom: 0.7rem;
    }
    .from__button {
      padding: 0.5rem 6rem;
    }

    .from__left {
      max-width: 50%;
    }
    .from__right {
      flex-basis: 30%;
    }
  }
`;

export default StyleFtom;
