import Menu from '../Menu/index.js';
import { styled } from 'styled-components';

const StyleNavbar = styled.div`
  :root {
    --primary: #06d6a0;
    --secondry: #118ab2;
  }
  background-color: #06d6a0;
  padding: 0.7rem;
  color: #fff;

  /* brand / logo */
  .navbar__brand {
    font-weight: 500;
    margin-bottom: 1rem;
    font-family: Viga;
    font-size: 30px;
  }

  /* Media Queries */
  @media (min-width: 768px) {
    .navbar {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      max-width: 1200px;
      margin: 0 auto;
    }
    .navbar__brand {
      font-size: 40px;
      margin-top: 1rem;
    }
  }

  @media (min-width: 992px) {
    padding: 0.9rem 2rem;
  }
`;
function Navbar() {
  return (
    <StyleNavbar>
      <nav className="navbar">
        <div>
          <h1 className="navbar__brand">Covid ID</h1>
        </div>
        <Menu />
      </nav>
    </StyleNavbar>
  );
}

export default Navbar;
