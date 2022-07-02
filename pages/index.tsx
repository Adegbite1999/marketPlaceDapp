import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import styles from "../styles/Home.module.css";
import crypto from "/public/crypto.svg";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Header /> */}
      
        <section className="container mx-auto p-2">
          <div className="flex justify-center gap-4 flex-wrap ">
            {/* col-1 */}
            <div className="border-2 rounded-lg border-purple-500 p-2">
              <div>
                <Image src={crypto} alt="image" />
              </div>
              <h2>My NFT</h2>
              <p>My nft pratice code</p>
              <p>1.00 ETH</p>
              <button className="bg-purple-500 outline-none  rounded-sm text-white w-full">Buy NFT</button>
            </div>
            <div className="border-2 rounded-lg border-purple-500 p-2">
              <div>
                <Image src={crypto} alt="image" />
              </div>
              <h2>My NFT</h2>
              <p>My nft pratice code</p>
              <p>1.00 ETH</p>
              <button className="bg-purple-500 outline-none  rounded-sm text-white w-full">Buy NFT</button>
            </div>
            <div className="border-2 rounded-lg border-purple-500 p-2">
              <div>
                <Image src={crypto} alt="image" />
              </div>
              <h2>My NFT</h2>
              <p>My nft pratice code</p>
              <p>1.00 ETH</p>
              <button className="bg-purple-500 outline-none rounded-sm text-white w-full">Buy NFT</button>
            </div>

            <div className="border-2 rounded-lg  border-purple-500 p-2">
              <div>
                <Image src={crypto} alt="image" />
              </div>
              <h2>My NFT</h2>
              <p>My nft pratice code</p>
              <p>1.00 ETH</p>
              <button className="bg-purple-500 text-white w-full">Buy NFT</button>
            </div>
            <div className="border-2 rounded-lg border-purple-500 p-2">
              <div>
                <Image src={crypto} alt="image" />
              </div>
              <h2>My NFT</h2>
              <p>My nft pratice code</p>
              <p>1.00 ETH</p>
              <button className="bg-purple-500 text-white w-full">Buy NFT</button>
            </div>
            <div className="border-2 rounded-lg border-purple-500 p-2">
              <div>
                <Image src={crypto} alt="image" />
              </div>
              <h2>My NFT</h2>
              <p>My nft pratice code</p>
              <p>1.00 ETH</p>
              <button className="bg-purple-500 text-white w-full">Buy NFT</button>
            </div>
          </div>
          
        </section>
    </div>
  );
};

export default Home;
