import { useEffect } from "react";
import { Button } from "../../components/Button";
import cls from "./About.module.css";

const About = () => {
  const education = [
    "Факультут математики и компьютерных наук",
    "Кафедра прикладной информатики",
    "Специальность: системный программист",
  ];

  const coursesRS = [
    "React Course, 2025 г.",
    "JS / Front-end Course, 2025 г.",
    "JS / Front-end Pre-school RU Course, 2024 г.",
  ];

  useEffect(() => {
    requestAnimationFrame(() => {
      window.scrollTo(0, 0);
    });
  }, []);
  
  return (
    <section className={cls.about} id="about">
      <div className={`section ${cls.aboutWrapper}`}>
        <div className={cls.hero}>
          <h2 className={cls.title}>ОБО МНЕ</h2>
          <div className={cls.details}>
            <h3 className={cls.subtitle}>Frontend-разработчик на React</h3>
            <p className={cls.description}>
              Люблю создавать что-то красивое, удобное  и полезное - именно поэтому мне 
              так интересна Frontend-разработка. Люблю искать новые и интересные решения 
              для сложных задач.  Хорошо работаю в команде, нравится взаимодействовать с 
              другими людьми, совместно создавать крутые продукты! <br />
              Ответственно подхожу к выполнению задач в сроки, внимательная к деталям и требованиям
            </p>
            <a href="/ramaldanova_cv.pdf" download className={cls.btnResume}>
              <Button>СКАЧАТЬ РЕЗЮМЕ</Button>
            </a>
          </div>
        </div>
        <div className={cls.education}>
          <h2 className={cls.title}>ОБРАЗОВАНИЕ</h2>
          <div className={cls.details}>
            <h3 className={cls.subtitle}>
              Дагестанский Государственный университет
            </h3>
            <ul className={cls.list}>
              {education.map((item) => (
                <li className={cls.item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className={cls.courses}>
          <h2 className={cls.title}>КУРСЫ</h2>
          <div className={cls.coursesList}>
            <div className={cls.details}>
              <h3 className={cls.subtitle}>Rolling Scopes School</h3>
              <ul className={cls.list}>
                {coursesRS.map((item) => (
                  <li className={cls.item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className={cls.details}>
              <h3 className={cls.subtitle}>Азбука Цифры</h3>
              <ul className={cls.list}>
                <li className={cls.item}>
                  Специалист по тестированию в области информационных технологий, 2022 г.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
