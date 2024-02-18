const CategoriesSection = () => {
    const categories = ['Action Games', 'Sports Games', 'Adventure Games', 'Arcade Games', 'Fantasy Games', 'Strategy Games', 'Shooter Games', 'Simulation Games', 'Fight Games', 'Puzzle Games'];
    

    return (
        <section className="cursor-default m-auto mt-10 max-w-screen-lg grid grid-cols-4 grid-rows-2 gap-4 pb-8">
            <h1 className=" text-2xl col-span-4 flex items-center ">Trending Categories</h1>
            {categories.slice(0, 7).map((category, index) => (
                <div key={index} className="dark:bg-black-550 bg-white-400 rounded-lg p-6">
                    <p className="text-gray-500">/0{index + 1}</p>
                    <p>{category}</p>
                    <svg className="cursor-pointer" width='30px' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6 12H18M18 12L13 7M18 12L13 17" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                </div>
            ))}
            <div className="col-span-1 dark:bg-black-550 bg-white-400 rounded-lg p-6 text-left  justify-center">
                <p className="text-gray-500">View All</p>
                <p>All Categories</p>
                <svg className="cursor-pointer hover:" width='30px' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6 12H18M18 12L13 7M18 12L13 17" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
            </div>
        </section>
    )
};

export default CategoriesSection;