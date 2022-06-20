import React from 'react';
import Image from "next/image";
import crypto from "/public/crypto.svg"

function Dashboard() {
  return (
    <section className="container mx-auto p-2">
    <div className="flex justify-center gap-4 flex-wrap ">
      {/* col-1 */}
      <div className="border-2 rounded-lg border-purple-500 p-2">
        <div>
          <Image src={crypto} alt="image" />
        </div>
        <h2 className='my-2'>My NFT</h2>
        <p className='my-2'>My nft pratice code</p>
        <p className='my-2'>1.00 ETH</p>
        <button className="bg-purple-500 outline-none  text-white w-full">Buy NFT</button>
      </div>
      <div className="border-2 rounded-lg border-purple-500 p-2">
        <div>
          <Image src={crypto} alt="image" />
        </div>
        <h2 className='my-2'>My NFT</h2>
        <p className='my-2'>My nft pratice code</p>
        <p className='my-2'>1.00 ETH</p>
        <button className="bg-purple-500 outline-none  text-white w-full">Buy NFT</button>
      </div>
      <div className="border-2 rounded-lg border-purple-500 p-2">
        <div>
          <Image src={crypto} alt="image" />
        </div>
        <h2 className='my-2'>My NFT</h2>
        <p className='my-2'>My nft pratice code</p>
        <p className='my-2'>1.00 ETH</p>
        <button className="bg-purple-500 outline-none rounded-sm text-white w-full">Buy NFT</button>
      </div>

      <div className="border-2 rounded-lg  border-purple-500 p-2">
        <div>
          <Image src={crypto} alt="image" />
        </div>
        <h2 className='my-2'>My NFT</h2>
        <p className='my-2'>My nft pratice code</p>
        <p className='my-2'>1.00 ETH</p>
        <button className="bg-purple-500 text-white w-full">Buy NFT</button>
      </div>
      <div className="border-2 rounded-lg border-purple-500 p-2">
        <div>
          <Image src={crypto} alt="image" />
        </div>
        <h2 className='my-2'>My NFT</h2>
        <p className='my-2'>My nft pratice code</p>
        <p className='my-2'>1.00 ETH</p>
        <button className="bg-purple-500 text-white w-full">Buy NFT</button>
      </div>
      <div className="border-2 rounded-lg border-purple-500 p-2">
        <div>
          <Image src={crypto} alt="image" />
        </div>
        <h2 className='my-2'>My NFT</h2>
        <p className='my-2'>My nft pratice code</p>
        <p className='my-2'>1.00 ETH</p>
        <button className="bg-purple-500 text-white w-full">Buy NFT</button>
      </div>
    </div>
    
  </section>
  )
}

export default Dashboard