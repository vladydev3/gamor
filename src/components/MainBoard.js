const MainBoard = () => {
    return (
        <main className="h-full flex pb-4 items-stretch justify-between max-w-screen-lg mx-auto">
            <div className="flex-1 bg-black-550 rounded-l-3xl">
                <h1 className="text-5xl text-white m-8 mt-16">start <span className="text-violet-600">streaming</span> games differently</h1>
                <p className="text-gray-400 text-sm m-10">gamor now has <span className="text-white">stream party</span> platform</p>
                <ul className="flex gap-10 m-10 mt-14">
                    <li><a href="#" className="transition duration-500 hover:text-orange-500 bg-black-700 text-white rounded-full py-2 px-4">Create account</a></li>
                    <li><a href="#" className="transition duration-500 hover:text-orange-500">Sign in</a></li>
                </ul>
            </div>
            <div className="flex-1 text-center bg-orange-500 ">
                <h1 className="text-xl p-2 mt-6">Fortnite New Season</h1>
                <p className="text-sm  text-orange-700">Join live stream</p>
                <svg className="rounded-full cursor-pointer transition-padding duration-500 bg-gray-400 hover:p-1 bg-opacity-50 p-2 absolute ml-16 mt-5" width="40px" height="40px" viewBox="0 0 24 24" version="1.2" baseProfile="tiny" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 14h-6c-.553 0-1-.448-1-1s.447-1 1-1h6c.553 0 1 .448 1 1s-.447 1-1 1zM18 17c-.553 0-1-.448-1-1v-6c0-.552.447-1 1-1s1 .448 1 1v6c0 .552-.447 1-1 1zM9 6c1.654 0 3 1.346 3 3s-1.346 3-3 3-3-1.346-3-3 1.346-3 3-3m0-2c-2.764 0-5 2.238-5 5s2.236 5 5 5 5-2.238 5-5-2.236-5-5-5zM9 17c2.021 0 3.301.771 3.783 1.445-.683.26-1.969.555-3.783.555-1.984 0-3.206-.305-3.818-.542.459-.715 1.777-1.458 3.818-1.458m0-2c-3.75 0-6 2-6 4 0 1 2.25 2 6 2 3.518 0 6-1 6-2 0-2-2.354-4-6-4z" fill="#000000" />
                </svg>
                <p className="text-orange-500 bg-white p-3 my-8 w-1/2 m-auto cursor-default rounded-full">11 : 45</p>
                <img src="skin_fortnite.png" alt="fortnite skin" className="w-1/2 m-auto" />
            </div>
            <div className="flex-1 bg-black-550 rounded-r-3xl">Section 3</div>            
        </main>
    );
};

export default MainBoard;