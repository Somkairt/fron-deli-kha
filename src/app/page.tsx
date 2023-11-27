import Image from "next/image";
import { PiPencilLight } from "react-icons/pi";
import { AiFillCloseCircle } from "react-icons/ai";
export default function Home() {
    return (
        <main className=" h-full flex">
            <div className="ml-5 w-[1000px] text-black text-3xl flex-col">
                <p className=" ml-20 mt-10 mb-5 text-[#4f565e]">รายการอาหาร</p>
                <section className=" w-auto  flex items-center justify-center">
                    <div className=" ">
                        <div className="mr-5 ml-5 ">
                            <button>
                                <picture className="flex items-center justify-center">
                                    <img
                                        src="/cerry.jpg"
                                        alt=""
                                        className=" w-40 h-40 object-cover border-4 border-white rounded-md mr-5"
                                    />
                                </picture>
                            </button>
                        </div>
                        <div className="flex mt-2">
                            <p className="mx-auto text-sm text-[#babbbe]">
                                Spicy Chicken Curry
                            </p>
                        </div>
                    </div>
                    <div className="mr-5 ml-5 mb-2">
                        <div className="">
                            <button>
                                {" "}
                                <picture className="flex items-center justify-center">
                                    <img
                                        src="/veggy.jpg"
                                        alt=""
                                        className=" w-40 h-40 object-cover border-4 border-white rounded-md mr-5"
                                    />
                                </picture>
                            </button>
                        </div>
                        <div className="flex mt2">
                            <p className="mx-auto text-sm text-[#babbbe]">
                                Vegetable Stir-Fry
                            </p>
                        </div>
                    </div>
                    <div className="mr-5 ml-5">
                        <div className="">
                            <button>
                                {" "}
                                <picture className="flex items-center justify-center">
                                    <img
                                        src="/monmon.jpg"
                                        alt=""
                                        className=" w-40 h-40 object-cover border-4 border-white rounded-md mr-5"
                                    />
                                </picture>
                            </button>
                        </div>
                        <div className="flex mt-2">
                            <p className="mx-auto text-sm text-[#babbbe]">
                                Grilled Salmon with Butter
                            </p>
                        </div>
                    </div>
                    <div className="mr-5 ml-5">
                        <div className="">
                            <button>
                                {" "}
                                <picture className="flex items-center justify-center">
                                    <img
                                        src="/pepper.jpg"
                                        alt=""
                                        className=" w-40 h-40 object-cover border-4 border-white rounded-md mr-5"
                                    />
                                </picture>
                            </button>
                        </div>
                        <div className="flex mt-2">
                            <p className="mx-auto text-sm text-[#babbbe]">
                                Pepperoni Pizza
                            </p>
                        </div>
                    </div>
                </section>
                <section className=" w-auto  flex items-center justify-center mt-5">
                    <div className=" ">
                        <div className="mr-5 ml-5 ">
                            <button>
                                <picture className="flex items-center justify-center">
                                    <img
                                        src="/caprese.jpg"
                                        alt=""
                                        className=" w-40 h-40 object-cover border-4 border-white rounded-md mr-5"
                                    />
                                </picture>
                            </button>
                        </div>
                        <div className="flex mt-2">
                            <p className="mx-auto text-sm text-[#babbbe]">
                                Caprese Sandwich
                            </p>
                        </div>
                    </div>
                    <div className="mr-5 ml-5 mb-2">
                        <div className="">
                            <button>
                                <picture className="flex items-center justify-center">
                                    <img
                                        src="/padthai.jpg"
                                        alt=""
                                        className=" w-40 h-40 object-cover border-4 border-white rounded-md mr-5"
                                    />
                                </picture>
                            </button>
                        </div>
                        <div className="flex mt2">
                            <p className="mx-auto text-sm text-[#babbbe]">
                                Shrimp Pad Thai
                            </p>
                        </div>
                    </div>
                    <div className="mr-5 ml-5">
                        <div className="">
                            <button>
                                <picture className="flex items-center justify-center">
                                    <img
                                        src="/flat.jpg"
                                        alt=""
                                        className=" w-40 h-40 object-cover border-4 border-white rounded-md mr-5"
                                    />
                                </picture>
                            </button>
                        </div>
                        <div className="flex mt-2">
                            <p className="mx-auto text-sm text-[#babbbe]">
                                Margherita Flatbread
                            </p>
                        </div>
                    </div>
                    <div className="mr-5 ml-5">
                        <div className="">
                            <button>
                                {" "}
                                <picture className="flex items-center justify-center">
                                    <img
                                        src="/lasagna.jpg"
                                        alt=""
                                        className=" w-40 h-40 object-cover border-4 border-white rounded-md mr-5"
                                    />
                                </picture>
                            </button>
                        </div>
                        <div className="flex mt-2">
                            <p className="mx-auto text-sm text-[#babbbe]">
                                Roasted Vegetable Lasagna
                            </p>
                        </div>
                    </div>
                </section>
                <section className=" w-auto  flex items-center justify-center mt-5">
                    <div className=" ">
                        <div className="mr-5 ml-5 ">
                            <button>
                                {" "}
                                <picture className="flex items-center justify-center">
                                    <img
                                        src="/pastack.jpg"
                                        alt=""
                                        className=" w-40 h-40 object-cover border-4 border-white rounded-md mr-5"
                                    />
                                </picture>
                            </button>
                        </div>
                        <div className="flex mt-2">
                            <p className="mx-auto text-sm text-[#babbbe]">
                                Chicken Alfredo Pasta
                            </p>
                        </div>
                    </div>
                    <div
                        className="mr-5 ml-5 mb-2
                    "
                    >
                        <div className="">
                            <button>
                                {" "}
                                <picture className="flex items-center justify-center">
                                    <img
                                        src="/somtam.jpg"
                                        alt=""
                                        className=" w-40 h-40 object-cover border-4 border-white rounded-md mr-5"
                                    />
                                </picture>
                            </button>
                        </div>
                        <div className="flex mt2">
                            <p className="mx-auto text-sm text-[#babbbe]">
                                papaya Salad
                            </p>
                        </div>
                    </div>
                    <div className="mr-5 ml-5">
                        <div className="">
                            <button>
                                <picture className="flex items-center justify-center">
                                    <img
                                        src="/tomyam.jpg"
                                        alt=""
                                        className=" w-40 h-40 object-cover border-4 border-white rounded-md mr-5"
                                    />
                                </picture>
                            </button>
                        </div>
                        <div className="flex mt-2">
                            <p className="mx-auto text-sm text-[#babbbe]">
                                Tom yam kung
                            </p>
                        </div>
                    </div>
                    <div className="mr-5 ml-5">
                        <div className="">
                            <button>
                                {" "}
                                <picture className="flex items-center justify-center">
                                    <img
                                        src="/massa.jpg"
                                        alt=""
                                        className=" w-40 h-40 object-cover border-4 border-white rounded-md mr-5"
                                    />
                                </picture>
                            </button>
                        </div>
                        <div className="flex mt-2">
                            <p className="mx-auto text-sm text-[#babbbe]">
                                Massaman Majesty
                            </p>
                        </div>
                    </div>
                </section>
            </div>

            <div className=" mt-5 ml-5 mr-5 ">
                <div className="  w-[350px] h-[500px] bg-white    border-[5px] border-white rounded-2xl  ">
                    <div className=" ml-5 h-[420px]">
                        <p className=" pl-3 text-gray-800 text-2xl mt-5">
                            รายการสั่งซื้อ
                        </p>
                        <div className=" w-fit h-auto mt-3">
                            <table className="table  w-full h-auto   ">
                                <th className=" text-sm text-gray-800">
                                    รายการ
                                </th>

                                {/* head */}

                                <tbody className=" w-52 text-gray-400 ">
                                    {/* row 1 */}
                                    <td>Cy Ganderton</td>
                                    <td className=" flex   ">Blue</td>
                                    <td className="text-xl">
                                        <PiPencilLight />
                                    </td>
                                    <td className="text-xl">
                                        <AiFillCloseCircle />
                                    </td>
                                </tbody>
                                <tbody className=" w-52 text-gray-400 ">
                                    {/* row 1 */}
                                    <td>Cy Ganderton</td>
                                    <td className=" flex   ">Blue</td>
                                    <td className="text-xl">
                                        <PiPencilLight />
                                    </td>
                                    <td className="text-xl">
                                        <AiFillCloseCircle />
                                    </td>
                                </tbody>
                                <tbody className=" w-52 text-gray-400 ">
                                    {/* row 1 */}
                                    <td>Cy Ganderton</td>
                                    <td className=" flex   ">Blue</td>
                                    <td className="text-xl">
                                        <PiPencilLight />
                                    </td>
                                    <td className="text-xl">
                                        <AiFillCloseCircle />
                                    </td>
                                </tbody>
                                <tbody className=" w-52 text-gray-400 ">
                                    {/* row 1 */}
                                    <td>Cy Ganderton</td>
                                    <td className=" flex   ">Blue</td>
                                    <td className="text-xl">
                                        <PiPencilLight />
                                    </td>
                                    <td className="text-xl">
                                        <AiFillCloseCircle />
                                    </td>
                                </tbody>
                            </table>
                        </div>
                        <div className=" w-full h-auto mt-3">
                            <table className="table  w-full h-auto   ">
                                <thead>
                                    <th className=" text-sm text-gray-400">
                                        รายการ
                                    </th>
                                </thead>
                                {/* head */}

                                <tbody className=" flex-col text-gray-400 ">
                                    {/* row 1 */}
                                    <td>Cy Ganderton</td>

                                    <td className=" flex ">Blue</td>
                                    <td className="text-xl">
                                        <AiFillCloseCircle />
                                    </td>
                                </tbody>
                                <tbody className=" flex-col text-gray-400 ">
                                    {/* row 1 */}
                                    <td>Cy Ganderton</td>

                                    <td className=" flex ">Blue</td>
                                    <td className="text-xl">
                                        <AiFillCloseCircle />
                                    </td>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className=" bottom-0  w-full ml-9 flex   ">
                        <div className=" text-lg text-gray-800 mr-[150px]">
                            total
                        </div>
                        <div className=" text-lg text-gray-800">10000$</div>

                        {/* head */}
                    </div>
                </div>
                <div>
                    <button className="btn h-20 w-full bg-[#00bfff] border-[#00bfff] text-white mt-3 mb-2">
                        Button
                    </button>
                </div>
                <div>
                    <button className="btn h-20 w-full bg-slate-600 border-slate-600 text-white ">
                        Button
                    </button>
                </div>
            </div>
        </main>
    );
}
{
    /* <Image
                    src="/kitchen.jpg"
                    alt="Vercel Logo"
                    width={1000}
                    height={24}
                    priority
                ></Image> */
}
{
    /* <div className=" bg-gray-500 w-[70px] h-[1000px]">12</div> 
    
Quinoa Salad with Lemon Vinaigrette







BBQ Pulled Pork Sliders
Mediterranean Chickpea Bowl

Avocado and Black Bean Quesadilla

Spinach and Feta Stuffed Chicken Breast
*/
}
{
    /* <div className=" w-20 flex flex-row mr-5">
                    <section className="w-full h-auto">
                        <div className="card h-[200px] w-full">
                            <div className="border-[4px] border-white">
                                
                            </div>
                            <div className="flex card mt-2 text-xs">
                                <p className="mx-auto text-[#babbbe]">
                                    Spicy Chicken Curry
                                </p>
                            </div>
                        </div>
                    </section>
                    <section className="w-full h-auto">
                        <div className="card h-[200px] w-full">
                            <div className="border-[4px] border-white">
                                <picture>
                                    <img
                                        src="/pepper.jpg"
                                        alt=""
                                        className="w-full h-full object-cover"
                                    />
                                </picture>
                            </div>
                            <div className="flex card mt-2 text-xs">
                                <p className="mx-auto text-[#babbbe]">
                                    Pepperoni Pizza
                                </p>
                            </div>
                        </div>
                    </section>
                </div> */
}
