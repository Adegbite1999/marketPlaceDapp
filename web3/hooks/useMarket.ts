import { useState } from "react";
import { ethers } from "ethers";
import { useEffect, useRef, useCallback, useContext } from "react";
import NFTContextProvider, {
  NFTContext,
  useNFTContext,
} from "../../context/state";
import { rpc_url, marketPlace, nftAddress } from "../constant";
import { getMarketPlace, getNft } from "../contractFactory";
import axios from "axios";

const useMarket = () => {
  const signer: any = useRef();
  const provider: any = useRef();
  const contract: any = useRef();
  const nft:any = useRef();

  const { connected } = useNFTContext();
  const [nfts, setNFTs] = useState<Array<any>>([]);
  const [isLoading, setIsLoading] = useState(false);
  // const {isLoading} = useContext(NFTContext)
  useEffect(() => {
    if (connected) {
      const provider = new ethers.providers.Web3Provider(
        (window as any).ethereum
      );
      signer.current = provider.getSigner();
    } else {
      provider.current = new ethers.providers.JsonRpcProvider(rpc_url);
    }
    init();
  }, [connected]);


  const init = useCallback(() => {
    contract.current = getMarketPlace(
      marketPlace,
      signer.current || provider.current
    );
    nft.current = getNft(
      nftAddress,
      signer.current || provider.current
    );
  }, []);

  const loadNfts = useCallback(async () => {
    const tokenContract = getNft(
      nftAddress,
      signer.current || provider.current
    );
    const marketContract = getMarketPlace(
      marketPlace,
      signer.current || provider.current
    );
    const data = await marketContract.fetchMarketItems();
    const items = await Promise.all(
      data?.map(async (item: any) => {
        const tokenUri = await tokenContract.tokenURI(item.tokenId);
        const meta = await axios.get(tokenUri);
        let price = ethers.utils.formatUnits(item.price.toString(), "ether");
        let itemData = {
          price,
          tokenId: item.tokenId.toNumber(),
          seller: item.seller,
          owner: item.owner,
          image: meta.data.image,
          name: meta.data.name,
          description: meta.data.description,
        };
        return itemData;
      })
    );
    setNFTs(items);
    setIsLoading(true);
  }, []);

  const buyNFT = (nft:any) => useCallback(async() =>{
    const contract =  getMarketPlace(marketPlace,signer.current)
    let price = ethers.utils.formatUnits(nft.price.toString(), "ether");
    const txn = await contract.createMarketSale(nftAddress,nft.tokenId, {
        value:price
    })
    await txn.wait()
    loadNfts()

  },[])


  // const createSales = useCallback(async(url:any, callback:any) =>{
  //   try {
  //    await contract.current.createToken(url)
  //       .then(callback)
  //       .catch(callback)
     
  //   } catch (error) {
  //     console.error(error)
  //   }
  // },[])

  // const price = useCallback(async(callback:any) =>{
  //   try {
  //    await nft.current.listingPrice()
  //       .then(callback)
  //       .catch(callback)
     
  //   } catch (error) {
  //     console.error(error)
  //   }
  // },[])

  return {
    loadNfts,
    nfts,
    isLoading,
    buyNFT,
    // createSales,
    // price
  };
};

export default useMarket;
