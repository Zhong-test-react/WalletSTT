// import { ethers } from 'ethers';
// import { sttTokenABI } from './sttTokenABI';

// export async function getBalance(tokenAddress, userAddress) {
//     const provider = new ethers.providers.Web3Provider(window.ethereum);
//     const tokenContract = new ethers.Contract(tokenAddress, sttTokenABI, provider);
//     const balance = await tokenContract.balanceOf(userAddress);
//     return ethers.utils.formatUnits(balance, 18); // Adjust based on the token's decimals
// }

// export async function transferTokens(tokenAddress, amount, userAddress, presaleAddress) {
//     const provider = new ethers.providers.Web3Provider(window.ethereum);
//     const signer = provider.getSigner();
//     const tokenContract = new ethers.Contract(tokenAddress, sttTokenABI, signer);
//     const amountInWei = ethers.utils.parseUnits(amount.toString(), 18); // Adjust decimals accordingly
//     const tx = await tokenContract.transfer(presaleAddress, amountInWei);
//     await tx.wait();
//     console.log("Transfer successful:", tx.hash);
// }
