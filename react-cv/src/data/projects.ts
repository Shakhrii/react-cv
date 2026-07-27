import type { Project } from "../types/types";
import pokemon from '../assets/images/pokemons.png';
import react from '../assets/images/react.svg';
import react_router from '../assets/images/react-router.svg';
import vite from '../assets/images/vite.svg';
import typescript from '../assets/images/typescript.svg';
import redux from '../assets/images/redux.svg';
import eslint from '../assets/images/eslint.svg';
import prettier from '../assets/images/prettier.svg';



export const projects: Project[] = [
  {
    id: 1, 
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
    demo: 'https://rss-pokemons.netlify.app/pokemons/?page=1',
    github: 'https://github.com/Shakhrii/rs-react-app/tree/api-queries',
  },
]