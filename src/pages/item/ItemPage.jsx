import { useState } from 'react';
import { ImageCarousel, QuantitySelector, StoreBenefits } from '../../components';
import './item.scss';

export const ItemPage = () => {

    const [units, setUnits] = useState(0);

    return (
        <div className='content-container'>
    
            <div className="top">
                
                <div className="left">
                    <img className='img-item' src="../src/assets/big-sneaker.png" alt="" />
                    <ImageCarousel/>
                </div>

                <div className="right">
                    <h1>Product name for maximum two text lines title could be very long</h1>
                    <h2>Product name for maximum two text lines title could be very long</h2>
                    <p className='price'>$ 30.00</p>
                    <div className="discounts">

                        <div className="square">
                            <p className='size'>0 - 12</p>
                            <p className='items-text'>items</p>
                            <p className="price">$29</p>
                            <p className="discount">23% discount</p>
                        </div>
                        
                        <div className="square">
                            <p className='size'>0 - 12</p>
                            <p className='items-text'>items</p>
                            <p className="price">$29</p>
                            <p className="discount">23% discount</p>
                        </div>

                        <div className="square">
                            <p className='size'>0 - 12</p>
                            <p className='items-text'>items</p>
                            <p className="price">$29</p>
                            <p className="discount">23% discount</p>
                        </div>
                    </div>
                
                    <div className="buttons">
                        <button className='btn-enter'>Enter group</button>
                        <QuantitySelector
                            units={units}
                            setUnits={setUnits}
                            availableUnits={1}
                        />
                    </div>
                    <StoreBenefits/>
                </div>
            </div>
    

        </div>
    )
};
