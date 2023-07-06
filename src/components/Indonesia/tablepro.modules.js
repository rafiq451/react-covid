import { styled } from 'styled-components';

const StyleTable = styled.div`
  text-align: center;
  margin-bottom: 2rem;
  .top__title {
    font-family: Viga;
    font-weight: 400;
    font-size: 30px;
    margin-bottom: 2rem;
    color: var(--primary);
  }
  .top__deskripsi {
    font-family: Poppins;
    margin-top: -1.5rem;
    font-size: 15px;

    color: var(--secondry);
  }
  .table__container {
    border-collapse: collapse;
    width: 100%;
  }

  .table__bottom {
    /* padding: 2rem; */
    border: 1px solid black;
    max-width: 1200px;
    margin: 0 auto;
    border-radius: 20px;
    /* overflow: hidden; */
    overflow: scroll;
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

export default StyleTable;
