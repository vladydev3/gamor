
const MainBoard = () => {
    return (
        <main className="flex min-h-screen h-1/2 items-center justify-between max-w-screen-lg mx-auto ">
            <div className="flex-1 bg-black-600 p-8 py-20 h-dvh rounded-l-3xl">
                <h1 className="text-wrap text-4xl text-white font-bold">start <span className="text-violet-600">streaming</span> games differently</h1>
                <p className="text-gray-400">gamor now has <span className="text-white ">stream party</span> platform</p>
            </div>
            <div className="flex-1 bg-orange-500 p-8 py-20 h-dvh">Section 2</div>
            <div className="flex-1 bg-black-600 p-8 py-20 h-dvh rounded-r-3xl">Section 3</div>            
        </main>
    );
};

export default MainBoard;