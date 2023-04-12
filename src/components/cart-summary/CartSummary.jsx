import './cart-summary.scss';

export const CartSummary = () => {
    return (
        <div className="summary-container">
            <span className="title">Summary</span>
            <input type="text" placeholder="Enter coupon"/>

            {/* Bag Total */}
            <div className="item" >
                <span className="text">Bag total</span>
                <span className="price">$200</span>
            </div>

            {/* Shipping charges*/}
            <div className="item">
                <span className="text">Shipping charges</span>
                <span className="price">$200</span>
            </div>

            {/* Gst */}
            <div className="item">
                <span className="text">Bag total</span>
                <span className="price">$200</span>
            </div>

            {/* Sub total */}
            <div className="item">
                <span className="text">Bag total</span>
                <span className="price">$200</span>
            </div>

            <br />
            <hr />
            <br />

            {/* Total */}
            <div className="total-item">
                <span className="text">Bag total</span>
                <span className="price">$200</span>
            </div>

            <button className="btn-checkout">Pay now</button>

        </div>
    )
};