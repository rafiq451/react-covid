import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

const StyleMenu = styled.div`
  :root {
    --primary: #06d6a0;
    --secondry: #118ab2;
  }

  ul {
    list-style: none;
    padding: 1rem;
    margin-left: -1rem;
  }

  li {
    margin-bottom: 1rem;
  }

  .list {
    text-decoration: none;
    font-size: 18px;
    font-weight: 600;
    font-family: Poppins;
    color: #fff;
  }

  .list:hover {
    color: #118ab2;
  }

  /* Media Queries */
  @media (min-width: 768px) {
    ul {
      display: flex;
    }

    li {
      margin: 0 1rem;
    }
  }
`;
const Menu = () => {
  return (
    <StyleMenu>
      <ul>
        <li>
          <Link className="list" to="/">
            Global
          </Link>
        </li>
        <li>
          <Link className="list" to="/covid/indonesia">
            Indonesia
          </Link>
        </li>
        <li>
          <Link className="list" to="/covid/provinsi">
            Provinsi
          </Link>
        </li>
        <li>
          <Link className="list" to="/covid/about">
            About
          </Link>
        </li>
      </ul>
    </StyleMenu>
  );
};
export default Menu;
