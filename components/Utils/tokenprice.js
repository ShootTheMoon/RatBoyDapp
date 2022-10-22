import { pancakeSwapAbi } from "../../blockchain/abi/pancakeswap";
import { tokenAbi } from "../../blockchain/abi/token";
const Web3 = require("web3");

let pancakeSwapContract =
  "0x10ED43C718714eb63d5aA57B78B54704E256024E".toLowerCase();
async function calcSell(tokensToSell, tokenAddres) {
  const web3 = new Web3("https://bsc-dataseed1.binance.org");
  const BNBTokenAddress = "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c"; //BNB

  let tokenRouter = await new web3.eth.Contract(tokenAbi, tokenAddres);
  let tokenDecimals = await tokenRouter.methods.decimals().call();

  tokensToSell = setDecimals(tokensToSell, tokenDecimals);
  let amountOut;
  try {
    let router = await new web3.eth.Contract(
      pancakeSwapAbi,
      pancakeSwapContract
    );
    amountOut = await router.methods
      .getAmountsOut(tokensToSell, [tokenAddres, BNBTokenAddress])
      .call();
    amountOut = web3.utils.fromWei(amountOut[1]);
  } catch (error) {}

  if (!amountOut) return 0;
  return amountOut;
}
export async function calcBNBPrice() {
  const web3 = new Web3("https://bsc-dataseed1.binance.org");
  const BNBTokenAddress = "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c"; //BNB
  const USDTokenAddress = "0x55d398326f99059fF775485246999027B3197955"; //USDT
  let bnbToSell = web3.utils.toWei("1", "ether");
  let amountOut;
  try {
    let router = await new web3.eth.Contract(
      pancakeSwapAbi,
      pancakeSwapContract
    );
    amountOut = await router.methods
      .getAmountsOut(bnbToSell, [BNBTokenAddress, USDTokenAddress])
      .call();
    amountOut = web3.utils.fromWei(amountOut[1]);
  } catch (error) {}
  if (!amountOut) return 0;
  return amountOut;
}
function setDecimals(number, decimals) {
  number = number.toString();
  let numberAbs = number.split(".")[0];
  let numberDecimals = number.split(".")[1] ? number.split(".")[1] : "";
  while (numberDecimals.length < decimals) {
    numberDecimals += "0";
  }
  return numberAbs + numberDecimals;
}

export const tokenPrice = async (tokenAddress) => {
  const tokenAddres = tokenAddress;
  let bnbPrice = await calcBNBPrice();
  let tokens_to_sell = 1;
  let priceInBnb =
    (await calcSell(tokens_to_sell, tokenAddres)) / tokens_to_sell;
  let priceInUSD = priceInBnb * bnbPrice;
  return { priceInUSD, bnbPrice };
};
