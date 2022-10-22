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
  return (
    <main>
      <svg className="backgroundSVG" xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 1440 1080">
        <g mask='url("#SvgjsMask1430")' fill="none">
          <rect width="100%" height="100%" x="0" y="0" fill="url(#SvgjsRadialGradient1431)"></rect>
          <path d="M0 0L253.33 0L0 193.53z" fill="rgba(0, 0, 0, .05)"></path>
          <path d="M0 193.53L253.33 0L880.2900000000001 0L0 285.17z" fill="rgba(0, 0, 0, .05)"></path>
          <path d="M0 285.17L880.2900000000001 0L1221.73 0L0 514.15z" fill="rgba(0, 0, 0, .15)"></path>
          <path d="M0 514.15L1221.73 0L1280.24 0L0 777.55z" fill="rgba(0, 0, 0, .1)"></path>
          <path d="M1440 1080L1273.23 1080L1440 870.45z" fill="(0, 0, 0, .15)"></path>
          <path d="M1440 870.45L1273.23 1080L704.97 1080L1440 418.12000000000006z" fill="rgba(0, 0, 0, .1)"></path>
          <path d="M1440 418.12L704.97 1080L420.06 1080L1440 166.82z" fill="rgba(0, 0, 0, .15)"></path>
          <path d="M1440 166.81999999999994L420.05999999999995 1080L249.79999999999995 1080L1440 133.43999999999994z" fill="rgba(0, 0, 0, .1)"></path>
        </g>
        <defs>
          <mask id="SvgjsMask1430">
            <rect width="100%" height="100%" fill="#ffffff"></rect>
          </mask>
          {dark === "True" ? (
            <radialGradient cx="50%" cy="0%" r="1298" gradientUnits="userSpaceOnUse" id="SvgjsRadialGradient1431">
              <stop stopColor="#11141a" offset="0"></stop>
              <stop stopColor="#11141a" offset="1"></stop>
            </radialGradient>
          ) : (
            <radialGradient cx="50%" cy="0%" r="1298" gradientUnits="userSpaceOnUse" id="SvgjsRadialGradient1431">
              <stop stopColor="rgba(193, 193, 193, 1)" offset="0"></stop>
              <stop stopColor="rgba(153, 153, 153, 1)" offset="1"></stop>
            </radialGradient>
          )}
        </defs>
      </svg>
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
  const { theme } = useContext(ThemeContext);
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
