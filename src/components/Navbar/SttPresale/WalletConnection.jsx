import { Web3Button, Web3NetworkSwitch } from "@web3modal/react";
import CustomButton from "./CustomButton";
const WalletConnection = () => {
    return(
<div className="wallet-container flex flex-cols items-center justify-between p-4 bg-blue-400 rounded-lg shadow-lg">
  <Web3Button
    balance="show"
    icon="hide"
    label="Connect Wallet"
  />
  <Web3NetworkSwitch/>
  <CustomButton/>
</div>
    );
}
        
export default WalletConnection;
                            