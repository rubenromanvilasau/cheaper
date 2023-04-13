import Web3 from 'web3';
import './navbar.scss';
import{ NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';

export const Navbar = () => {

    const [web3, setWeb3] = useState(null);

    const navigate = new useNavigate();

    const connectWeb3 = async() => {
        if( window.ethereum ) {
            await window.ethereum.request({method: 'eth_requestAccounts'});
            window.web3 = new Web3(window.ethereum);
            
            setWeb3(window.web3);    
            console.log( web3 );
    
            const accounts = await web3.eth.getAccounts().catch( err => console.log( err) );
            console.log('Account', accounts[0]);
        }else{
            console.log('Install Metamask');
        }
    };

    const goToHome = () => {
        navigate('/');
    };

    return (
        <div className="navbar">
        
            <div className="start">
                <img 
                    src="../../../public/assets/cheaper.svg" 
                    height={55} 
                    alt="cheaper-logo"
                    onClick={ () => { goToHome() } }
                />
                <ul>
                    <li className='item'>
                        <NavLink to="/marketplace">Marketplace</NavLink>
                    </li>
                    <li className='item'>
                        <NavLink to="/stores">Stores</NavLink>
                    </li>                
                </ul>
            </div>

            <div className="end">
                <input 
                    type="text" 
                    placeholder="Search"
                />
                <button
                    className="btn-register"
                    onClick={ () => { console.log('register') } }
                >
                    Register
                </button>
                <button 
                    className="btn-connect-wallet" 
                    onClick={ () => { connectWeb3() } }
                >
                    Connect wallet
                </button>
            </div>

        </div>
    )
};
