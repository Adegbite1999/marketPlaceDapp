import marketPlaceAbi from "./abi/marketPlace.json";
import nftAbi from "./abi/nft.json";
import { ethers } from "ethers";

export const getMarketPlace = (address: string, signerOrProvider: any) => {
  return new ethers.Contract(address, marketPlaceAbi, signerOrProvider);
};

export const getNft = (address: string, signerOrProvider: any) => {
  return new ethers.Contract(address, nftAbi, signerOrProvider);
};
