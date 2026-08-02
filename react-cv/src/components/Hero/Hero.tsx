import { Button } from "../Button";
import { Icon } from "../Icon";
import cls from "./Hero.module.css";
import photo from "../../assets/images/photo.png";
import github from '../../assets/images/github-icon.svg';
import telegram from '../../assets/images/telegram-icon.svg';
import phone from '../../assets/images/phone.svg';

const Hero = () => {
  const githubLink = 'https://github.com/Shakhrii';
  const telegramLink = 'https://t.me/Shakhrii'
  const phoneLink = "tel:+79634211771";
  
  return (
    <section className={cls.hero}>
      <div className={`section ${cls['hero-wrapper']}`}>
        <div className={cls.greetings}>
          <p className={cls.hello}>Привет!</p>
          <h1 className={cls.name}>
            Я Шахпери <br />Рамалданова
          </h1>
          <h2 className={cls.details}>frontend react developer</h2>
          <div className={cls.contact}>
            <a href="#contact">
              <Button>Написать мне</Button>
            </a>
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
             <a href={phoneLink} target="_blank" className={cls.button}>
              <Icon>
                <img src={phone} alt="phone" />
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
