import './items-list.scss';

export const ItemsList = () => {
    return (
        <table>
            <thead>
                <th>Product</th>
                <th>Quantity</th>
                <th>Sub-total</th>
                <th>Total</th>
                <th></th>
            </thead>

            <tbody>

                {/* ITEM IMAGE AND NAME */}
                <td>
                    <div className="item">
                        <img src="/assets/big-sneaker.png" alt="" height={90}/>
        
                        <div className="details">
                            <p>Broad beans</p>
                            <p className="price">$200</p>
                        </div>
                    </div>
                </td>

                {/* QUANTITY */}
                <td className="quantity">
                    <button>-</button>
                    <span>1</span>
                    <button>+</button>
                </td>

                {/* SUB-TOTAL */}
                <td className="price">$200</td>
                
                {/* TOTAL */}
                <td className="price">$200</td>
                
                {/* DELETE BUTTON */}
                <td>
                    <button 
                        className="delete"
                    >
                        x
                    </button>
                </td>
            </tbody>
        </table>
    )
};