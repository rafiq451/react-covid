import style from './Menu.module.css';
const Menu = () => {
  return (
    <div>
      <ul className={style.navbar__list}>
        <li className={style.navbar__items}>Global</li>
        <li className={style.navbar__items}>Indonesia</li>
        <li className={style.navbar__items}>Propinsi</li>
        <li className={style.navbar__items}>About</li>
      </ul>
    </div>
  );
};
export default Menu;
