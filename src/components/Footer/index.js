// import style from './Footer.module.css';
import Menu from '../Menu';
import StyledFooter from './footer.modules';
function Footer() {
  return (
    <StyledFooter>
      <nav className="footer">
        <div>
          <h1 className="footer__brand">Covid ID</h1>
          <p className="footer__desk">Developed by M.Rafiq123</p>
        </div>
        <Menu />
      </nav>
    </StyledFooter>
  );
}

export default Footer;
