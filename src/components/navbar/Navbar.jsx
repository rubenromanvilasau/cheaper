import './navbar.scss';
import{ NavLink, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { Web3Context } from '../../context/Web3Context';

export const Navbar = () => {

    const { user, connectWeb3 } = useContext( Web3Context );

    const navigate = new useNavigate();

    const goToHome = () => {
        navigate('/');
    };

    return (
        <div className="navbar">        
            <div className="start">
                <img 
                    src="/assets/cheaper.svg" 
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
                { !user.address &&
                    <button 
                        className="btn-connect-wallet" 
                        onClick={ () => { connectWeb3() } }
                    >
                        Connect wallet
                    </button>
                }
            </div>

        </div>
    )
};
