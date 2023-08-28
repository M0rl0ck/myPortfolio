import style from "./navContacts.module.css";
import git from "../../assets/github.svg";
import telegram from "../../assets/telegram.svg";
import discord from "../../assets/discord.svg";
import skype from "../../assets/skype.svg";

function NavContacts() {
  return (
    <ul className={style.container}>
      <li>
        <a href="https://github.com/M0rl0ck">
          <img className={style.icon} src={git} alt="git" />
        </a>
      </li>
      <li>
        <a href="https://t.me/sergeysergeevn">
          <img className={style.icon} src={telegram} alt="telegram" />
        </a>
      </li>
      <li>
        <a href="https://discordapp.com/users/914233128330088478/">
          <img className={style.icon} src={discord} alt="discord" />
        </a>
      </li>
      <li>
        <a href="https://join.skype.com/invite/zCjdUVJYCW8V">
          <img className={style.icon} src={skype} alt="skype" />
        </a>
      </li>
    </ul>
  );
}

export default NavContacts;
