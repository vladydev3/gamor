const CategoriesSection = () => {
    const categories = ['Action Games', 'Sports Games', 'Adventure Games', 'Arcade Games', 'Fantasy Games', 'Strategy Games', 'Shooter Games', 'Simulation Games', 'Fight Games', 'Puzzle Games'];

    return (
        <section className="cursor-default m-auto mt-20 max-w-screen-lg grid grid-cols-4 grid-rows-2 gap-4">
            <h1 className="text-left text-2xl col-span-4">Trending Categories</h1>
            {categories.slice(0, 6).map((category, index) => (
                <div key={index} className="border rounded p-2">
                    <p>/0{index + 1}</p>
                    <p>{category}</p>
                    {/* <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    </button> */}
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6 12H18M18 12L13 7M18 12L13 17" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                </div>
            ))}
            <div className="col-span-2 border rounded p-2 flex items-center justify-center">
                <p>View All Categories</p>
            </div>
        </section>
    )
};

export default CategoriesSection;