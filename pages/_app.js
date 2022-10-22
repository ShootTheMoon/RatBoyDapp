//Global Style
import "../styles/globals.css";
//Library Imports
import { useEffect, useState, createContext } from "react";
import { AnimatePresence } from "framer-motion";
//Component Imports
import Layout from "../components/Layout/Layout";
import NotificationProvider from "../components/Modals/AlertPopup/NotificationProvider";
import WalletConnect from "../components/Modals/WalletConnect/WalletConnect";
// Context Imports
import Web3Providers from "../components/Utils/Web3Providers";

//Get height and width of window
function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}
//Dark Theme
const darkTheme = {
  MainColor: "#292e35",
  MainColor2: "#21252b",
  HoverColor: "#3f454d",
  ActionColor: "#5cdb5c",
  ActionColor2: "#1c7a38",
  TextColor: "#fff",
  TextColor2: "#cacaca",
  TextColor3: "#686868",
  FontSize: "1.5rem",
  HeaderFontSize: "3rem",
  BorderRadius: ".4rem",
  BoxShadow: ".3rem .3rem .6rem rgba(0, 0, 0, 0.556)",
  TransparentMain: "#292e3572",
};

//Light Theme
const lightTheme = {
  MainColor: "#fff",
  MainColor2: "#e1e1e1",
  HoverColor: "#b5b5b5",
  ActionColor: "#5cdb5c",
  ActionColor2: "#1c7a38",
  TextColor: "#202020",
  TextColor2: "#484848",
  TextColor3: "#383838",
  FontSize: "1.5rem",
  FontWeight: "600",
  FontWeight2: "400",
  HeaderFontSize: "3rem",
  BorderRadius: ".4rem",
  BoxShadow: ".3rem .3rem .6rem rgba(0, 0, 0, 0.556)",
  TransparentMain: "#ffffff82",
};

//Global context creation
export const ThemeContext = createContext(null);
export const GlobalContext = createContext(null);

const Theme = (props) => {
  const [dark, setDark] = useState("True");
  const [theme, setTheme] = useState(dark ? darkTheme : lightTheme);
  const [localStorageLoaded, setLocalStorageLoaded] = useState(false);

  const setDarkTheme = () => {
    if (localStorage.getItem("DarkTheme") === "True") {
      localStorage.setItem("DarkTheme", "False");
      setDark("False");
    } else {
      localStorage.setItem("DarkTheme", "True");
      setDark("True");
    }
  };

  useEffect(() => {
    if (dark === "True") {
      setTheme(darkTheme);
    } else {
      setTheme(lightTheme);
    }
    setTimeout(() => {
      setLocalStorageLoaded(true);
    }, 50);
  }, [dark]);
  useEffect(() => {
    if (localStorage.getItem("DarkTheme") === "True" || localStorage.getItem("DarkTheme") === "False") {
      setDark(localStorage.getItem("DarkTheme"));
    } else {
      setDark(localStorage.setItem("DarkTheme", "True"));
      setDark("True");
    }
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        dark,
        setDark,
        setDarkTheme,
        localStorageLoaded,
      }}
    >
      {localStorageLoaded && props.children}
    </ThemeContext.Provider>
  );
};

function MyApp({ Component, pageProps, router }) {
  const [showWallet, setShowWallet] = useState(false);

  useEffect(() => {
    //Set window listener
    setWindowDimensions(getWindowDimensions().width);

    function resizeHandler() {
      setWindowDimensions(getWindowDimensions().width);
    }

    window.addEventListener("resize", resizeHandler);
    //Not needed but could be nice to have
  }, []);

  const [windowDimensions, setWindowDimensions] = useState(null);

  return (
    <GlobalContext.Provider
      value={{
        windowDimensions,
        showWallet,
        setShowWallet,
      }}
    >
      <Theme>
        <Web3Providers>
          <AnimatePresence exitBeforeEnter>{showWallet && <WalletConnect />}</AnimatePresence>
          <NotificationProvider>
            <Layout>
              <AnimatePresence exitBeforeEnter>
                <Component key={router.route} {...pageProps} />
              </AnimatePresence>
            </Layout>
          </NotificationProvider>
        </Web3Providers>
      </Theme>
    </GlobalContext.Provider>
  );
}

export default MyApp;
