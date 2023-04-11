import './navbar.scss';
import{ NavLink } from 'react-router-dom';

export const Navbar = () => {
    return (
        <div className="navbar">
        
            <div className="start">
                <img src="../../../public/assets/cheaper.svg" height={55} alt="" />
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
                    onClick={ () => { console.log('Register')}}
                >
                    Register
                </button>
                <button 
                    className="btn-connect-wallet" 
                    onClick={ () => { console.log('Register')}}
                >
                    Connect wallet
                </button>
            </div>

        </div>
    )
};
