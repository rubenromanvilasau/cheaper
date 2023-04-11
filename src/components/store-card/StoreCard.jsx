import { Link } from 'react-router-dom';
import './store-card.scss';


export const StoreCard = () => {
    return (
        <Link to="/store/1">
            <div className="card">
                <img 
                    className="store-banner" 
                    src="../../../public/assets/store-banner.png" 
                    alt="store-banner" 
                />
                <div className="name-logo">
                    <img 
                        className="store-logo" 
                        src="../../../public/assets/store-logo.png" 
                        alt="store-logo" 
                    />
                    <div>
                        <h3>KB IMPORTATION</h3>
                        <p className="description">Store description</p>
                    </div>
                </div>
            </div>
        </Link>
    )
};
