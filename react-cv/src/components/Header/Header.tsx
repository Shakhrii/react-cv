import cls from './Header.module.css';

const menuItems = [
  {
    title: "Проекты",
    href: "#projects",
  },
  {
    title: "Обо мне",
    href: "#about",
  },
  {
    title: "Контакты",
    href: "#contact",
  },
];

const Header = () => {
  return (
    <header className={cls.header}>
      <div className={cls.container}>
        <a href="/" className={cls.logo}>
          ШАХРИ РАМАЛДАНОВА
        </a>

        <nav>
          <ul className={cls.menu}>
            {menuItems.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.title}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;