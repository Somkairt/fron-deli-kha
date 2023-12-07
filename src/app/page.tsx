"use client";
import Image from "next/image";
import { PiPencilLight } from "react-icons/pi";
import { AiFillCloseCircle } from "react-icons/ai";
import items from "./items";
import drinks from "./drinks";
import { useState } from "react";
import DrinkItem from "./DrinkItem";
import FoodItem from "./FoodItem";
import SelectedFoodList from "./SelectedFoodList";
import SelectedDrinkList from "./SelectedDrinkList";
// สร้าง interface สำหรับรายการอาหาร
interface Item {
    imageSrc: string;
    name: string;
    price: number;
}

// สร้าง interface สำหรับรายการเครื่องดื่ม
interface DrinkItem {
    imageSrc: string;
    name: string;
    price: number;
}

export default function Home() {
    // ใช้ State เพื่อเก็บรายการอาหารที่ถูกเลือก
    const [selectedFoodItems, setSelectedFoodItems] = useState<Item[]>([]);
    // ใช้ State เพื่อเก็บรายการเครื่องดื่มที่ถูกเลือก
    const [selectedDrinkItems, setSelectedDrinkItems] = useState<DrinkItem[]>(
        [],
    );

    // ฟังก์ชันเพิ่มรายการอาหารที่ถูกคลิกเพื่อเลือก
    const handleFoodItemClick = (item: Item) => {
        setSelectedFoodItems((prevSelectedItems) => [
            ...prevSelectedItems,
            item,
        ]);
    };

    // ฟังก์ชันเพิ่มรายการเครื่องดื่มที่ถูกคลิกเพื่อเลือก
    const handleDrinkItemClick = (drink: DrinkItem) => {
        setSelectedDrinkItems((prevSelectedItems) => [
            ...prevSelectedItems,
            drink,
        ]);
    };

    // ฟังก์ชันลบรายการอาหาร
    const handleRemoveFoodItem = (index: number) => {
        const newSelectedItems = [...selectedFoodItems];
        newSelectedItems.splice(index, 1);
        setSelectedFoodItems(newSelectedItems);
    };

    // ฟังก์ชันลบรายการเครื่องดื่ม
    const handleRemoveDrinkItem = (index: number) => {
        const newSelectedItems = [...selectedDrinkItems];
        newSelectedItems.splice(index, 1);
        setSelectedDrinkItems(newSelectedItems);
    };

    // คำนวณผลรวมราคาทั้งหมดของรายการอาหาร
    const totalFoodSum = selectedFoodItems.reduce(
        (sum, item) => sum + item.price,
        0,
    );

    // คำนวณผลรวมราคาทั้งหมดของรายการเครื่องดื่ม
    const totalDrinkSum = selectedDrinkItems.reduce(
        (sum, drink) => sum + drink.price,
        0,
    );
    const alertOrderedFoodItems = () => {
        const foodItemsMessage = selectedFoodItems
            .map((item) => item.name)
            .join(", ");
        alert(`รายการอาหารที่สั่ง: ${foodItemsMessage}`);
    };
    const alertOrderedDrinkItems = () => {
        const drinkItemsMessage = selectedDrinkItems
            .map((item) => item.name)
            .join(", ");
        alert(`รายการเครื่องดื่มที่สั่ง: ${drinkItemsMessage}`);
    };
    const getOrderedFoodItemsMessage = () => {
        return selectedFoodItems.map((item) => item.name).join(", ");
    };

    const getOrderedDrinkItemsMessage = () => {
        return selectedDrinkItems.map((item) => item.name).join(", ");
    };

    return (
        <main className="flex">
            {/* ส่วนแสดงรายการอาหาร */}
            <div className="ml-5 w-[1000px] h-screen text-black text-3xl flex-col overflow-hidden ">
                <p className="ml-5 mt-5 mb-5 text-[rgb(79,86,94)]">
                    รายการอาหาร
                </p>
                <div className=" h-full overflow-y-scroll">
                    <section className="w-full flex flex-wrap mx-auto text-center">
                        {items.map((item, index) => (
                            <FoodItem
                                key={index}
                                item={item}
                                handleFoodItemClick={handleFoodItemClick}
                            />
                        ))}
                    </section>

                    <section className="w-full flex flex-wrap mx-auto text-center pb-20">
                        {drinks.map((drink, index) => (
                            <DrinkItem
                                key={index}
                                drink={drink}
                                handleDrinkItemClick={handleDrinkItemClick}
                            />
                        ))}
                    </section>
                </div>
            </div>

            {/* ส่วนแสดงรายการที่ถูกเลือกและราคารวมทั้งหมดของอาหาร */}
            <div className="mt-5 ml-5 mr-5">
                <div className="w-[350px] h-[550px] bg-white border-[5px] border-white  rounded-3xl ">
                    <div className="ml-5 h-[210px]  ">
                        <p className=" text-gray-800 text-2xl mt-5">
                            รายการสั่งซื้อ
                        </p>{" "}
                        <p className="text-sm  text-gray-800 font-bold ">
                            รายการอาหาร
                        </p>
                        {selectedFoodItems.length > 0 && (
                            <>
                                <SelectedFoodList
                                    selectedFoodItems={selectedFoodItems}
                                    handleRemoveFoodItem={handleRemoveFoodItem}
                                />
                            </>
                        )}
                    </div>

                    {/* ส่วนแสดงรายการที่ถูกเลือกและราคารวมทั้งหมดของเครื่องดื่ม */}
                    <div>
                        <p className="text-sm mt-14 ml-5 text-gray-800 font-bold ">
                            รายการเครื่องดื่ม
                        </p>
                    </div>

                    {selectedDrinkItems.length > 0 && (
                        <SelectedDrinkList
                            selectedDrinkItems={selectedDrinkItems}
                            handleRemoveDrinkItem={handleRemoveDrinkItem}
                        />
                    )}

                    {/* ส่วนแสดงผลรวมราคาทั้งหมดของทั้งอาหารและเครื่องดื่ม */}
                    <div className="  flex ">
                        <p className=" ml-3 mt-2  text-lg text-gray-800 mx-0 ">
                            Total
                        </p>
                        <p className=" ml-44 text-4xl text-gray-800 font-bold ">
                            {totalFoodSum + totalDrinkSum}$
                        </p>
                    </div>
                </div>

                {/* ปุ่ม */}
                <div>
                    <button
                        onClick={() => {
                            const foodItemsMessage =
                                getOrderedFoodItemsMessage();
                            const drinkItemsMessage =
                                getOrderedDrinkItemsMessage();

                            alert(
                                `รายการอาหารที่สั่ง: ${foodItemsMessage}\nรายการเครื่องดื่มที่สั่ง: ${drinkItemsMessage}`,
                            );
                        }}
                        className="btn-secondary text-white w-full h-16 bg-[#00bfff] mt-2 rounded-md"
                    >
                        Button 1
                    </button>
                </div>
                <button className="btn-secondary text-white w-full h-16 bg-gray-800 mt-2 rounded-md ">
                    Button
                </button>
            </div>
        </main>
    );
}
