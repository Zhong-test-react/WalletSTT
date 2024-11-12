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
        <button className="bg-blue-500 text-white py-2 px-4 rounded-xl hover:bg-blue-600 transition duration-200" onClick={onClick} disabled={loading}>
            {loading? "Loading...": label}
        </button>
    )
}