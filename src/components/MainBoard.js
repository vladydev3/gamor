import React from 'react';
import Image from 'next/image';

const MainBoard = () => {

    const randomUsers = ['Dr Team', 'Mia Plays', 'Keoxer', 'Nickmerc', 'Lolo'];

    return (
        <main className="h-full cursor-default flex pb-4 items-stretch justify-between max-w-screen-lg mx-auto">
            <div className="flex-1 dark:bg-black-550 bg-white-400 rounded-l-3xl">
                <h1 className="text-5xl dark:text-white text-black m-8 mt-16">start <span className="dark:text-violet-600 text-orange-500">streaming</span> games differently</h1>
                <p className="dark:text-gray-400 text-black-500 text-sm m-10">gamor now has <span className="dark:text-white font-bold">stream party</span> platform</p>
                <ul className="flex gap-10 m-10 mt-14">
                    <li><a href="#" className="transition duration-500 dark:hover:text-orange-500 hover:text-orange-500 dark:bg-black-600 bg-white-300 shadow-md shadow-black dark:text-white text-black rounded-full py-2 px-4">Create account</a></li>
                    <li><a href="#" className="transition duration-500 hover:text-orange-500">Sign in</a></li>
                </ul>
            </div>
            <div className="flex-1 text-center dark:bg-orange-500 bg-violet-600">
                <h1 className="text-xl text-white p-2 mt-6">Fortnite New Season</h1>
                <p className="text-sm  text-gray-900">Join live stream</p>
                <svg className="rounded-full cursor-pointer transition-padding duration-500 bg-gray-400 hover:p-1 bg-opacity-50 p-2 absolute ml-16 mt-5" width="40px" height="40px" viewBox="0 0 24 24" version="1.2" baseProfile="tiny" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 14h-6c-.553 0-1-.448-1-1s.447-1 1-1h6c.553 0 1 .448 1 1s-.447 1-1 1zM18 17c-.553 0-1-.448-1-1v-6c0-.552.447-1 1-1s1 .448 1 1v6c0 .552-.447 1-1 1zM9 6c1.654 0 3 1.346 3 3s-1.346 3-3 3-3-1.346-3-3 1.346-3 3-3m0-2c-2.764 0-5 2.238-5 5s2.236 5 5 5 5-2.238 5-5-2.236-5-5-5zM9 17c2.021 0 3.301.771 3.783 1.445-.683.26-1.969.555-3.783.555-1.984 0-3.206-.305-3.818-.542.459-.715 1.777-1.458 3.818-1.458m0-2c-3.75 0-6 2-6 4 0 1 2.25 2 6 2 3.518 0 6-1 6-2 0-2-2.354-4-6-4z" fill="#000000" />
                </svg>
                <p className="text-orange-500 bg-white p-3 my-8 w-1/2 m-auto cursor-default rounded-full">11 : 45</p>
                <Image 
                    src='/skin_fortnite.png' alt="Skin Fortnite"
                    width={170}
                    height={0}
                    className='m-auto hidden md:block'
                />
            </div>
            <div className="flex-1 dark:bg-black-550 bg-white-400 rounded-r-3xl ">
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
                        <svg className='cursor-pointer' width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.90693 3.9999C9.93791 3.99996 9.96894 4.00001 10 4.00001C10.0311 4.00001 10.0621 3.99996 10.0931 3.9999C10.4618 3.99929 10.8242 3.99869 11.147 4.08519C12.0098 4.31636 12.6836 4.99023 12.9148 5.85296C13.0013 6.1758 13.0007 6.53821 13.0001 6.90693C13.0001 6.93792 13 6.96895 13 7.00001H21C21.5523 7.00001 22 7.44772 22 8.00001C22 8.55229 21.5523 9.00001 21 9.00001H13C13 9.03107 13.0001 9.0621 13.0001 9.09309C13.0007 9.46181 13.0013 9.82422 12.9148 10.1471C12.6836 11.0098 12.0098 11.6837 11.147 11.9148C10.8242 12.0013 10.4618 12.0007 10.0931 12.0001C10.0621 12.0001 10.0311 12 10 12C9.96894 12 9.93791 12.0001 9.90692 12.0001C9.5382 12.0007 9.17579 12.0013 8.85295 11.9148C7.99022 11.6837 7.31635 11.0098 7.08519 10.1471C6.99868 9.82421 6.99928 9.46181 6.9999 9.09308C6.99995 9.0621 7 9.03106 7 9.00001H5C4.44772 9.00001 4 8.55229 4 8.00001C4 7.44772 4.44772 7.00001 5 7.00001H7C7 6.96895 6.99995 6.93792 6.9999 6.90693C6.99928 6.53821 6.99868 6.1758 7.08519 5.85296C7.31635 4.99023 7.99022 4.31636 8.85295 4.08519C9.17579 3.99869 9.5382 3.99929 9.90693 3.9999ZM9.49861 6.00536C9.39195 6.01022 9.36685 6.01805 9.37059 6.01704C9.19804 6.06328 9.06327 6.19805 9.01704 6.3706C9.0162 6.37411 9.00963 6.40483 9.00535 6.49861C9.00024 6.61064 9 6.75845 9 7.00001V9.00001C9 9.24156 9.00024 9.38937 9.00535 9.5014C9.01021 9.60806 9.01804 9.63315 9.01704 9.62942C9.06327 9.80196 9.19804 9.93674 9.37059 9.98297C9.36685 9.98197 9.39195 9.98979 9.49861 9.99466C9.61063 9.99977 9.75844 10 10 10C10.2416 10 10.3894 9.99977 10.5014 9.99466C10.608 9.98979 10.6331 9.98197 10.6294 9.98297C10.802 9.93674 10.9367 9.80196 10.983 9.62942C10.982 9.63315 10.9898 9.60806 10.9946 9.5014C10.9998 9.38937 11 9.24156 11 9.00001V7.00001C11 6.75845 10.9998 6.61064 10.9946 6.49861C10.9898 6.39196 10.982 6.36686 10.983 6.3706M9.49861 6.00536C9.61063 6.00025 9.75844 6.00001 10 6.00001L9.49861 6.00536ZM10 6.00001C10.2416 6.00001 10.3894 6.00025 10.5014 6.00536L10 6.00001ZM10.5014 6.00536C10.5952 6.00963 10.6259 6.0162 10.6294 6.01704L10.5014 6.00536ZM10.6298 6.01713C10.6298 6.01713 10.6296 6.0171 10.6294 6.01704L10.6298 6.01713ZM15.9069 11.9999C15.9379 12 15.9689 12 16 12C16.0311 12 16.0621 12 16.0931 11.9999C16.4618 11.9993 16.8242 11.9987 17.147 12.0852C18.0098 12.3164 18.6836 12.9902 18.9148 13.853C19.0013 14.1758 19.0007 14.5382 19.0001 14.9069C19.0001 14.9379 19 14.9689 19 15H21C21.5523 15 22 15.4477 22 16C22 16.5523 21.5523 17 21 17H19C19 17.0311 19.0001 17.0621 19.0001 17.0931C19.0007 17.4618 19.0013 17.8242 18.9148 18.1471C18.6836 19.0098 18.0098 19.6837 17.147 19.9148C16.8242 20.0013 16.4618 20.0007 16.0931 20.0001C16.0621 20.0001 16.0311 20 16 20C15.9689 20 15.9379 20.0001 15.9069 20.0001C15.5382 20.0007 15.1758 20.0013 14.853 19.9148C13.9902 19.6837 13.3164 19.0098 13.0852 18.1471C12.9987 17.8242 12.9993 17.4618 12.9999 17.0931C12.9999 17.0621 13 17.0311 13 17H5C4.44772 17 4 16.5523 4 16C4 15.4477 4.44772 15 5 15H13C13 14.969 12.9999 14.9379 12.9999 14.9069C12.9993 14.5382 12.9987 14.1758 13.0852 13.853C13.3164 12.9902 13.9902 12.3164 14.853 12.0852C15.1758 11.9987 15.5382 11.9993 15.9069 11.9999ZM15.4986 14.0054C15.392 14.0102 15.3669 14.018 15.3706 14.017C15.198 14.0633 15.0633 14.1981 15.017 14.3706C15.018 14.3669 15.0102 14.392 15.0054 14.4986C15.0002 14.6106 15 14.7585 15 15V17C15 17.2416 15.0002 17.3894 15.0054 17.5014C15.0102 17.6081 15.018 17.6332 15.017 17.6294C15.0633 17.802 15.198 17.9367 15.3706 17.983C15.3669 17.982 15.392 17.9898 15.4986 17.9947C15.6106 17.9998 15.7584 18 16 18C16.2416 18 16.3894 17.9998 16.5014 17.9947C16.608 17.9898 16.6331 17.982 16.6294 17.983C16.802 17.9367 16.9367 17.802 16.983 17.6294C16.982 17.6332 16.9898 17.6081 16.9946 17.5014C16.9998 17.3894 17 17.2416 17 17V15C17 14.7585 16.9998 14.6106 16.9946 14.4986C16.9898 14.392 16.982 14.3669 16.983 14.3706C16.9367 14.1981 16.802 14.0633 16.6294 14.017C16.6331 14.018 16.608 14.0102 16.5014 14.0054C16.3894 14.0002 16.2416 14 16 14C15.7584 14 15.6106 14.0002 15.4986 14.0054Z" fill="#6B505B"/>
                        </svg>
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