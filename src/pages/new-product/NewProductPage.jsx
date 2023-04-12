import { useState } from 'react';
import './new-product.scss';

export const NewProductPage = () => {

    const [showSuccess, setShowSuccess] = useState( false );

    return (
        <div className="details-container">
            <div className="product-details">
                <h1>Product details</h1>

                <div className="row">
                    <div className="panel">
                        
                        <input 
                            className="name" 
                            type="text" 
                            placeholder="Product name"
                        />
                        
                        <input 
                            className="category" 
                            type="text" 
                            placeholder="Product category"
                        />
                        
                        <input 
                        className="description" 
                        type="text" 
                        placeholder="Product description"
                        />

                        <div className="upload-image">
                            <img src="../../../public/assets/upload.svg" alt="upload-icon"/>
                            <span>Upload images</span>
                        </div>
                        {/* <input type="file" /> */}
                    </div>

                    <div className="panel">
                        <input 
                            type="number" 
                            className="name"
                            placeholder="Product stock"
                        />
                        <input 
                            className="category" 
                            type="text" 
                            placeholder="Product category"
                        />
                    </div>
                </div>
            </div>

        </div>
    )
};
