import { Link } from "react-router";
import cls from "./AboutPreview.module.css";
const AboutPreview = () => {
  return (
    <section className={cls.about} id="about">
      <div className={`section ${cls.aboutWrapper}`}>
        <h2 className={cls.title}>ОБО МНЕ</h2>
        <div className={cls.details}>
          <h3 className={cls.subtitle}>
            Frontend-разработчик на React 
          </h3>
          <p className={cls.description}>
            Хорошо работаю в команде, легко нахожу общий язык. Внимательна к деталям и
            соблюдению сроков. Нравится создавать что-то интересное и полезное.
          </p>
          <Link to='/about' className={cls.link}>
            ПОДРОБНЕЕ ОБО МНЕ
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;