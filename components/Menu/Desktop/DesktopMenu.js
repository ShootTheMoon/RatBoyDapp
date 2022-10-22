// React Imports
import { useContext, useEffect, useState } from "react";
// Component Imports
// Context Imports
import { GlobalContext, ThemeContext } from "../../../pages/_app";
import { Web3Context } from "../../Utils/Web3Providers";
// Asset Imports
import chainList from "../../Assets/ChainList";
// File Imports
import switchChain from "../../Utils/chainFunctions";
// Lib Imports
import { motion } from "framer-motion";

const DesktopMenu = () => {
  const { dark, setDarkTheme, theme } = useContext(ThemeContext);
  return (
    <HeaderWrapper>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
        <Header>
          <HeaderLeft />
          <HeaderRight>
            <span onClick={() => setDarkTheme()} className="themeButton">
              {dark === "True" ? (
                <svg className="darkModeSvg" xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20">
                  <path d="M10.917 19.167q-1.75 0 -3.282 -0.667 -1.531 -0.667 -2.666 -1.802Q3.833 15.563 3.167 14.031 2.5 12.5 2.5 10.75q0 -3.042 1.938 -5.365Q6.375 3.063 9.375 2.5q-0.375 2.063 0.229 4.031 0.604 1.969 2.083 3.448t3.448 2.083q1.968 0.604 4.031 0.229 -0.542 3 -2.875 4.938Q13.958 19.167 10.917 19.167Zm0 -1.667q1.833 0 3.396 -0.917t2.458 -2.521q-1.792 -0.167 -3.396 -0.906 -1.604 -0.74 -2.875 -2.011 -1.271 -1.271 -2.021 -2.875Q7.729 6.667 7.583 4.875 5.979 5.771 5.073 7.343 4.167 8.917 4.167 10.75q0 2.813 1.969 4.781Q8.104 17.5 10.917 17.5Zm-0.417 -6.354Z" />
                </svg>
              ) : (
                <svg className="lightModeSvg" xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20">
                  <path d="M10 12.5q1.042 0 1.771 -0.729T12.5 10q0 -1.042 -0.729 -1.771T10 7.5q-1.042 0 -1.771 0.729T7.5 10q0 1.042 0.729 1.771T10 12.5Zm0 1.667q-1.729 0 -2.948 -1.219Q5.833 11.729 5.833 10t1.219 -2.948Q8.271 5.833 10 5.833t2.948 1.218Q14.167 8.271 14.167 10q0 1.729 -1.218 2.948Q11.729 14.167 10 14.167ZM1.667 10.833q-0.354 0 -0.593 -0.24Q0.833 10.354 0.833 10t0.24 -0.594Q1.313 9.167 1.667 9.167h1.667q0.354 0 0.594 0.239Q4.167 9.646 4.167 10t-0.239 0.593Q3.688 10.833 3.333 10.833Zm15 0q-0.354 0 -0.593 -0.24Q15.833 10.354 15.833 10t0.24 -0.594Q16.313 9.167 16.667 9.167h1.667q0.354 0 0.593 0.239 0.24 0.24 0.24 0.594t-0.24 0.593Q18.688 10.833 18.333 10.833Zm-6.667 -6.667q-0.354 0 -0.593 -0.24Q9.167 3.688 9.167 3.333V1.667q0 -0.354 0.24 -0.594Q9.646 0.833 10 0.833t0.594 0.239Q10.833 1.313 10.833 1.667v1.667q0 0.354 -0.239 0.593Q10.354 4.167 10 4.167Zm0 15q-0.354 0 -0.593 -0.24Q9.167 18.688 9.167 18.333v-1.667q0 -0.354 0.24 -0.593Q9.646 15.833 10 15.833t0.594 0.24Q10.833 16.313 10.833 16.667v1.667q0 0.354 -0.239 0.593Q10.354 19.167 10 19.167ZM4.708 5.875 3.813 5q-0.25 -0.229 -0.24 -0.583 0.011 -0.354 0.24 -0.604 0.25 -0.25 0.604 -0.25t0.583 0.25L5.875 4.708q0.229 0.25 0.229 0.583 0 0.333 -0.229 0.583 -0.229 0.25 -0.573 0.239 -0.344 -0.01 -0.594 -0.239ZM15 16.188l-0.875 -0.896q-0.229 -0.25 -0.229 -0.593 0 -0.344 0.229 -0.573 0.229 -0.25 0.573 -0.239 0.343 0.01 0.593 0.239L16.188 15q0.25 0.229 0.24 0.583 -0.011 0.354 -0.24 0.604 -0.25 0.25 -0.604 0.25t-0.583 -0.25ZM14.125 5.875q-0.25 -0.229 -0.239 -0.573 0.01 -0.343 0.239 -0.593L15 3.813q0.229 -0.25 0.583 -0.24 0.354 0.011 0.604 0.24 0.25 0.25 0.25 0.604t-0.25 0.583L15.292 5.875q-0.25 0.229 -0.583 0.229 -0.333 0 -0.583 -0.229ZM3.813 16.188q-0.25 -0.25 -0.25 -0.604t0.25 -0.583l0.896 -0.875q0.25 -0.229 0.594 -0.229 0.343 0 0.573 0.229 0.25 0.229 0.24 0.573 -0.011 0.343 -0.24 0.593L5 16.188q-0.229 0.25 -0.583 0.239 -0.354 -0.01 -0.604 -0.239ZM10 10Z" />
                </svg>
              )}
              <style jsx>
                {`
                  .themeButton {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                  }
                  .themeButton svg {
                    cursor: pointer;
                  }
                  .darkModeSvg {
                    fill: ${theme.TextColor2};
                  }
                  .lightModeSvg {
                    fill: ${theme.TextColor2};
                  }
                `}
              </style>
            </span>
            <WalletConnectButton />
          </HeaderRight>
        </Header>
      </motion.div>
    </HeaderWrapper>
  );
};

//Header Wrapper
const HeaderWrapper = (props) => {
  return (
    <main>
      {props.children}
      <style jsx>
        {`
          main {
            top: 0;
            left: 0;
            width: 100%;
            transition: 0.2s;
          }
        `}
      </style>
    </main>
  );
};

//Header
const Header = (props) => {
  const { theme } = useContext(ThemeContext);
  return (
    <main id="header">
      {props.children}
      <style jsx>
        {`
          main {
            height: 6rem;
            margin: 0 auto;
            padding-right: 1rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 2rem;
            transition: 0.2s;
          }
        `}
      </style>
    </main>
  );
};

//Header Left
const HeaderLeft = () => {
  return <main></main>;
};

//Header Right
const HeaderRight = (props) => {
  return (
    <main>
      {props.children}
      <style jsx>
        {`
          main {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 2rem;
          }
        `}
      </style>
    </main>
  );
};

const WalletConnectButton = () => {
  const { theme } = useContext(ThemeContext);
  const { account, disconnectWalletHandler, chainId } = useContext(Web3Context);
  const { setShowWallet } = useContext(GlobalContext);
  const [chainIndex, setChainIndex] = useState(0);

  const findChainId = () => {
    for (let i = 0; i < chainList.length; i++) {
      if (chainList[i].id == chainId) {
        setChainIndex(i);
      }
    }
  };

  const walletClickHandler = () => {
    if (account) {
      disconnectWalletHandler();
    } else {
      setShowWallet(true);
    }
  };

  useEffect(() => {
    const walletButton = document.querySelector("#buttonName");
    if (account) {
      walletButton.innerText = `${account.slice(0, 2)}...${account.slice(-5, -1)}`;
    } else {
      walletButton.innerText = "Connect";
    }
  }, [account]);
  useEffect(() => {
    findChainId();
    if (chainId != 56) {
      switchChain(56);
    }
  }, [chainId]);

  return (
    <main>
      {chainIndex == 0 ? (
        <div id="chainWrapper">
          <div className="chainSvg">{chainList[0].svg}</div>
          <div className="chainName">{chainList[0].name}</div>
        </div>
      ) : (
        <div id="chainWrapper">
          <div className="chainSvg" style={{ border: ".2rem solid red", padding: ".2rem" }}>
            {chainList[chainList.length - 1].svg}
          </div>
          <div className="chainName">{chainList[chainList.length - 1].name}</div>
        </div>
      )}

      <div id="buttonName" onClick={walletClickHandler}>
        Connect
      </div>

      <style jsx>{`
        main {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: row;
          font-size: ${theme.FontSize};
          color: ${theme.TextColor};
          border-radius: ${theme.BorderRadius};
        }

        #chainWrapper {
          height: 3.5rem;
          background-color: ${theme.MainColor2};
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 0rem 1rem 0 1rem;
          gap: 1rem;
          border-top-left-radius: ${theme.BorderRadius};
          border-bottom-left-radius: ${theme.BorderRadius};
          transition: 0.2s;
        }

        .chainSvg {
          padding: 0.4rem;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: ${theme.MainColor};
          border-radius: 100rem;
          cursor: pointer;
        }
        .testnet {
          padding: 0.2rem;
          border: 0.2rem solid orange;
          background-color: ${theme.MainColor2};
        }

        #buttonName {
          width: 10rem;
          height: 3.5rem;
          background-color: ${theme.MainColor2};
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 0rem 1rem 0 1rem;
          border-top-right-radius: ${theme.BorderRadius};
          border-bottom-right-radius: ${theme.BorderRadius};
          transition: 0.2s;
          cursor: pointer;
        }

        #buttonName:hover {
          background-color: ${theme.HoverColor};
        }
      `}</style>
    </main>
  );
};

export default DesktopMenu;
