// React imports
import { useContext } from "react";
// Lib imports
import { motion } from "framer-motion";
// Context Imports
import { ThemeContext, GlobalContext } from "../../../pages/_app";
import { Web3Context } from "../../Utils/Web3Providers";
// Component imports
import WalletWrapper from "./WalletWrapper";
// Asset Imports
import MetaMaskIcon from "../../../public/Images/Wallets/MetaMask.png";
import TrustWalletIcon from "../../../public/Images/Wallets/Trustwallet.png";
import WalletConnectIcon from "../../../public/Images/Wallets/WalletConnect.png";
import Coinbase from "../../../public/Images/Wallets/Coinbase.png";
import PlainButton from "../../Assets/Buttons/PlainButton";

const WalletConnect = () => {
  const { connectTrustWalletHandler, connectMetaMaskWalletHandler, connectCoinbaseWalletHandler, connectWalletConnectHandler } = useContext(Web3Context);
  const { setShowWallet } = useContext(GlobalContext);
  const { theme } = useContext(ThemeContext);

  const walletConnect = async () => {
    const wallet = await connectWalletConnectHandler();
    document.getElementsByClassName("walletconnect-modal__base").style.fontSize = "3rem";
  };

  const animations = {
    background: {
      hidden: {
        opacity: 0,
      },
      visible: {
        opacity: 1,
      },
      exit: {
        opacity: 0,
      },
    },
    modal: {
      hidden: {
        scale: 0.5,
        opacity: 0,
      },
      visible: {
        scale: 1,
        opacity: 1,
        transition: {
          delay: 0.1,
        },
      },
      exit: {
        scale: 0.5,
        opacity: 0,
        transition: {
          scale: {
            delay: 0.1,
          },
        },
      },
    },
    wallets: {
      hidden: {
        opacity: 0,
      },
      visible: {
        opacity: 1,
        transition: {
          delay: 0.2,
        },
      },
      exit: {
        opacity: 0,
      },
    },
  };

  const wallets = [
    {
      id: "MetaMask",
      img: MetaMaskIcon,
      height: 35,
      width: 35,
      function: () => connectMetaMaskWalletHandler(),
    },
    {
      id: "Trust Wallet",
      img: TrustWalletIcon,
      height: 35,
      width: 35,
      function: () => connectTrustWalletHandler(),
    },
    {
      id: "Coinbase",
      img: Coinbase,
      height: 35,
      width: 35,
      function: () => connectCoinbaseWalletHandler(),
    },
    {
      id: "Wallet Connect",
      img: WalletConnectIcon,
      height: 35,
      width: 35,
      function: () => walletConnect(),
    },
  ];

  return (
    <motion.div variants={animations.background} style={{ position: "relative", zIndex: "100000" }} initial="hidden" animate="visible" exit="exit">
      <main onClick={() => setShowWallet(false)}>
        <motion.div variants={animations.modal} initial="hidden" animate="visible" exit="exit" onClick={(e) => e.stopPropagation()}>
          <div className="popupWrapper">
            <div className="popupHeader">
              <h2>Select your wallet</h2>
            </div>
            <div className="walletsBackground">
              <motion.div variants={animations.wallets} initial="hidden" animate="visible" exit="exit">
                <div className="wallets">
                  {wallets.map((wallet, i) => {
                    return (
                      <motion.div key={wallet.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25 + 0.1 * (i + 1) }}>
                        <WalletWrapper name={wallet.id} img={wallet.img} height={wallet.height} width={wallet.width} function={wallet.function} />
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            </div>
            <div className="popupFooter">
              <PlainButton buttonHeight={35} buttonWidth={70} function={() => setShowWallet(false)}>
                Close
              </PlainButton>
            </div>
          </div>
        </motion.div>
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
              background-color: ${theme.MainColor2};
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
              background-color: ${theme.MainColor2};
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
              background-color: ${theme.MainColor2};
              border-bottom-left-radius: ${theme.BorderRadius};
              border-bottom-right-radius: ${theme.BorderRadius};
            }

            .popupHeader > h2 {
              font-size: 2rem;
              font-weight: 600;
            }

            .walletsBackground {
              margin-top: 2rem;
            }

            .wallets {
              display: grid;
              grid-template-columns: 1fr 1fr;
              justify-items: center;
              align-items: center;
              text-align: center;
              gap: 1rem;
              padding: 0 1rem;
            }
          `}
        </style>
      </main>
    </motion.div>
  );
};

export default WalletConnect;
