import type { Project } from "../types/types";
import pokemon from '../assets/images/pokemons.png';
import users_app from '../assets/images/users-app.png';
import vinyl_store from '../assets/images/ecommerce.png';
import react from '../assets/images/react.svg';
import react_router from '../assets/images/react-router.svg';
import vite from '../assets/images/vite.svg';
import typescript from '../assets/images/typescript.svg';
import redux from '../assets/images/redux.svg';
import eslint from '../assets/images/eslint.svg';
import prettier from '../assets/images/prettier.svg';
import stylelint from '../assets/images/stylelint.svg';
import antdesign from '../assets/images/antdesign.svg';
import shelter from '../assets/images/shelter.png';
import javascript from '../assets/images/js.svg';
import christmas_shop from '../assets/images/christmas-shop.png';



export const projects: Project[] = [
  {
    id: 1, 
    image: shelter,
    title: 'Shelter', 
    description: 'Приложение для приюта животных',
    stack: 
    [
      {icon: javascript, value: 'JavaScript'}, 
    ],
    demo: 'https://shakhrii.github.io/Shelter/pages/main',
    github: 'https://github.com/Shakhrii/Shelter/tree/main',
  },
    {
    id: 2, 
    image: christmas_shop,
    title: 'Christmas Shop', 
    description: 'Магазин рождественских игрушек',
    stack: 
    [
      {icon: javascript, value: 'JavaScript'}, 
    ],
    demo: 'https://rolling-scopes-school.github.io/shakhrii-JSFE2024Q4/christmas-shop/pages/gifts/gifts.html',
    github: 'https://github.com/rolling-scopes-school/shakhrii-JSFE2024Q4/tree/christmas-shop/christmas-shop',
  },
  {
    id: 3, 
    image: pokemon,
    title: 'Pokemons Api', 
    description: 'Приложение для отображение карточек с покемонами, поиском по имени и id. Детальная информация о каждом покемоне. Пагинация, кэширование запросов и ручной рефетч запросов',
    stack: 
    [
      {icon: react, value: 'React'}, 
      {icon: typescript, value: 'TypeScript'}, 
      {icon: react_router, value: 'React Router'}, 
      {icon: vite, value: 'Vite'}, 
      {icon: redux, value: 'RTK, RTK Query'}, 
      {icon: eslint, value: 'ESLint'}, 
      {icon: prettier, value: 'Prettier'}, 
      {icon: '', value: 'Husky'}, 
      {icon: '', value: 'Vitest'}
    ],
    demo: 'https://rss-pokemons.netlify.app/pokemons?page=1',
    github: 'https://github.com/Shakhrii/rs-react-app/tree/api-queries',
  },
  {
    id: 4, 
    image: users_app,
    title: 'Users app', 
    description: 'Приложение для управления пользователями, с такими возможностями как: авторизация, создание пользователя, редактирование пользователя, удаление пользователя со стейт менеджером и кэшированием запросов',
    stack: 
    [
      {icon: react, value: 'React'}, 
      {icon: typescript, value: 'TypeScript'}, 
      {icon: react_router, value: 'React Router'}, 
      {icon: vite, value: 'Vite'}, 
      {icon: eslint, value: 'ESLint'}, 
      {icon: prettier, value: 'Prettier'}, 
      {icon: '', value: 'Tanstack Query'}, 
      {icon: '', value: 'Husky'}, 
      {icon: '', value: 'Vitest'}
    ],
    demo: 'https://ephemeral-taffy-bb052a.netlify.app',
    github: 'https://github.com/Shakhrii/Users-App',
  },
  {
    id: 5, 
    image: vinyl_store,
    title: 'Vinyl Store', 
    description: 'Командный проект - магазин виниловых пластинок, с возможностью фильтрации и поиска, реализована корзина',
    stack: 
    [
      {icon: react, value: 'React'}, 
      {icon: typescript, value: 'TypeScript'}, 
      {icon: react_router, value: 'React Router'}, 
      {icon: vite, value: 'Vite'}, 
      {icon: eslint, value: 'ESLint'}, 
      {icon: prettier, value: 'Prettier'}, 
      {icon: antdesign, value: 'Ant Design'},
      {icon: stylelint, value: 'StyleLint'},
      {icon: '', value: 'Zustand'},
      {icon: '', value: 'Tanstack Query'}, 
      {icon: '', value: 'Husky'}, 
      {icon: '', value: 'Vitest'},
      {icon: '', value: 'Commercetools platform-sdk'},
    ],
    demo: 'https://deft-dragon-afee4f.netlify.app/login',
    github: 'https://github.com/dmalashev/eCommerce-Application/tree/develop',
  },
]