import './store.scss';
import { ItemCard } from '../../components';

export const StorePage = () => {
    return (
        <div className="container">

            {/* TOP */}
            <section className="top">
                <img className="store-banner" src="/assets/store-banner.png" alt="store-banner" />
                <div className="logo-name">
                    <img className="store-logo" src="/assets/store-logo.png" alt="store-logo" />
                    <div className="name-description">
                        <h1>Store Name</h1>
                        <p>Description</p>
                    </div>
                </div>
            </section>

            <section className="search">
                <div className="select-category">Category</div>
                <input type="text" placeholder="Search" />
                <button>Search</button>
            </section>

            {/* GROUP SHOPPING */}
            <section className="group-shopping"> 
                <h2>Group shopping</h2>
                <div className="product-list">
                    <ItemCard/>
                    <ItemCard/>
                    <ItemCard/>
                    <ItemCard/>
                </div>
            </section>

            {/* ALL PRODUCTS */}
            <section className="all-products">
                <h2>All products</h2>

                <div className="product-list">
                    <ItemCard/>
                    <ItemCard/>
                    <ItemCard/>
                    <ItemCard/>
                    <ItemCard/>
                    <ItemCard/>
                </div>
            </section>
        </div>
    )
};
