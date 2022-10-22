//React Imports
import Link from "next/link";
import { useState, useContext } from "react";
//Library Imports
import { motion, AnimatePresence } from "framer-motion";
//Context Imports
import { ThemeContext } from "../../../pages/_app";
import { GlobalContext } from "../../../pages/_app";

const MenuItem = (props) => {
  const { theme } = useContext(ThemeContext);
  const { windowDimensions } = useContext(GlobalContext);
  const [toggle, setToggle] = useState(false);

  const animationMenu = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      transition: {
        default: { duration: 0.1 },
      },
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        default: { duration: 0.1 },
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        default: { duration: 0.1 },
      },
    },
  };

  return (
    <>
      {windowDimensions >= 750 ? (
        <main onMouseEnter={() => setToggle(true)} onMouseLeave={() => setToggle(false)}>
          <AnimatePresence exitBeforeEnter>
            {toggle && (
              <motion.div variants={animationMenu} initial="hidden" animate="visible" exit="exit">
                {props.dropdown && props.children}
              </motion.div>
            )}
          </AnimatePresence>
          {props.link && (
            <Link href={props.link}>
              {props.name ? (
                <div className="menuItem">
                  <div>{props.name}</div>
                </div>
              ) : (
                props.item
              )}
            </Link>
          )}
          {!props.link && (
            <div className="menuItem">
              {props.name ? (
                <div className="menuItem">
                  <div>{props.name}</div>
                </div>
              ) : (
                props.item
              )}
            </div>
          )}

          <style jsx>
            {`
              main {
                display: flex;
                justify-content: center;
                align-items: center;
                cursor: pointer;
                padding-bottom: 1rem;
                transform: translateY(0.5rem);
              }

              .menuItem {
                font-size: ${theme.FontSize};
                font-weight: ${theme.FontWeight};
                color: ${theme.TextColor};
              }
            `}
          </style>
        </main>
      ) : (
        <main onClick={() => setToggle(!toggle)}>
          <AnimatePresence exitBeforeEnter>
            {toggle && (
              <motion.div variants={animationMenu} initial="hidden" animate="visible" exit="exit">
                {props.dropdown && props.children}
              </motion.div>
            )}
          </AnimatePresence>
          {props.link && (
            <Link href={props.link}>
              {props.name ? (
                <div className="menuItem">
                  <div>{props.name}</div>
                </div>
              ) : (
                props.item
              )}
            </Link>
          )}
          {!props.link && (
            <div className="menuItem">
              {props.name ? (
                <div className="menuItem">
                  <div> {props.name}</div>
                </div>
              ) : (
                props.item
              )}
            </div>
          )}

          <style jsx>
            {`
              main {
                display: flex;
                justify-content: center;
                align-items: center;
                cursor: pointer;
                padding-bottom: 1rem;
                transform: translateY(0.5rem);
              }

              .menuItem {
                font-size: ${theme.FontSize};
                font-weight: ${theme.FontWeight};
                color: ${theme.TextColor};
              }
            `}
          </style>
        </main>
      )}
    </>
  );
};

export default MenuItem;
