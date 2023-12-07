// DrinkItem.tsx
import React from "react";

interface DrinkItemProps {
    drink: {
        imageSrc: string;
        name: string;
        price: number;
    };
    handleDrinkItemClick: (drink: {
        imageSrc: string;
        name: string;
        price: number;
    }) => void;
}

const DrinkItem: React.FC<DrinkItemProps> = ({
    drink,
    handleDrinkItemClick,
}) => {
    return (
        <div
            className="mr-10 ml-5 mb-5"
            onClick={() => handleDrinkItemClick(drink)}
        >
            <button>
                <picture className="flex items-center justify-center">
                    <img
                        src={drink.imageSrc}
                        alt={drink.name}
                        className="w-40 h-40 object-cover border-4 border-white rounded-md mr-5"
                    />
                </picture>
            </button>

            <div className="flex mt-2">
                <p className="mx-auto text-sm text-[#babbbe]">{drink.name}</p>
            </div>
        </div>
    );
};

export default DrinkItem;
