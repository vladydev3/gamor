import React from 'react';
import Image from 'next/image';
import FilterIcon from './icons/FilterIcon';
import AddUserIcon from './icons/AddUserIcon';

const MainBoard = () => {

    const randomUsers = ['Dr Team', 'Mia Plays', 'Keoxer', 'Nickmerc', 'Lolo'];

    return (
        <main className="h-full cursor-default flex flex-col md:flex-row pb-4 items-stretch justify-between max-w-screen-lg mx-auto">
            <div className="flex-1 dark:bg-black-550 bg-white-400 rounded-l-3xl">
                <h1 className="text-5xl dark:text-white text-black m-8 mt-16">start <span className="dark:text-violet-600 text-orange-500">streaming</span> games differently</h1>
                <p className="dark:text-gray-400 text-black-500 text-sm m-10">gamor now has <span className="dark:text-white font-bold">stream party</span> platform</p>
                <ul className="flex gap-10 m-10 mt-14">
                    <li><a href="#" className="transition duration-500 dark:hover:text-orange-500 hover:text-orange-500 dark:bg-black-600 bg-white-300 shadow-md shadow-black dark:text-white text-black rounded-full py-2 px-4">Create account</a></li>
                    <li><a href="#" className="transition duration-500 hover:text-orange-500">Sign in</a></li>
                </ul>
            </div>
            <div className="flex-1 text-center dark:bg-orange-500 bg-violet-600 mt-4 md:mt-0">
                <h1 className="text-xl text-white p-2 mt-6">Fortnite New Season</h1>
                <p className="text-sm  text-gray-900">Join live stream</p>
                <AddUserIcon />
                <p className="text-orange-500 bg-white p-3 my-8 w-1/2 m-auto cursor-default rounded-full">11 : 45</p>
                <Image 
                    src='/skin_fortnite.png' alt="Skin Fortnite"
                    width={170}
                    height={0}
                    className='m-auto hidden md:block'
                />
            </div>
            <div className="flex-1 dark:bg-black-550 bg-white-400 rounded-r-3xl mt-4 md:mt-0">
                <p className="text-left font-bold py-9 pb-4 px-8"><span className="text-gray-500">01.</span> Choose Platform</p>
                <div className="flex cursor-pointer dark:bg-black-500 bg-gray-100 rounded-full p-2 m-auto ml-8 w-3/4 justify-between">
                    <button className="dark:bg-black-550 bg-gray-300 text-center rounded-full p-2 px-4">Party</button>
                    <button className="text-center rounded-full p-2 px-3">Matchs</button>
                    <button className="text-center rounded-full p-2 px-3">Streams</button>
                </div>
                <p className="text-left font-bold py-8 pb-4 px-8"><span className="text-gray-500">02.</span>Searching Game</p>
                <div className="dark:bg-black-500 bg-gray-100 m-10 mt-0 rounded-xl p-4">
                    <div className="flex justify-between items-center mb-4 border-b-2 border-black-600">
                        <h2 className="">COD Warzone</h2>
                        <FilterIcon />
                    </div>
                    <nav className='max-h-24 overflow-y-auto'>
                        <ul className=''>
                            {randomUsers.slice(0, 5).map((user, index) => (
                                <li key={index} className="flex justify-between items-center mb-2">
                                    <span className="">{user}</span>
                                    <button className="bg-gray-300 text-black rounded-md h-auto px-2 mr-3">+</button>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <button className="dark:bg-white bg-black hover:bg-black-500 transition duration-500 dark:hover:bg-gray-300 text-white dark:text-black rounded-md p-2 w-full mt-4">Search Now</button>
                </div>
            </div>
        </main>
    );
};

export default MainBoard;