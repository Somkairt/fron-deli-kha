"use client";
import Image from "next/image";
import { PiPencilLight } from "react-icons/pi";
import { AiFillCloseCircle } from "react-icons/ai";
import items from "./items";
import drinks from "./drinks";
import { useState } from "react";

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

    return (
        <main className="flex">
            {/* ส่วนแสดงรายการอาหาร */}
            <div className="ml-5 w-[1000px] h-screen text-black text-3xl flex-col overflow-hidden ">
                <p className="ml-5 mt-5 mb-5 text-[rgb(79,86,94)]">
                    รายการอาหาร
                </p>
                <div className=" h-full overflow-y-scroll">
                    <section className="w-full flex flex-wrap mx-auto text-center  ">
                        {items.map((item, index) => (
                            <div
                                key={index}
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
                                    <p className="mx-auto text-sm text-[#babbbe]">
                                        {item.name}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </section>{" "}
                    <section className="w-full flex flex-wrap mx-auto text-center pb-20">
                        {drinks.map((drink, index) => (
                            <div
                                key={index}
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
                                    <p className="mx-auto text-sm text-[#babbbe]">
                                        {drink.name}
                                    </p>
                                </div>
                            </div>
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
                                <div className="w-full h-[200px] mt-3 overflow-y-scroll">
                                    <table className="table w-full h-auto">
                                        <thead></thead>
                                        <tbody className="w-52 text-gray-400 ">
                                            {selectedFoodItems.map(
                                                (selectedItem, index) => (
                                                    <tr key={index}>
                                                        <td>
                                                            {selectedItem.name}
                                                        </td>
                                                        <td className="flex items-center">
                                                            <span className="mr-1">
                                                                {" "}
                                                                {
                                                                    selectedItem.price
                                                                }
                                                                $
                                                            </span>
                                                            <PiPencilLight className="text-xl ml-1" />
                                                            <AiFillCloseCircle
                                                                onClick={() =>
                                                                    handleRemoveFoodItem(
                                                                        index,
                                                                    )
                                                                }
                                                                className="text-xl ml-1"
                                                            />
                                                        </td>
                                                    </tr>
                                                ),
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            </>
                        )}
                    </div>

                    {/* ส่วนแสดงรายการที่ถูกเลือกและราคารวมทั้งหมดของเครื่องดื่ม */}
                    <div>
                        <p className="text-sm mt-14 ml-5 text-gray-800 font-bold ">
                            รายการเครื่องดื่ม
                        </p>
                    </div>

                    <div className="w-full h-[190px] pl-5  mt-2 overflow-y-scroll">
                        <table className="table w-full h-auto">
                            <thead></thead>
                            <tbody className="w-52 text-gray-400 ">
                                {selectedDrinkItems.map(
                                    (selectedItem, index) => (
                                        <tr key={index}>
                                            <td>{selectedItem.name}</td>
                                            <td className="flex items-center">
                                                <span className="mr-1">
                                                    {" "}
                                                    {selectedItem.price}$
                                                </span>
                                                <AiFillCloseCircle
                                                    onClick={() =>
                                                        handleRemoveDrinkItem(
                                                            index,
                                                        )
                                                    }
                                                    className="text-xl ml-1"
                                                />
                                            </td>
                                        </tr>
                                    ),
                                )}
                            </tbody>
                        </table>
                    </div>

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
                <button className="btn-disabled w-full h-16 bg-[#00bfff] mt-2 rounded-md ">
                    Button
                </button>
                <button className="btn-disabled w-full h-16 bg-gray-800 mt-2 rounded-md ">
                    Button
                </button>
            </div>
        </main>
    );
}
