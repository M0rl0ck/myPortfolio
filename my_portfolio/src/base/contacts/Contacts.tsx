import { FormattedMessage } from "react-intl";
import Circle from "../decoration/Circle/Circle";
import style from "./contacts.module.css";

function Contacts() {
  return (
    <div className={style.contacts}>
      <h2>
        <FormattedMessage id="CONTACTS" />
      </h2>
      <ul>
        <li>
          Location: <span>Shakhty, Russia</span>
        </li>
        <li>
          Phone: <span>+79281825723</span>
        </li>
        <li>
          E-mail:{" "}
          <span>
            <a href="mailto:seriy17@yandex.ru" target="_blank">
              seriy17@yandex.ru
            </a>
          </span>
        </li>
        <li>
          Skype:{" "}
          <span>
            <a href="https://join.skype.com/invite/zCjdUVJYCW8V">
              live:m0rlock
            </a>
          </span>
        </li>
        <li>
          Discord:{" "}
          <span>
            <a href="https://discordapp.com/users/914233128330088478/">
              m0rl0ck
            </a>
          </span>
        </li>
        <li>
          Telegram:{" "}
          <span>
            <a href="https://t.me/sergeysergeevn">sergeysergeevn</a>
          </span>
        </li>
        <li>
          GitHub:{" "}
          <span>
            <a href="https://github.com/M0rl0ck">M0rl0ck</a>
          </span>
        </li>
      </ul>
      <Circle position={style.positionCircle} />
    </div>
  );
}

export default Contacts;
