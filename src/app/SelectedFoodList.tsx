// SelectedFoodList.tsx
import React from "react";
import { PiPencilLight } from "react-icons/pi";
import { AiFillCloseCircle } from "react-icons/ai";

interface SelectedFoodListProps {
    selectedFoodItems: {
        name: string;
        price: number;
    }[];
    handleRemoveFoodItem: (index: number) => void;
}

const SelectedFoodList: React.FC<SelectedFoodListProps> = ({
    selectedFoodItems,
    handleRemoveFoodItem,
}) => {
    return (
        <div className="ml-5 h-[200px] mt-3 overflow-y-scroll">
            <table className="table w-full h-auto">
                <thead></thead>
                <tbody className="w-52 text-gray-400">
                    {selectedFoodItems.map((selectedItem, index) => (
                        <tr key={index}>
                            <td>{selectedItem.name}</td>
                            <td className="flex items-center">
                                <span className="mr-1">
                                    {selectedItem.price}$
                                </span>
                                <PiPencilLight className="text-xl ml-1" />
                                <AiFillCloseCircle
                                    onClick={() => handleRemoveFoodItem(index)}
                                    className="text-xl ml-1"
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default SelectedFoodList;
