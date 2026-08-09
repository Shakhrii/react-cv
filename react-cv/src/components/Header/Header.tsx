import { Menu } from '../Menu';
import cls from './Header.module.css';

const Header = () => {
  return (
    <header className={cls.header}>
      <div className={cls.container}>
        <a href="/" className={cls.logo}>
          ШАХРИ РАМАЛДАНОВА
        </a>
        <Menu />
      </div>
    </header>
  );
};

export default Header;