import { useEffect, useState } from "react";
import { menuItems } from "../../data/menu";
import cls from "./Menu.module.css";
import { Link, useLocation } from "react-router";

const Menu = () => {
  const [active, setActive] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const scrollToHash = (): void => {
      if (location.hash) {
        const hash = location.hash.replace("#", "");
        const element = document.getElementById(hash);
        element?.scrollIntoView({
          behavior: "smooth",
        });
      }
    };

    scrollToHash();
  }, [location]);

  useEffect(() => {
    if (active) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      document.documentElement.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      document.documentElement.style.overflow = "unset";
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
        className={`${cls.overlay} ${active ? cls.overlayActive : ""}`}
        onClick={() => setActive(false)}
      />
      <nav>
        <ul className={`${cls.menu} ${active && cls.menuActive}`}>
          {menuItems.map((item) => (
            <li key={item.href} onClick={() => setActive(false)}>
              <Link to={item.href}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <button
        className={`${cls.burgerBtn} ${active && cls.menuActive}`}
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
