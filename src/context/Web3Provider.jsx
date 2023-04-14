import Web3 from "web3";
import { Web3Context } from "./Web3Context";
import { useState } from "react";

export const Web3Provider = ({ children }) => {

    const [web3, setWeb3] = useState( null );
    const [user, setUser] = useState( {} );

    const connectWeb3 = async() => {
        if( window.ethereum ) {
            await window.ethereum.request({method: 'eth_requestAccounts'});
            window.web3 = new Web3(window.ethereum);
            
            setWeb3(window.web3);    
            console.log( web3 );
    
            const accounts = await web3.eth.getAccounts().catch( err => console.log( err) );
            setUser({ 
                address: accounts[0] 
            });

            console.log('Account', accounts[0]);
        }else{
            console.log('Install Metamask');
        }
    };

    return (
        <Web3Context.Provider value={ { connectWeb3, user, web3 } }>
            { children }
        </Web3Context.Provider>
    )
};