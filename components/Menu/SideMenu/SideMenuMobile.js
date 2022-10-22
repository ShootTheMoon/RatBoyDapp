// React Imports
import { useContext } from "react";
import Link from "next/link";
import Image from "next/image";
// Context Imports
import { ThemeContext } from "../../../pages/_app";
// Lib Imports
import { AnimatePresence, motion } from "framer-motion";
// List Imports
import menuList from "./MenuList";
// Asset Imports
import RatboyTextLogo from "../../../public/Images/Logos/RatboyTextLogo.png";

const SideMenuMobile = ({ toggle, setToggle }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <MenuIconWrapper toggle={toggle} setToggle={setToggle} />
      <AnimatePresence exitBeforeEnter>
        {toggle && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ type: "tween", stiffness: 100 }}>
            <div className="menuWrapper">
              <motion.div initial={{ x: "-120%" }} animate={{ x: "0%" }} exit={{ x: "-120%" }} transition={{ type: "tween", stiffness: 100 }}>
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
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ type: "tween", stiffness: 100 }}>
                <div className="exitMenuButton" onClick={() => setToggle(false)}>
                  <span />
                  <span />
                </div>
              </motion.div>
              <style jsx>
                {`
                  .menuWrapper {
                    position: fixed;
                    display: flex;
                    justify-content: flex-start;
                    align-items: center;
                    width: 100vw;
                    height: 100vh;
                    top: 0;
                    left: 0;
                    gap: 2rem;
                    background-color: rgba(179, 179, 179, 0.42);
                  }

                  .exitMenuButton {
                    display: flex;
                    position: relative;
                    justify-content: center;
                    align-items: center;
                    flex-direction: column;
                    height: 5rem;
                    width: 5rem;
                    border-radius: 100rem;
                    border: 0.2rem solid ${theme.TextColor};
                    background-color: ${theme.MainColor2};
                    cursor: pointer;
                  }

                  .exitMenuButton span {
                    position: absolute;
                    width: 3rem;
                    height: 0.3rem;
                    background-color: ${theme.TextColor};
                    transition: 0.2s;
                    transform-origin: center;
                    border-radius: ${theme.BorderRadius};
                  }
                  .exitMenuButton span:nth-of-type(1) {
                    transform: rotate(45deg);
                  }
                  .exitMenuButton span:nth-of-type(2) {
                    transform: rotate(-45deg);
                  }

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
                `}
              </style>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const MenuItem = (props) => {
  const { theme } = useContext(ThemeContext);
  return (
    <Link href={`/${props.link}`}>
      <main
        onClick={() => {
          props.setToggle(false);
        }}
      >
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

const MenuIconWrapper = ({ setToggle, toggle }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <main>
      <div onClick={() => setToggle(!toggle)} className="iconWrapper">
        <span />
        <span />
        <span />
      </div>
      <style jsx>
        {`
          main {
            position: absolute;
            top: 1.5rem;
            left: 1rem;
            cursor: pointer;
          }
          .iconWrapper {
            display: flex;
            position: relative;
            height: 3rem;
            width: 3rem;
            justify-content: center;
            align-items: stretch;
            flex-direction: column;
          }
          .iconWrapper span {
            position: absolute;
            width: 3rem;
            height: 0.3rem;
            background-color: ${theme.TextColor};
            transition: 0.2s;
            transform-origin: center;
            border-radius: ${theme.BorderRadius};
          }
          .iconWrapper span:nth-of-type(1) {
            top: 0.5rem;
          }
          .iconWrapper span:nth-of-type(3) {
            bottom: 0.5rem;
          }
        `}
      </style>
    </main>
  );
};

export default SideMenuMobile;
