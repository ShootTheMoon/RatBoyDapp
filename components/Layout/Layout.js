//React Imports
import { useContext, useState, useEffect } from "react";
//Component Imports
import SideMenu from "../Menu/SideMenu/SideMenu";
import SideMenuMobile from "../Menu/SideMenu/SideMenuMobile";
import DesktopMenu from "../Menu/Desktop/DesktopMenu";
//Library Imports
import { AnimatePresence, motion } from "framer-motion";
//Context Imports
import { ThemeContext } from "../../pages/_app";
import { GlobalContext } from "../../pages/_app";

const Layout = (props) => {
  const { theme } = useContext(ThemeContext);
  const { windowDimensions } = useContext(GlobalContext);
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <LayoutWrapper theme={theme}>
        {windowDimensions >= 750 ? (
          <div>
            <SideMenu />
          </div>
        ) : (
          <div>
            <SideMenuMobile toggle={toggle} setToggle={setToggle} />
          </div>
        )}

        <div className="menuAndBody">
          <div className="menu">
            <AnimatePresence exitBeforeEnter>{!toggle && <DesktopMenu />}</AnimatePresence>
          </div>
          <Body>{props.children}</Body>
        </div>
      </LayoutWrapper>
      <style jsx>
        {`
          .menuAndBody {
            width: 100%;
            display: flex;
            justify-content: flex-start;
            align-items: flex-start;
            flex-direction: column;
          }

          .menu {
            width: 100%;
            height: 7.5rem;
          }
        `}
      </style>
    </>
  );
};

const LayoutWrapper = (props) => {
  const { dark } = useContext(ThemeContext);
  const { theme } = useContext(ThemeContext);
  return (
    <main>
      {props.children}

      <style jsx>
        {`
          main {
            position: relative;
            display: flex;
            justify-content: flex-start;
            align-items; flex-start;
            flex-direction: row;
            min-height: 100vh;
            width: 100vw;
            background-color: ${theme.MainColor};
          }

          .backgroundSVG{
            position: absolute;
            z-index: -1;
          }

        `}
      </style>
    </main>
  );
};

const Body = (props) => {
  return (
    <main>
      {props.children}
      <style jsx>
        {`
          main {
            padding: 2rem;
            width: 100%;
            height: 100%;
            border-top-left-radius: 0.5rem;
          }
        `}
      </style>
    </main>
  );
};

export default Layout;
