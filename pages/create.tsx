import React, { useState } from 'react';
import { create as ipfsHttpClient } from "ipfs-http-client";
import {useRouter} from "next/router"
import useMarket from '../web3/hooks/useMarket';
import { ethers } from 'ethers';
import { marketPlace, nftAddress } from '../web3/constant';
import nftAbi from "../web3/abi/nft.json"
import marketPlaceAbi from "../web3/abi/marketPlace.json";
const client = ipfsHttpClient({url:"https://ipfs.infura.io:5001/api/v0"}); 

function create() {
    const [fileUrl, setFileUrl] = useState("")
    const [formInput, setFormInput] = useState({price:"", name:"", description:""})
    const router = useRouter()

    const onChange = async(e:any) =>{
        const file = e.target.files[0]
        try {
            const added = await client.add(file,{
                progress:(prog) => console.log(`received ${prog}`) 
            })
            console.log(added)
            const url = `https://ipfs.infura.io/ipfs/${added.path}`
            setFileUrl(url)
        } catch (error) {
            console.error(error)
        }
    }

    

    const uploadToIpfs = async() =>{
        const {name, description, price} = formInput
        if(!name || !description || !price|| !fileUrl)return;
        const data = JSON.stringify({
            name,description, image:fileUrl
        })
        try {
            const added = await client.add(data)
            const url = `https://ipfs.infura.io/ipfs/${added.path}`
            return url
        } catch (error) {
            console.error(error)
        }
    }

    const createSale = async (e:any) =>{
        e.preventDefault()
    const url = await uploadToIpfs()
    const provider = new ethers.providers.Web3Provider((window as any).ethereum)
    const signer = provider.getSigner()
    let contract = new ethers.Contract(nftAddress,nftAbi,signer)
    let transaction = await contract.createToken(url)
    let txn = await transaction.wait()

    let event = txn.events[0]
    let value = event.args[2]
    let tokenId = value.toNumber()


    const price = ethers.utils.parseUnits(formInput.price, 'ether')

    contract = new ethers.Contract(marketPlace, marketPlaceAbi,signer)
    let listingPrice = await contract.listingPrice()
    listingPrice = listingPrice.toString()

    transaction = await contract.createMarketItem(
        nftAddress,tokenId,price, {value:listingPrice}
    )

    await transaction.wait()

    router.push('/')
    
    }
   return (
    <section className='w-1/2 mx-auto my-8'>
        <form >
            <div className='mb-4'>
                <label className='text-sm font-semibold block mb-2 capitalize text-gray-500' htmlFor='name'>name</label>
                <input onChange={(e) =>setFormInput({...formInput, name:e.target.value})} className='outline-none p-2 rounded-sm border-none w-full bg-gray-300' type="text" id='name'/>
            </div>
            <div className='mb-4'>
                <label className='text-sm font-semibold block mb-2 capitalize text-gray-500' htmlFor='description'>description</label>
                <input onChange={(e) =>setFormInput({...formInput, description:e.target.value})} className='outline-none p-2 rounded-sm border-none w-full bg-gray-300 ' type="text" id='description'/>
            </div>
            <div className='mb-4'>
                <label className='text-sm font-semibold block mb-2 capitalize text-gray-500' htmlFor='price'>price</label>
                <input onChange={(e) =>setFormInput({...formInput, price:e.target.value})} className='outline-none p-2 rounded-sm border-none w-full bg-gray-300' type="number" id='price'/>
            </div>
            <div className='mb-4'>
                <label className='text-sm font-semibold block mb-2 capitalize text-gray-500' htmlFor='file'>upload nft</label>
                <input onChange={onChange} type="file" id='file'/>
                {fileUrl && <img className="rounded mt-4" width="350" src={fileUrl} />}
            </div>
            <button onClick={createSale} className='bg-purple-500 w-full p-2 rounded-sm text-white font-semibold capitalize'>create digital assets</button>
        </form>
    </section>
  )
}

export default create