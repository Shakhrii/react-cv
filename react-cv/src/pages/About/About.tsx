import cls from "./About.module.css";
const About = () => {
  return (
    <section className={cls.about} id="about">
      <div className={`section ${cls['about-wrapper']}`}>
        <h2 className={cls.title}>ОБО МНЕ</h2>
        <div className={cls.details}>
          <h3 className={cls.subtitle}>
            Frontend-разработчик на React 
          </h3>
          <p className={cls.description}>
            Хорошо работаю в команде, легко нахожу общий язык. Внимательна к деталям и
            соблюдению сроков. Нравится создавать что-то интересное и полезное.
          </p>
          <a href="" className={cls.link}>
            ПОДРОБНЕЕ ОБО МНЕ
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
