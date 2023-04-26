import style from './Footer.module.css';
import Menu from '../Menu';
function Footer() {
  return (
    <div className={style.container}>
      <nav className={style.footer}>
        <div>
          <h1 className={style.footer__brand}>Covid ID</h1>
          <p className={style.footer__desk}>Developed by M.Rafiq123</p>
        </div>
        <Menu />
      </nav>
    </div>
  );
}

export default Footer;
