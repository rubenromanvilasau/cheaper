import './more-products.scss';
import { ItemCard } from '../';

export const MoreProducts = () => {
    return (
        <div className="products-container">
            <h1>More products</h1>
            <div className="products">
                <ItemCard/>
                <ItemCard/>
                <ItemCard/>
                <ItemCard/>
            </div>
        </div>
    )
};
