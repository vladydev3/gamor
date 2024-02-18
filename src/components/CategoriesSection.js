import ArrowIcon from "./icons/ArrowIcon";

const CategoriesSection = () => {
    const categories = ['Action Games', 'Sports Games', 'Adventure Games', 'Arcade Games', 'Fantasy Games', 'Strategy Games', 'Shooter Games', 'Simulation Games', 'Fight Games', 'Puzzle Games'];
    

    return (
        <section className="cursor-default m-auto mt-10 max-w-screen-lg grid grid-cols-4 grid-rows-2 gap-4 pb-8">
            <h1 className=" text-2xl col-span-4 flex items-center ">Trending Categories</h1>
            {categories.slice(0, 7).map((category, index) => (
                <div key={index} className="dark:bg-black-550 bg-white-400 rounded-lg p-6">
                    <p className="text-gray-500">/0{index + 1}</p>
                    <p>{category}</p>
                    <ArrowIcon />
                </div>
            ))}
            <div className="col-span-1 dark:bg-black-550 bg-white-400 rounded-lg p-6 text-left  justify-center">
                <p className="text-gray-500">View All</p>
                <p>All Categories</p>
                <ArrowIcon />
            </div>
        </section>
    )
};

export default CategoriesSection;