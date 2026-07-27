import { Button } from "../Button";
import { Icon } from "../Icon";
import cls from "./Hero.module.css";
import photo from "../../assets/images/photo.jpg";
import github from '../../assets/images/github-icon.svg';
import telegram from '../../assets/images/telegram-icon.svg';

const Hero = () => {
  const githubLink = 'https://github.com/Shakhrii';
  const telegramLink = 'https://t.me/Shakhrii'

  return (
    <section className={cls.hero}>
      <div className={`${cls['hero-wrapper']} section`}>
        <div className={cls.greetings}>
          <h1 className={cls.name}>
            Привет! <br />Я Шахри Рамалданова
          </h1>
          <h2 className={cls.details}>frontend react developer</h2>
          <div className={cls.contact}>
            <Button>Написать мне</Button>
            <a href={githubLink} target="_blank" className={cls.button}>
              <Icon>
                <img src={github} alt="github"/>
              </Icon>
            </a>
            
            <a href={telegramLink} target="_blank" className={cls.button}>
              <Icon>
                <img src={telegram} alt="telegram"/>
              </Icon>
            </a>
          </div>
        </div>
        <img src={photo} alt="my photo" className={cls.photo} />
      </div>
      <div className={cls.line}></div>
    </section>
  );
};

export default Hero;
