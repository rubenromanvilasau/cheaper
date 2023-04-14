import { useState } from 'react';
import { ImageCarousel, MoreProducts, QuantitySelector, StoreBenefits } from '../../components';
import './item.scss';

export const ItemPage = () => {

    const [units, setUnits] = useState( 0 );
    const [showDescription, setShowDescription] = useState( true );

    const toggleShowDescription = () => {
        setShowDescription( !showDescription );
    }

    return (
        <div className='content-container'>
    
            <section className="top">
                
                <div className="left">
                    <img className='img-item' src="/assets/big-sneaker.png" alt="" />
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
                            units={ units }
                            setUnits={ setUnits }
                            availableUnits={ 8 }
                        />
                    </div>
                    <StoreBenefits/>
                </div>
            </section>
    
            {/* DESCRIPTION AND GROUP SHOPPING*/}
            <section className="mid"> 
                <div className="container">
                    <div className="controls">
                        <div 
                            className={`selector ${ showDescription ? 'active-selector' : ''}`}
                            onClick={ () => toggleShowDescription() }    
                        >
                            <span>Description</span>
                        </div>
                        <div 
                            className={`selector ${ !showDescription ? 'active-selector' : ''}`}
                            onClick={ () => toggleShowDescription() }    
                        >
                            <span>Group shopping</span>
                        </div>
                    </div>

                    <div className="info">
                        { showDescription ?
                            <div className="extra-info">
                                <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam beatae quam temporibus soluta, consequatur reprehenderit quae illo? Temporibus tempora reiciendis, ullam ipsa quisquam magnam maxime dicta accusamus. Ipsam accusantium quo quam dolores nostrum nihil iure, aut sed dignissimos beatae eveniet labore numquam? Officiis minus expedita nostrum repudiandae rerum consequatur repellat.</span>
                            </div>
                            :
                            <div className="extra-info">
                                <div className="order">

                                    <div className="info-col">
                                        <p className="title">Payment method</p>
                                        <p className="data">Paypal</p>
                                    </div>

                                    <div className="info-col">
                                        <p className="title">Name</p>
                                        <p className="data">Credit card</p>
                                    </div>

                                    <div className="info-col">
                                        <p className="title">Quantity</p>
                                        <p className="data">Crypto</p>
                                    </div>

                                    <div className="info-col">
                                        <p className="title">Date</p>
                                        <p className="data">01 Sep 2023</p>
                                    </div>
                                    
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </section>

            {/* BOTTOM, SIMILAR PRODUCTS */}
            <section className="bottom">
                <MoreProducts/>
            </section>

        </div>
    )
};
