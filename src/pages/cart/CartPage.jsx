import './cart.scss';
import { CartSummary, ItemsList } from '../../components';

export const CartPage = () => {
    return (
            <div className="cart-container">
                <span className="cart-items">You have 2 items in your cart</span>
                
                <div className="row">
                    <ItemsList/>
                    <CartSummary/>
                </div>
            </div>
    )
};
