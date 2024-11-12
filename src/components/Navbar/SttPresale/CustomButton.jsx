import { useWeb3Modal } from "@web3modal/react";
import { useState } from "react";
import { useAccount, useDisconnect } from "wagmi";

export default function CustomButton(){
    const [loading, setLoading]=useState(false);
    const {open}=useWeb3Modal();
    const{isConnected}=useAccount();
    const {disconnect}=useDisconnect();
    const label=isConnected? "Disconnect":"Custom";
    async function onOpen(){
        setLoading(true);
        await open();
        setLoading(false);
    }

    function onClick(){
        if(isConnected){
            disconnect();
        }else{
            onOpen();
        }
    }
    
    return(
        <button className="wendy-one-regular bg-yellow-600 text-white py-2 px-2 rounded-xl hover:bg-yellow-700 transition duration-200" onClick={onClick} disabled={loading}>
            {loading? "Loading...": label}
        </button>
    )
}