import './store-benefits.scss';;

export const StoreBenefits = () => {
    return (
        <div className="group">
            <div className="row">
                <article>
                    <img src="../src/assets/truck.svg" alt="truck-icon" />
                    <span>Free shipping on orders from $500</span>
                </article>
                <article>

                    <img src="../src/assets/warranty-years.svg" alt="truck-icon" /> 
                    <span>3 years warranty and support 24/7</span>
                </article>
            </div>
            <div className="row">
                <article>
                    <img src="../src/assets/crypto.svg" alt="truck-icon" />
                    <span>We accept crpyto, credit cards & paypal</span>
                </article>
                <article>
                    <img src="../src/assets/truck.svg" alt="truck-icon" /> 
                    <span>Products made in latinoamerica</span>
                </article>
            </div>
        </div>
    )
};
