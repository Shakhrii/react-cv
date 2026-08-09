import { Link } from "react-router";
import cls from "./AboutPreview.module.css";
const AboutPreview = () => {
  return (
    <section className={cls.about} id="about">
      <div className={`section ${cls.aboutWrapper}`}>
        <h2 className={cls.title}>ОБО МНЕ</h2>
        <div className={cls.details}>
          <h3 className={cls.subtitle}>Frontend-разработчик на React</h3>
          <p className={cls.description}>
            Люблю создавать что-то красивое, удобное и полезное - именно поэтому
            мне так интересна Frontend-разработка. Люблю искать новые и
            интересные решения для сложных задач. Хорошо работаю в команде,
            нравится взаимодействовать с другими людьми, совместно создавать
            крутые продукты! <br />
            Ответственно подхожу к выполнению задач в сроки, внимательная к
            деталям и требованиям
          </p>
          <Link to="/about" className={cls.link}>
            ПОДРОБНЕЕ ОБО МНЕ
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
