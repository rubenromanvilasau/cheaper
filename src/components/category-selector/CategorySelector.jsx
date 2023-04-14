import { useState } from 'react';
import './categoryselector.scss';

export const CategorySelector = ({  }) => {

    const [categories, setCategories] = useState([
        {
            id: 1,
            name: 'Beans',
            subCategories: [
                'Broad beans',
                'Butter beans',
                'Cacao beans',
                'Chickpeas'
            ],
            showSubCategories: false
        }
    ]);

    const toggleShowSubcategories = (id) => {
        const newCategories = categories.map((category) => {
            if (category.id === id) {
                category.showSubCategories = !category.showSubCategories;
            }
            return category;
        });
        setCategories(newCategories);
    }

    return (
        <div className="content">
            <span>Category</span>

            <div 
                className="category"
                onClick={ () => toggleShowSubcategories(1) }
            >
                <p>Beans</p>
                <img src="/assets/dropdown-arrow.svg" alt="" />
            </div>
      
            { categories[0].showSubCategories && (
                <ul>
                    <li>Broad beans</li>
                    <li>Butter beans</li>
                    <li>Cacao beans</li>
                    <li>Chickpeas</li>
                </ul>)
            }
        </div>
    )
};
