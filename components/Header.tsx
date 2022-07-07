import React, { useState, useEffect } from "react";
import { useNFTContext } from "../context/state";
import { navLink } from "../static/data";
import { addressShortner } from "../web3/helpers";
import web3Connector from "../web3/walletConnect";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useNFT from "../web3/hooks/useNft";
declare let window: any;
function Header() {
  const {
    connectWallet,
    eagerConnect,
    handleAccountChanged,
    handleChainChanged,
  } = web3Connector();
  const { connected, account, setMetamaskPresent } = useNFTContext();

  // const {helo} = useNFT()
  
  useEffect(() => {
    if (!window.ethereum) {
      setMetamaskPresent(false);
      return;
    }
    const account = localStorage.getItem("address");
    if (account) {
      eagerConnect();
    }
    window.ethereum.on("connect", eagerConnect);
    window.ethereum.on("accountsChanged", handleAccountChanged);
    window.ethereum.on("chainChanged", handleChainChanged);
    // helo()
  }, [eagerConnect, handleAccountChanged, handleChainChanged]);

  return (
    // <header> 
    <nav className="bg-purple-500 flex items-center justify-between p-4">
            <ToastContainer />
      <ul className="flex space-x-12 items-center">
        {navLink.map((nav, idx) => {
          return (
            <li className="text-white capitalize" key={idx}>
              <a href={nav.link}>{nav.value}</a>
            </li>
          );
        })}
      </ul>
      <div>
        {
          connected ? <p className="text-gray-300">{addressShortner(account,account)}</p> : <button onClick={connectWallet} className="text-white border-2 p-2 bg-transparent pl-4 pr-4">
          Connect Wallet
        </button>
        }
        
      </div>
    </nav>
    // </header>
  );
}

export default Header;
