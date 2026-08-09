import { Icon } from "../Icon";
import cls from "./Contact.module.css";
import github from "../../assets/images/github-icon.svg";
import telegram from "../../assets/images/telegram-icon.svg";
import gmail from "../../assets/images/gmail.svg";
import phone from '../../assets/images/phone.svg';
import { Form } from "../Form";

const Contact = () => {
  const githubLink = "https://github.com/Shakhrii";
  const telegramLink = "https://t.me/Shakhrii";
  const gmailLink = "mailto:sh.ramaldanova@gmail.com";
  const phoneLink = "tel:+79634211771";

  return (
    <section className={cls.about} id="contact">
      <div className={`section ${cls.contactWrapper}`}>
        <div className={cls.links}>
          <h2 className={cls.title}>КОНТАКТЫ</h2>
          <div className={cls.icons}>
            <a href={githubLink} target="_blank" className={cls.button}>
              <Icon>
                <img src={github} alt="github" />
              </Icon>
            </a>
            <a href={telegramLink} target="_blank" className={cls.button}>
              <Icon>
                <img src={telegram} alt="telegram" />
              </Icon>
            </a>
            <a href={gmailLink} target="_blank" className={cls.button}>
              <Icon>
                <img src={gmail} alt="gmail" />
              </Icon>
            </a>
            <a href={phoneLink} target="_blank" className={cls.button}>
              <Icon>
                <img src={phone} alt="phone" />
              </Icon>
            </a>
          </div>
        </div>
        <div className={cls.form}>
          <Form />
        </div>
      </div>
    </section>
  );
};

export default Contact;
