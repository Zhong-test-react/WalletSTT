import Header from './SttPresale/Header';
import Progress from './SttPresale/Progress';
import PaymentInput from './SttPresale/PaymentInput';
import WalletConnection from './SttPresale/WalletConnection';
import ReferralSection from './SttPresale/ReferralSection';
import MegaMenu from './MegaMenu';
// import { TokenTransfer } from './SttPresale/TokenTransfer';
function SttPresale(){
    return(
       
        <div className="w-full border-8 border-white-400 md:w-1/3 md:min-w-[456px] p-10 md:my-20 bg-yellow-500 rounded-3xl shadow-2xl">
            <Header/>
            <Progress/>
            <PaymentInput/>
            {/* <TokenTransfer/> */}
            <WalletConnection/>
            <ReferralSection/>
        </div>
        

    );
    
}

export default SttPresale;