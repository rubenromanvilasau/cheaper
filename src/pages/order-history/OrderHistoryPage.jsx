import './order-history.scss';


const orders = [
    {
        id: 21831,
        date: '21 July',
        product: 'Broad beans',
        amount: 3,
        price: 170,
        status: 'Delivered'
    },
    {
        id: 213871,
        date: '21 July',
        product: 'Broad beans',
        amount: 2,
        price: 170,
        status: 'Delivered'
    },
    {
        id: 83871,
        date: '21 July',
        product: 'Broad beans',
        amount: 8,
        price: 170,
        status: 'Delivered'
    },
    {
        id: 871,
        date: '21 July',
        product: 'Broad beans',
        amount: 2,
        price: 170,
        status: 'Delivered'
    },
    {
        id: 21838,
        date: '21 July',
        product: 'Broad beans',
        amount: 9,
        price: 170,
        status: 'Delivered'
    },
];

export const OrderHistoryPage = () => {
    return (
        <div className='orders-container'>
            <h1>Sales order</h1>

            <div className="filters">
                <div className="dropdowns">
                    
                    <div>
                        <span>Main category</span>
                        <span><img src="/assets/dropdown-arrow.svg"/></span>
                    </div>
                    
                    <div>
                        <span>Sub category</span>
                        <span><img src="/assets/dropdown-arrow.svg"/></span>
                    </div>

                    <div>
                        <span>Stock</span>
                        <span><img src="/assets/dropdown-arrow.svg"/></span>
                    </div>
                </div>

                <div className="search">
                    <input 
                        type="text" 
                        placeholder="Search"
                    />
                </div>

            </div>

            <div className="orders">
                { orders.map(order => (
                    <div className="order">
                    
                        <div>
                            <p className="title">Order id</p>
                            <p className="value">{ order.id }</p>
                        </div>

                        <div>
                            <p className="title">Date</p>
                            <p className="value">{ order.date }</p>
                        </div>

                        <div>
                            <p className="title">Product</p>
                            <p className="value">{ order.product }</p>
                        </div>

                        <div>
                            <p className="title">Amount</p>
                            <p className="value">{ order.amount }</p>
                        </div>

                        <div>
                            <p className="title">Price</p>
                            <p className="value">{ order.price }</p>
                        </div>

                        <div>
                            <p className="title">Status</p>
                            <div className="status">
                                <span>{ order.status }</span>
                            </div>
                        </div>

                        <div>
                            <p></p>
                            <button>View details</button>
                        </div>
                
                    </div>
                ))}

            </div>
        </div>
    )
};