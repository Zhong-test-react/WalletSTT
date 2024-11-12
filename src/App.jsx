// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import SttPresale from './components/Navbar/SttPresale';
import sttCharts from './assets/images/token-charts.png';
import DistributionItem from './components/Navbar/DistributionItem';
import CloudThree from './assets/images/6125401561086673081.jpg';
import CloudOne from './assets/images/6125401561086673082.jpg';
import CloudTwo from './assets/images/6125401561086673083.jpg';
import TravelImage from './assets/images/6125401561086673071.png';
import RoadMap from './components/Navbar/RoadMap';
import Travelbanner from './components/Navbar/Travelbanner';

function App() {
  const RoadMapItems = [
    [
      'Private and Presales',
      'Launch NYP game platform,',
      'Community development'
    ],
    [
      'Reach 1 million users',
      'List STT token on exchanges',
      'start revenue sharing for community'
    ],
    [
      'secure brand partnerships',
      'Redeem product for travel',
      'Channel on YouTube'
    ]
  ];
  return (
    <div
    style={{
      backgroundImage: `url(${TravelImage})`,
      width:'100%',
      height:'800px',
      backgroundSize: 'cover', // Change to 'contain' if needed
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat', 
  }}

    >
    <div className="App w-full flex flex-col justify-center items-center">
      <Navbar />
      <div className="TravelBanner w-full flex justify-center max-md:flex-col p-8 md:p-10 gap-10">
        <Travelbanner />
        <SttPresale />
      </div>

      <div
        className="about flex flex-col items-center justify-center bg-white text-center space-y-3 md:space-y-6 pt-20 pb-20 lg:pb-32 px-6 max-sm:px-3"
        id="about"
      >
        <h1 className="text-fuchsia-500 font-extrabold text-3xl md:text-5xl font-Matemasie lg:text-6xl mb-10 lg:mb-20">
          Welcome To Smart Traveller Trips
        </h1>
        <p className="wendy-one-regular text-orange-700 text-xl md:text-3xl lg:text-4xl">
          Came and join the first Telegram smart travel platform
        </p>
        <p className="wendy-one-regular text-orange-700 text-xl md:text-3xl lg:text-4xl">
          We provide a way to let everyone have a travel dream come through
        </p>
        <p className="wendy-one-regular text-orange-700 text-xl md:text-3xl lg:text-4xl">
          It's easy and fund in the Telegram game
        </p>
      </div>
      <div
        className="flex flex-col justify-center items-center w-full bright-cyan"
        id="tokenomics"
      >
        <h1 className=" font-extrabold font-Matemasie text-4xl md:text-5xl lg:text-6xl tracking-wide text-shadow">
          Tokenomics
        </h1>
        {/* justify-center gap-20 lg:p-10 xl:p-20 xl:gap-40 lg:gap-20 items-center */}
        <div className="flex w-full justify-center items-center max-sm:flex-col max-md:px-8 px-16 max-sm:py-4 py-16 lg:gap-[120px] sm:gap-10 xl:gap-40">
          <div className="stt-charts max-sm:w-full max-sm:py-4 flex justify-center">
            <img
              src={sttCharts}
              alt=""
              className="max-sm:size-[calc(70%)] lg:size-[500px] sm:size-[320px]"
            ></img>
          </div>
          <div className="flex flex-col items-center">
            {/* Total Amount */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold bright-cyan mb-2 text-shadow">
              Total
            </h1>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-orange-400 text-mid-shadow">
              3,900,000,000
            </h2>

            {/* Distribution List */}
            <div className="mt-8 space-y-4 font-semibold">
              <DistributionItem
                color="orange"
                percentage="10%"
                label="Private Sales"
              />
              <DistributionItem
                color="green"
                percentage="30%"
                label="Presales"
              />
              <DistributionItem
                color="pink"
                percentage="10%"
                label="Liquidity"
              />
              <DistributionItem color="blue" percentage="10%" label="Team" />
              <DistributionItem
                color="red"
                percentage="40%"
                label="Community"
              />
            </div>
          </div>
        </div>
      </div>

      {/* RoadMap Page */}
      <RoadMap items={RoadMapItems} />
      {/* How to Buy */}
      <div
        className="flex flex-col items-center p-4 sm:p-8 lg:p-12"
        id="how-to-buy"
      >
        <h1 className="text-3xl md:text-4xl font-Matemasie lg:text-5xl font-extrabold text-orange-400 text-mid-shadow">
          How To Buy
        </h1>

        {/* Steps */}
        <div className="space-y-6 text-lg text-gray-800 py-8 md:py-12">
          {/* Step 1 */}
          <div className="flex items-start space-x-4">
            <img src={CloudOne} alt='' className="w-15 h-12 "></img>
            <div>
              <h2 className="wendy-one-regular font-extrabold text-xl md:text-2xl ">
                Connect Your Crypto Wallet
              </h2>
              <p className="font-semibold text-4 md:text-[20px] mt-2">
                Choose the network you'd like to use for purchasing STT—POL,
                BSC, or SOL. Click “Connect Wallet” and approve the contract
                with your wallet provider, which will open automatically.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex items-start space-x-4">
            <img src={CloudTwo} alt='' className="w-15 h-10"></img>

            <div>
              <h2 className="wendy-one-regular font-extrabold text-xl md:text-2xl">
                Select Token and Amount
              </h2>
              <p className="font-semibold text-4 md:text-[20px] mt-2">
                Choose your desired token and enter the amount you wish to
                purchase. We recommend a minimum purchase of $500.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex items-start space-x-4">
            <img src={CloudThree} alt='' className="w-15 h-10"></img>
            <div>
              <h2 className="wendy-one-regular font-extrabold text-xl md:text-2xl">
                Buy and Approve the Transaction
              </h2>
              <p className="font-semibold text-4 md:text-[20px] mt-2">
                Click “Buy Now” and follow the on-screen instructions from your
                wallet provider to approve the transaction. Please note, wallet
                approvals may take a few moments.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;
