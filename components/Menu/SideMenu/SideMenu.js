// React Imports
import { useContext, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
// Context Imports
import { ThemeContext } from "../../../pages/_app";
// List Imports
import menuList from "./MenuList";
// Asset Imports
import RatboyTextLogo from "../../../public/Images/Logos/RatboyTextLogo.png";

const SideMenu = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="sideMenuWrapper">
      <header className="menuHeader">
        <div className="logoWrapper">
          <Link href="/">
            <Image layout={"intrinsic"} priority={true} src={RatboyTextLogo} />
          </Link>
        </div>
      </header>
      <div className="sideMenu">
        <h3>Token</h3>
        {menuList.map((item, i) => {
          if (item.category === "token") {
            return <MenuItem link={item.link} key={i} name={item.name} icon={item.icon} />;
          }
        })}
        <h3>NFTs</h3>
        {menuList.map((item, i) => {
          if (item.category === "nft") {
            return <MenuItem link={item.link} key={i} name={item.name} icon={item.icon} />;
          }
        })}
      </div>
      <style jsx>
        {`
          .sideMenuWrapper {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            flex-direction: column;
            height: 100vh;
            width: 22rem;
            top: 0;
            left: 0;
            backdrop-filter: blur(10px);
            background-color: ${theme.MainColor2};
          }

          .sideMenu {
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: flex-start;
            flex-direction: column;
          }

          .sideMenu h3 {
            padding: 3rem 0rem 1rem 2rem;
            width: 100%;
            font-size: 1.6rem;
            color: ${theme.TextColor};
          }

          .menuHeader {
            position: relative;
            height: 9rem;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            width: 100%;
          }

          .logoWrapper {
            display: flex;
            justify-content: center;
            align-items: center;
            overflow: clip;
            height: 100%;
            width: 90%;
            position: absolute;
            cursor: pointer;
          }
        `}
      </style>
    </div>
  );
};

const MenuItem = (props) => {
  const { theme } = useContext(ThemeContext);
  return (
    <Link href={`/${props.link}`}>
      <main>
        <div className="border" />
        <div className="itemIcon">{props.icon}</div>
        <div className="itemName">{props.name}</div>
        <style jsx>
          {`
            main {
              width: 100%;
              height: 6rem;
              display: flex;
              justify-content: flex-start;
              align-items: flex-start;
              font-size: 1.6rem;
              gap: 0.6rem;
              color: ${theme.TextColor2};
              transition: 0.2s;
              cursor: pointer;
            }

            .itemIcon {
              padding-left: 1rem;
              display: flex;
              align-self: center;
              justify-self: center;
              fill: ${theme.TextColor};
            }
            .itemName {
              align-self: center;
              justify-self: center;
            }

            main:hover {
              background-color: ${theme.MainColor};
            }

            main:hover .border {
              width: 1rem;
              background-color: ${theme.ActionColor};
            }

            .border {
              transition: 0.2s;
              width: 0rem;
              height: 100%;
              background-color: ${theme.MainColor2};
              border-top-right-radius: ${theme.BorderRadius};
              border-bottom-right-radius: ${theme.BorderRadius};
            }
          `}
        </style>
      </main>
    </Link>
  );
};

export default SideMenu;
