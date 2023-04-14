import { useState } from 'react';
import './image-carousel.scss';

export const ImageCarousel = ({ 
    images = [
        {
            id: 1,
            src: '/assets/sneaker.png'
        },
        {
            id: 2,
            src: '/assets/sneaker.png'
        },
        {
            id: 3,
            src: '/assets/sneaker.png'
        },
        {
            id: 4,
            src: '/assets/sneaker.png'
        },
        {
            id: 5,
            src: '/assets/sneaker.png'
        },
        {
            id: 6,
            src: '/assets/sneaker.png'
        },
        {
            id: 7,
            src: '/assets/sneaker.png'
        },
        {
            id: 8,
            src: '/assets/sneaker.png'
        },
    ] 
}) => {

    const [selectedImage, setSelectedImage] = useState( images[0] );

    const onImageClick = (image) => {
        console.log(image, selectedImage);
        setSelectedImage( image );
    }

    const onLeftArrowClick = () => {

    }

    const onRightArrowClick = () => {

    }

    return (
        <div className="controls">
            <img 
                className="arrow" 
                src="/assets/left-arrow.png" 
                alt="" 
                onClick={ onLeftArrowClick }
            />

            <div className="carousel">
                { images.map( image => (
                    <img
                        key={ image.id } 
                        src={ image.src } 
                        alt="image" 
                        onClick={ () => onImageClick(image) }
                        className={`${ selectedImage.id === image.id ? 'active' : 'inactive' }`}
                    />
                    ))
                }
            </div>

            <img 
                className="arrow" 
                src="/assets/right-arrow.png" 
                alt="" 
                onClick={ onRightArrowClick }
            />
        </div>
    )
};
