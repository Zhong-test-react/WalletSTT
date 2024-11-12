import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum';
import { Web3Modal } from '@web3modal/react';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import { mainnet, optimism, bsc, polygon  } from 'wagmi/chains';

const projectId = 'e5861cfd07b24b794b5908c980ac9ccd';
const chains = [mainnet, polygon, bsc, optimism];
const { publicClient } = configureChains(chains, [w3mProvider({ projectId })]);
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ chains, projectId }),
  publicClient,
});
const ethereumClient = new EthereumClient(wagmiConfig, chains);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  
  <React.StrictMode>
    <WagmiConfig config={wagmiConfig}>
    <App />
    </WagmiConfig>
    <Web3Modal projectId={projectId} ethereumClient={ethereumClient}/>
   </React.StrictMode>
);


