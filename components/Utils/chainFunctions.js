//Switch to BSC Mainnet on MetaMask

async function switchChain(chainId) {
  try {
    await ethereum.request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId: `0x${chainId.toString(16)}` }],
    });
  } catch (switchError) {
    console.log(switchError);
  }
  // handle other "switch" errors
}

export default switchChain;
