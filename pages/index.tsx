import { useEffect } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import crypto from "/public/crypto.svg";
import useMarket from "../web3/hooks/useMarket";
import { useNFTContext } from "../context/state";

const Home: NextPage = () => {
const {connected} = useNFTContext()
 const {nfts,isLoading,loadNfts,buyNFT} = useMarket()
 
 useEffect(() => {
 loadNfts()
 },[])
 
 if(!connected) return(
  <p>Connect wallet to access Dapp</p>
 )

 if(isLoading === true && !nfts.length) return(
  <h1>No item in marketPlace</h1>
 )
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
        <section className="container mx-auto p-2">
          <div className="grid grid-cols-4 gap-4 ">

            {
              nfts.map((item,i) =>{
                return (
                  <div key={i} className="border-2 rounded-lg border-purple-500 p-2">
              <div>
                <img src={item.image} alt="image"  />
              </div>
              <h2>{item.name}</h2>
              <p>{item.description}</p>
              <p>{item.price}</p>
              <button onClick={() => buyNFT(item)} className="bg-purple-500 outline-none  rounded-sm text-white w-full">Buy NFT</button>
            </div>
                )
              })
            }
            {/* col-1 */}
            {/* <div className="border-2 rounded-lg border-purple-500 p-2">
              <div>
                <Image src={crypto} alt="image" />
              </div>
              <h2>My NFT</h2>
              <p>My nft pratice code</p>
              <p>1.00 ETH</p>
              <button className="bg-purple-500 outline-none  rounded-sm text-white w-full">Buy NFT</button>
            </div> */}
            {/* <div className="border-2 rounded-lg border-purple-500 p-2">
              <div>
                <Image src={crypto} alt="image" />
              </div>
              <h2>My NFT</h2>
              <p>My nft pratice code</p>
              <p>1.00 ETH</p>
              <button className="bg-purple-500 outline-none  rounded-sm text-white w-full">Buy NFT</button>
            </div> */}
            {/* <div className="border-2 rounded-lg border-purple-500 p-2">
              <div>
                <Image src={crypto} alt="image" />
              </div>
              <h2>My NFT</h2>
              <p>My nft pratice code</p>
              <p>1.00 ETH</p>
              <button className="bg-purple-500 outline-none rounded-sm text-white w-full">Buy NFT</button>
            </div> */}

            {/* <div className="border-2 rounded-lg  border-purple-500 p-2">
              <div>
                <Image src={crypto} alt="image" />
              </div>
              <h2>My NFT</h2>
              <p>My nft pratice code</p>
              <p>1.00 ETH</p>
              <button className="bg-purple-500 text-white w-full">Buy NFT</button>
            </div> */}
            {/* <div className="border-2 rounded-lg border-purple-500 p-2">
              <div>
                <Image src={crypto} alt="image" />
              </div>
              <h2>My NFT</h2>
              <p>My nft pratice code</p>
              <p>1.00 ETH</p>
              <button className="bg-purple-500 text-white w-full">Buy NFT</button>
            </div> */}
            {/* <div className="border-2 rounded-lg border-purple-500 p-2">
              <div>
                <Image src={crypto} alt="image" />
              </div>
              <h2>My NFT</h2>
              <p>My nft pratice code</p>
              <p>1.00 ETH</p>
              <button className="bg-purple-500 text-white w-full">Buy NFT</button>
            </div> */}
          </div>
          
        </section>
    </div>
  );
};

export default Home;
