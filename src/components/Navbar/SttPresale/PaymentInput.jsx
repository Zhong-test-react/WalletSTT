import React, { useState, useEffect} from 'react'; 
// import { UniswapWidget } from '@uniswap/widgets';
import axios from 'axios';
// import { getBalance, approveTransfer, transferTokens, hasSufficientBalance } from './TokenTransfer';
import { ethers } from 'ethers';
import { useWeb3Modal } from '@web3modal/react';
import { useAccount } from 'wagmi';
import { Button } from 'react-scroll';
// import { TokenTransfer } from './TokenTransfer';


const TOKEN_LIST = [
    { id: 'tether', name: 'Tether', symbol: 'USDT', icon: 'https://assets.coingecko.com/coins/images/325/large/Tether-logo.png' },
    { id: 'ethereum', name: 'Ethereum', symbol: 'ETH', icon: 'https://assets.coingecko.com/coins/images/279/large/ethereum.png' },
    { id: 'usd-coin', name: 'USD Coin', symbol: 'USDC', icon: 'https://assets.coingecko.com/coins/images/6319/large/USD_Coin_icon.png' },
    { id: 'binancecoin', name: 'Binance Coin', symbol: 'BNB', icon: 'https://assets.coingecko.com/coins/images/825/standard/bnb-icon2_2x.png' },
    { id: 'matic-network', name: 'Polygon', symbol: 'MATIC', icon: 'https://assets.coingecko.com/coins/images/4713/standard/polygon.png' },
    { id: 'ripple', name: 'XRP', symbol: 'XRP', icon: 'https://assets.coingecko.com/coins/images/44/standard/xrp-symbol-white-128.png' },
    { id: 'cardano', name: 'Cardano', symbol: 'ADA', icon: 'https://assets.coingecko.com/coins/images/975/large/cardano.png' },
    { id: 'solana', name: 'Solana', symbol: 'SOL', icon: 'https://assets.coingecko.com/coins/images/4128/large/solana.png' },
    { id: 'litecoin', name: 'Litecoin', symbol: 'LTC', icon: 'https://assets.coingecko.com/coins/images/2/large/litecoin.png' },
    { id: 'chainlink', name: 'Chainlink', symbol: 'LINK', icon: 'https://assets.coingecko.com/coins/images/877/standard/chainlink-new-logo.png' },
    { id: 'polkadot', name: 'Polkadot', symbol: 'DOT', icon: 'https://static.coingecko.com/s/polkadot-73b0c058cae10a2f076a82dcade5cbe38601fad05d5e6211188f09eb96fa4617.gif' },
    { id: 'dogecoin', name: 'Dogecoin', symbol: 'DOGE', icon: 'https://assets.coingecko.com/coins/images/5/large/dogecoin.png' },
    { id: 'uniswap', name: 'Uniswap', symbol: 'UNI', icon: 'https://assets.coingecko.com/coins/images/12504/large/uniswap-uni.png' },
    { id: 'shiba-inu', name: 'Shiba Inu', symbol: 'SHIB', icon: 'https://assets.coingecko.com/coins/images/11939/large/shiba.png' },
];

export default function PaymentInput({ walletAddress }) {
    const { open } = useWeb3Modal();
    const { isConnected } = useAccount();
    const [payAmount, setPayAmount] = useState('');
    const [selectedToken, setSelectedToken] = useState('tether'); // Default to USDT
    const [tokenPrice, setTokenPrice] = useState(0);
    const [receiveAmount, setReceiveAmount] = useState(0);
    const [searchTerm, setSearchTerm] = useState('');
    const [dropdownOpen, setDropdownOpen] = useState(false);
    // const [buttonText, setButtonText]=useState("Please select token you have");

    // Fetch real-time price of selected token
    useEffect(() => {
        const fetchTokenPrice = async () => {
            if (!selectedToken) return;

            try {
                const response = await axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=${selectedToken}&vs_currencies=usd`);
                setTokenPrice(response.data[selectedToken]?.usd || 0);
            } catch (error) {
                console.error("Error fetching token price:", error);
            }
        };
        fetchTokenPrice();
    }, [selectedToken]);

    // Calculate how many Stt tokens the user will receive based on the selected token's price
    useEffect(() => {
        if (payAmount && tokenPrice > 0) {
            const usdAmount = parseFloat(payAmount) * tokenPrice; // Total USD value
            const calculatedReceiveAmount = usdAmount / 0.1; // Since each Stt token costs $0.1
            setReceiveAmount(calculatedReceiveAmount);
        } else {
            setReceiveAmount(0);
        }
    }, [payAmount, tokenPrice]);

    const handleTokenChange = (tokenId) => {
        setSelectedToken(tokenId);
        setDropdownOpen(false);
    };

    const handleAmountChange = (e) => setPayAmount(e.target.value);
    const handleSearchChange = (e) => setSearchTerm(e.target.value);
    const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

    const handleBuyNow = async () => {
        if (!isConnected) {
            open(); // Connect wallet if not connected
            return;
        }

        // await TokenTransfer(selectedToken, payAmount, walletAddress, '0x17fb6Cb0AB58aa070FCFf836569F063AEBba66e2', receiveAmount);

        try {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const tx = await signer.sendTransaction({
                to: walletAddress,
                value: ethers.utils.parseUnits(payAmount.toString(), 18) // Ensure the amount is in the correct decimal format
            });
            console.log("Transaction hash:", tx.hash);
        } catch (error) {
            console.error("Transaction error:", error);
        }
    };

    // Filter available tokens based on search term
    const filteredTokens = TOKEN_LIST.filter(token =>
        token.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
        token.symbol.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className=" mx-auto bg-blue-400 border border-yellow-300 p-6 rounded-lg shadow-lg">
            <div className="mb-4">
                <label className="wendy-one-regular block text-gray-800 font-bold mb-2">Search Token</label>
                <input
                    type="text"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    className="w-full border rounded-full p-2"
                    placeholder="Search for a token..."
                />
            </div>

            <div className="mb-4 relative">
                <label className="wendy-one-regular block text-gray-800 font-bold mb-2">Select Payment</label>
                <div onClick={toggleDropdown} className="border rounded-full p-2 cursor-pointer">
                    {TOKEN_LIST.find(token => token.id === selectedToken)?.name} ({TOKEN_LIST.find(token => token.id === selectedToken)?.symbol.toUpperCase()})
                </div>
                {dropdownOpen && (
                    <ul className="absolute z-10 bg-white border border-gray-300 rounded-2xl mt-1 w-full max-h-60 overflow-auto">
                        {filteredTokens.map(token => (
                            <li key={token.id} onClick={() => handleTokenChange(token.id)} className="flex items-center p-2 hover:bg-gray-200 cursor-pointer">
                                <img src={token.icon} alt={`${token.name} icon`} className="w-6 h-6 mr-2" />
                                <span>{token.name} ({token.symbol.toUpperCase()})</span>
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            <div className="mb-4">
                <label className="wendy-one-regular block text-gray-800 font-bold mb-2">You Pay</label>
                <input
                    type="number"
                    value={payAmount}
                    onChange={handleAmountChange}
                    className="w-full border rounded-full p-2 text-center text-xl"
                    placeholder="0"
                    // min={0}
                />
            </div>

            <div className="mb-4">
                <label className="wendy-one-regular block text-gray-800 font-bold mb-2">You Receive</label>
                <input
                    type="number"
                    value={receiveAmount.toFixed(2)}
                    disabled
                    className="w-full border rounded-full p-2 bg-gray-100 text-center text-xl"
                />
            </div>

            <div className="mb-4">
                <label className="wendy-one-regular block text-gray-800 font-bold mb-2">Selected Token Price</label>
                <input
                    type="text"
                    value={`$${tokenPrice.toFixed(2)}`}
                    disabled
                    className="w-full border rounded-full p-2 bg-gray-100 text-center text-xl"
                />
            </div>

            <Button
                onClick={handleBuyNow}
                className="wendy-one-regular w-full bg-green-500 text-white p-3 mt-4 rounded-full hover:bg-green-600 disabled:bg-gray-500"
                disabled={!payAmount || payAmount <= 0 || !isConnected}
            >
                {isConnected ? 'Buy Now' : 'Please connect your wallet first...'}
            </Button>
        </div>
    );
}
