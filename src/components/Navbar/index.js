import style from './Navbar.module.css';
import Menu from '../Menu/index.js';
function Navbar() {
  return (
    <div className={style.container}>
      <nav className={style.navbar}>
        <div>
          <h1 className={style.navbar__brand}>Covid ID</h1>
        </div>
        <Menu />
      </nav>
    </div>
  );
}

export default Navbar;
