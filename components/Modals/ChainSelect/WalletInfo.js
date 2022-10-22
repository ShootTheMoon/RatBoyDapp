import { useContext } from "react";
// Lib imports
import { motion } from "framer-motion";
// Context Imports
import { GlobalContext, ThemeContext } from "../../../pages/_app";
// Component imports

const ChainSelect = () => {
  const { setShowChains } = useContext(GlobalContext);
  const { theme } = useContext(ThemeContext);

  return (
    <motion.div variants={animations.background} style={{ position: "relative", zIndex: "100000" }} initial="hidden" animate="visible" exit="exit">
      <main onClick={() => setShowChains(false)}>
        <div className="popupHeader"></div>
        <div className="popupWrapper"></div>
        <div className="popupFooter"></div>
        <style jsx>
          {`
            main {
              font-size: 1.7rem;
              position: fixed;
              top: 0;
              left: 0;
              height: 100%;
              width: 100%;
              display: flex;
              justify-content: center;
              align-items: center;
              height: 100vh;
              width: 100vw;
              background-color: rgba(179, 179, 179, 0.42);
              z-index: 200;
              color: ${theme.TextColor};
            }

            .popupWrapper {
              background-color: ${theme.MainColor};
              display: flex;
              justify-content: center;
              align-items: center;
              flex-direction: column;
              z-index: 200;
              border-radius: ${theme.BorderRadius};
              box-shadow: ${theme.BoxShadow};
            }

            .popupHeader {
              display: flex;
              justify-content: center;
              align-items: center;
              padding: 1.5rem 2rem;
              width: 100%;
              background-color: ${theme.MainColor};
              border-top-left-radius: ${theme.BorderRadius};
              border-top-right-radius: ${theme.BorderRadius};
              border-bottom: 0.5px solid rgba(255, 255, 255, 0.3);
            }
            .popupFooter {
              display: flex;
              justify-content: center;
              align-items: center;
              width: 100%;
              padding: 2rem 0 2rem 0;
              background-color: ${theme.MainColor};
              border-bottom-left-radius: ${theme.BorderRadius};
              border-bottom-right-radius: ${theme.BorderRadius};
            }
          `}
        </style>
      </main>
    </motion.div>
  );
};

export default ChainSelect;
