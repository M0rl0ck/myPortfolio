import style from "./navContacts.module.css";
import NavContact from "./NavContact";
import git from "../../assets/github.svg";
import telegram from "../../assets/telegram.svg";
import discord from "../../assets/discord.svg";
import skype from "../../assets/skype.svg";

function NavContacts() {
  return (
    <ul className={style.container}>
      <NavContact link="https://github.com/M0rl0ck" icon={git} name="git" />
      <NavContact
        link="https://t.me/sergeysergeevn"
        icon={telegram}
        name="telegram"
      />
      <NavContact
        link="https://discordapp.com/users/914233128330088478/"
        icon={discord}
        name="discord"
      />
      <NavContact
        link="https://join.skype.com/invite/zCjdUVJYCW8V"
        icon={skype}
        name="skype"
      />
    </ul>
  );
}

export default NavContacts;
