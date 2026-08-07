import { useEffect, useState } from "react";
import { menuItems } from "../../data/menu";
import cls from "./Menu.module.css";

const Menu = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (active) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      document.documentElement.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      document.documentElement.style.overflow = 'unset';
    };
  }, [active]);
  
  const btnBurgerClickHandler = () => {
    setActive((prev) => {
      return !prev;
    });
  };
  return (
    <div>
      <div
        className={`${cls.overlay} ${active ? cls["overlay-active"] : ""}`}
        onClick={() => setActive(false)}
      />
      <nav>
        <ul className={`${cls.menu} ${active && cls["menu-active"]}`}>
          {menuItems.map((item) => (
            <li key={item.href} onClick={() => setActive(false)}>
              <a href={item.href}>{item.title}</a>
            </li>
          ))}
        </ul>
      </nav>
      <button
        className={`${cls["burger-btn"]} ${active && cls["menu-active"]}`}
        onClick={btnBurgerClickHandler}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  );
};

export default Menu;
