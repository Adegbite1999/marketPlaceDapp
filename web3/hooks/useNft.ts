import { Contract, ethers, providers, Signer } from "ethers";
import {useEffect, useRef,useCallback, useState} from "react"
import { useNFTContext } from "../../context/state";
import { nftAddress, rpc_url,marketPlace } from "../constant";
import { getNft } from "../contractFactory";


const useNFT = () =>{
const signer:any = useRef()
const provider:any = useRef()
const contract:any = useRef()

const {connected} = useNFTContext()
// const [nfts, setNFTs] = useState([])
// const [isLoading, setIsLoading] = useState(false)

useEffect(() =>{
    if(connected){
        const provider = new ethers.providers.Web3Provider((window as any).ethereum);
        signer.current = provider.getSigner()
    }else{
        provider.current = new ethers.providers.JsonRpcProvider(rpc_url)
    }
    init()

},[connected])


const init = useCallback(() =>{
 contract.current =   getNft(nftAddress, signer.current || provider.current)
},[])

// const create

return{
// helo
}
    
} 


export default useNFT;