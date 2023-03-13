

import React from "react"
import { WagmiConfig, createClient, configureChains, mainnet } from 'wagmi'
 
import { alchemyProvider } from 'wagmi/providers/alchemy'
import { publicProvider } from 'wagmi/providers/public'
 
import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet'
import { InjectedConnector } from 'wagmi/connectors/injected'
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'
import Profile from "./profile"
import { Buffer } from "buffer";



Buffer.from("anything", "base64");
window.Buffer = window.Buffer || require("buffer").Buffer;


// Configure chains & providers with the Alchemy provider.
// Two popular providers are Alchemy (alchemy.com) and Infura (infura.io)
const { chains, provider, webSocketProvider } = configureChains(
  [mainnet],
  [alchemyProvider({ apiKey: 'xdJshcXM2l0-9WZ43VdIO0hNsPrfqu4v' }), publicProvider()],
)
 
// Set up client
const client = createClient({
  autoConnect: true,
  connectors: [
    new MetaMaskConnector({
      chains,
    
      options: {
        appName: 'Metamask',
        appSub: 'Using your browser extension',
        imageIcon:'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/MetaMask_Fox.svg/1200px-MetaMask_Fox.svg.png'
      }, 
    
    }),
    new CoinbaseWalletConnector({
      chains,
      options: {
        appName: 'Coinbase Wallet',
        appSub: 'Using your mobile or browser extension',
        imageIcon:'https://cdn6.aptoide.com/imgs/0/b/6/0b619167f601e6355364c4f63f0ca166_icon.png'
      },
    }),
    new WalletConnectConnector({
      chains,

      options: {
        qrcode: true,
        appName: 'Wallet Connect',
        appSub: 'Using a mobile wallet',
        imageIcon:'https://seeklogo.com/images/W/walletconnect-logo-EE83B50C97-seeklogo.com.png'
      },


    }),
  
  /*
    new InjectedConnector({
      chains,
      options: {
        name: 'Injected',
        shimDisconnect: true,
      },
    }),

*/

  ],
  provider,
  webSocketProvider,
})
 


const Header = () => {
  

  
 


  return (
    <>
      
      <WagmiConfig client={client}>
      <Profile />
    </WagmiConfig>


    </>
 )


}


export default Header













{/*

import { WagmiConfig, createClient, configureChains, mainnet } from 'wagmi'
 
import { alchemyProvider } from 'wagmi/providers/alchemy'
import { publicProvider } from 'wagmi/providers/public'
 
import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet'
import { InjectedConnector } from 'wagmi/connectors/injected'
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'
 
import Profile from "./profile"
import { Buffer } from "buffer";



Buffer.from("anything", "base64");
window.Buffer = window.Buffer || require("buffer").Buffer;




// Configure chains & providers with the Alchemy provider.
// Two popular providers are Alchemy (alchemy.com) and Infura (infura.io)
const { chains, provider, webSocketProvider } = configureChains(
  [mainnet],
  [alchemyProvider({ apiKey: 'xdJshcXM2l0-9WZ43VdIO0hNsPrfqu4v' }), publicProvider()],
)
 
// Set up client
const client = createClient({
  autoConnect: true,
  connectors: [
    new MetaMaskConnector({ chains }),
    new CoinbaseWalletConnector({
      chains,
      options: {
        appName: 'wagmi',
      },
    }),
    new WalletConnectConnector({
      chains,
      options: {
        qrcode: true,
      },
    }),
    new InjectedConnector({
      chains,
      options: {
        name: 'Injected',
        shimDisconnect: true,
      },
    }),
  ],
  provider,
  webSocketProvider,
})
 
// Pass client to React Context Provider
function Header() {
  return (
    <WagmiConfig client={client}>
      <Profile />


    </WagmiConfig>
  )
}



export default Header


*/}
