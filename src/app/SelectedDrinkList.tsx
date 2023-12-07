// SelectedDrinkList.tsx
import React from "react";
import { AiFillCloseCircle } from "react-icons/ai";

interface SelectedDrinkListProps {
    selectedDrinkItems: {
        name: string;
        price: number;
    }[];
    handleRemoveDrinkItem: (index: number) => void;
}

const SelectedDrinkList: React.FC<SelectedDrinkListProps> = ({
    selectedDrinkItems,
    handleRemoveDrinkItem,
}) => {
    return (
        <div className="w-full h-[190px] pl-5  mt-2 overflow-y-scroll">
            <table className="table w-full h-auto">
                <thead></thead>
                <tbody className="w-52 text-gray-400">
                    {selectedDrinkItems.map((selectedItem, index) => (
                        <tr key={index}>
                            <td>{selectedItem.name}</td>
                            <td className="flex items-center">
                                <span className="mr-1">
                                    {selectedItem.price}$
                                </span>
                                <AiFillCloseCircle
                                    onClick={() => handleRemoveDrinkItem(index)}
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

export default SelectedDrinkList;
