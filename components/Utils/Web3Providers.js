// React Imports
import { useEffect, useState, createContext, useContext } from "react";
// Lib Imports
import WalletConnectProvider from "@walletconnect/web3-provider";
import Web3 from "web3";
// File Imports
import { nftAbi } from "../../blockchain/abi/nft";
import { tokenAbi } from "../../blockchain/abi/token";
// Context Imports
import { GlobalContext } from "../../pages/_app";

export const Web3Context = createContext(null);

const Web3Providers = (props) => {
  const [web3, setWeb3] = useState(new Web3());
  const [chainId, setChainId] = useState(null);
  const [account, setAccount] = useState(null);

  const { setShowWallet } = useContext(GlobalContext);

  //Static token addresses
  const nativeTokenAddress = "0xe967574fb976804c6bac426dfbbcade5a18fdd9b".toLowerCase();
  const nftAddress = "0xfdaf8b95B931cC2b448b522a2c333509dB5738F5".toLowerCase();
  // Token contract initiation
  const tokenContract = new web3.eth.Contract(tokenAbi, nativeTokenAddress);
  const nftContract = new web3.eth.Contract(nftAbi, nftAddress);

  useEffect(() => {
    if (window.ethereum) {
      (async () => {
        const accounts = await window.ethereum.request({ method: "eth_accounts" });
        if (accounts.length) {
          setAccount(accounts[0]);
          window.ethereum.on("accountsChanged", (accounts) => {
            if (accounts.length > 0) {
              setAccount(accounts[0]);
            } else {
              setAccount(null);
            }
          });
        }
      })();

      window.ethereum.on("chainChanged", async (networkId) => {
        console.log("network changed:", networkId);
        setChainId(networkId);
      });

      setChainId(window.ethereum.networkVersion);
    }
    console.log(window.location.href);
  }, []);

  // Disconnect Wallet
  const disconnectWalletHandler = async () => {
    setAccount(null);
    // if (provider) {
    //   await provider.disconnect();
    //   setProvider(null);
    // }
  };

  //MetaMask wallet
  const connectMetaMaskWalletHandler = async () => {
    //Check if metamask is available
    if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
      try {
        if (window.ethereum) {
          await window.ethereum.request({ method: "eth_requestAccounts" });
          let web3 = new Web3(window.ethereum);

          //Get account address
          let addresses = await web3.eth.getAccounts();
          account = addresses[0];
          setShowWallet(false);

          //Check for accounts
          window.ethereum.on("accountsChanged", (accounts) => {
            if (accounts.length > 0) {
              setAccount(accounts[0]);
            } else {
              setAccount(null);
            }
          });
        } else {
          console.log("No wallet installed");
        }
      } catch (err) {
        console.log(err + "Error");
      }
      //If not then return "error"
    } else {
      window.open(`https://metamask.app.link/dapp/${window.location.href}`);
    }
    setWeb3(web3);
    setAccount(account.toLowerCase());
  };

  //Trust wallet
  const connectTrustWalletHandler = async () => {
    //Check if trust wallet is available
    if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
      try {
        if (window.ethereum) {
          await window.ethereum.request({ method: "eth_requestAccounts" });
          let web3 = new Web3(window.ethereum);

          //Get account address
          let addresses = await web3.eth.getAccounts();
          account = addresses[0];
          setShowWallet(false);

          //Check for accounts
          window.ethereum.on("accountsChanged", (accounts) => {
            if (accounts.length > 0) {
              setAccount(accounts[0]);
            } else {
              setAccount(null);
            }
          });
        } else {
          console.log("No wallet installed");
        }
      } catch (err) {
        console.log(err + "Error");
      }
    } else {
      window.open(`https://link.trustwallet.com/open_url?coin_id=1&url=${window.location.href}`);
    }
    setWeb3(web3);
    setAccount(account.toLowerCase());
  };

  //Coinbase wallet
  const connectCoinbaseWalletHandler = async () => {
    //Check if trust wallet is available
    if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
      try {
        if (window.ethereum) {
          await window.ethereum.request({ method: "eth_requestAccounts" });
          let web3 = new Web3(window.ethereum);

          //Get account address
          let addresses = await web3.eth.getAccounts();
          account = addresses[0];
          setShowWallet(false);

          //Check for accounts
          window.ethereum.on("accountsChanged", (accounts) => {
            if (accounts.length > 0) {
              setAccount(accounts[0]);
            } else {
              setAccount(null);
            }
          });
        } else {
          console.log("No wallet installed");
        }
      } catch (err) {
        console.log(err + "Error");
      }
    } else {
      window.open(`https://go.cb-w.com/dapp?cb_url=${window.location.href}`);
    }
    setWeb3(web3);
    setAccount(account.toLowerCase());
  };

  //WalletConnect connector
  const connectWalletConnectHandler = async () => {
    try {
      const provider = new WalletConnectProvider({
        rpc: {
          56: "https://bsc-dataseed.binance.org/",
        },
      });
      await provider.enable();
      setProvider(provider);

      provider.on("accountsChanged", (accounts) => {
        if (accounts.length > 0) {
          setAccount(accounts[0]);
        } else {
          setAccount(null);
        }
      });

      const web3 = new Web3(provider);
      const addresses = await web3.eth.getAccounts();
      account = addresses[0];

      if (web3 && addresses) {
        setShowWallet(false);
        setAccount(account.toLowerCase());
        setWeb3(web3);
        return { account, web3 };
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Web3Context.Provider value={{ connectCoinbaseWalletHandler, connectWalletConnectHandler, disconnectWalletHandler, chainId, tokenContract, nftContract, nativeTokenAddress, connectMetaMaskWalletHandler, connectTrustWalletHandler, setAccount, account }}>{props.children}</Web3Context.Provider>
  );
};

export default Web3Providers;
