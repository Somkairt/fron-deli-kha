// FoodItem.tsx
import React from "react";

interface FoodItemProps {
    item: {
        imageSrc: string;
        name: string;
        price: number;
    };
    handleFoodItemClick: (item: {
        imageSrc: string;
        name: string;
        price: number;
    }) => void;
}

const FoodItem: React.FC<FoodItemProps> = ({ item, handleFoodItemClick }) => {
    return (
        <div
            className="mr-10 ml-5 mb-5"
            onClick={() => handleFoodItemClick(item)}
        >
            <button>
                <picture className="flex items-center justify-center">
                    <img
                        src={item.imageSrc}
                        alt={item.name}
                        className="w-40 h-40 object-cover border-4 border-white rounded-md mr-5"
                    />
                </picture>
            </button>

            <div className="flex mt-2">
                <p className="mx-auto text-sm text-[#babbbe]">{item.name}</p>
            </div>
        </div>
    );
};

export default FoodItem;
