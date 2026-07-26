import { Button } from "../Button";
import { Icon } from "../Icon";
import cls from "./Hero.module.css";
import photo from "../../assets/images/photo.jpg";
import github from '../../assets/images/github-icon.svg';
import telegram from '../../assets/images/telegram-icon.svg';

const Hero = () => {
  return (
    <section className={`${cls.hero} section`}>
      <div className={cls.greetings}>
        <h1 className={cls.name}>
          Привет! <br />Я Шахпери Рамалданова
        </h1>
        <h2 className={cls.details}>frontend react developer</h2>
        <div className={cls.contact}>
          <Button>Написать мне</Button>
          <Icon>
            <img src={github} alt="github"/>
          </Icon>
          <Icon>
            <img src={telegram} alt="telegram"/>
          </Icon>
        </div>
      </div>
      <img src={photo} alt="my photo" className={cls.photo} />
    </section>
  );
};

export default Hero;
