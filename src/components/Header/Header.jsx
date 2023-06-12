import { Logo } from "../Logo/Logo";
import { LogoTitle } from "../LogoTitle/LogoTitle";
import headerStyles from "./Header.module.css";
import classNames from "classnames";

export const Header = function () {
  return (
    <header
      className={classNames({
        [headerStyles.header]: true,
      })}
    >
      <div className={headerStyles.leftContainer}>
        <Logo />
        <LogoTitle />
      </div>
      <div></div>
    </header>
  );
};
