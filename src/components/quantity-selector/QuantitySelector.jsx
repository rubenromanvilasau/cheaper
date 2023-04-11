import { useState } from 'react';
import './quantity-selector.scss';;

export const QuantitySelector = ({ availableUnits = 0, initialUnits = 0, setUnits, units }) => {

    const onSumUnits = () => {
        if( units >= availableUnits  ) return;
        
        setUnits(units + 1);
    }

    const onSubstractUnits = () => {
        if( units === 0  ) return;

        setUnits(units - 1);
    }

    return (
        <div className="panel">
            <button
                onClick={ onSubstractUnits }
            >
                -
            </button>
            <span className='units'>{ units }</span>
            <button
                onClick={ onSumUnits }
            >
                +
            </button>
            <span className='available-units'>{ availableUnits } units available</span>
        </div>
    )
};
