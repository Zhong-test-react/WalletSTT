import { Web3Button, Web3NetworkSwitch } from "@web3modal/react";
import CustomButton from "./CustomButton";
const WalletConnection = () => {
    return(
<div className="wallet-container flex flex-col md:flex-row items-center justify-between p-4 bg-blue-400 rounded-lg shadow-lg space-y-4 md:space-y-0 md:space-x-4">
  <Web3Button
    balance="show"
    icon="show"
    label="Connect Wallet"
    className="w-full md:w-auto"
  />
  <Web3NetworkSwitch className="w-full md:w-auto" />
  <CustomButton className="w-full md:w-auto" />
</div>
    );
}
        
export default WalletConnection;
                            