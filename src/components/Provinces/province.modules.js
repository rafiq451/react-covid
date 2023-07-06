import { styled } from 'styled-components';

const StyleProvice = styled.div`
  text-align: center;
  margin-bottom: 2rem;
  .top__title {
    font-family: Viga;
    font-weight: 400;
    font-size: 40px;
    color: var(--primary);
  }
  .top__deskripsi {
    font-family: Poppins;
    margin-top: -1.5rem;
    color: var(--secondry);
  }
  .table__container {
    border-collapse: collapse;
    width: 100%;
  }

  .table__bottom {
    max-width: 1200px;
    margin: 0 auto;
    overflow: scroll;
    border-radius: 10px;
    border: 1px solid black;
  }

  .th,
  .td {
    padding: 8px;
    text-align: left;
    border-bottom: 1px solid #ddd;
    border-right: 1px solid #ddd;
  }

  .th:last-child,
  .td:last-child {
    border-right: none;
  }

  .tr:hover {
    background-color: #f5f5f5;
  }

  .th {
    background-color: var(--primary);
    color: white;
    border-top: 1px solid #ddd;
    border-left: 1px solid #ddd;
  }
`;

export default StyleProvice;
