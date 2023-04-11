import './stores.scss';
import { StoreCard } from '../../components';

export const StoresPage = () => {
    return (
        <div className="container">
            <h1>Store list</h1>
            <div className="stores">
                <StoreCard/>
                <StoreCard/>
        
                <StoreCard/>
        
                <StoreCard/>
        
                <StoreCard/>
        
                <StoreCard/>
            </div>


        </div>
    )
};
