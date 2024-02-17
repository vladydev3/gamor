const NavBar = () => {
    return (
        <nav className="flex justify-between px-20 py-12 ">
            <ul className="flex gap-8">
                <li className="text-orange-500"><a href="#">Home</a></li>
                <li><a href="#" className="transition duration-500 hover:text-orange-500">Streams</a></li>
                <li><a href="#" className="transition duration-500 hover:text-orange-500">Party</a></li>
                <li><a href="#" className="transition duration-500 hover:text-orange-500 ">Premium</a></li>
            </ul>
            {/* <ul className="flex justify-center flex-grow ">
                <li className=""><a href="#" className="text-4xl ">Gamor</a></li>
            </ul> */}
            <ul className="flex gap-12">
                <li><a href="#" className="transition duration-500 hover:text-orange-500">Sign in</a></li>
                <li><a href="#" className="transition duration-500 hover:text-orange-500 border-2 border-gray-600 bg-black-100 text-white rounded-full py-2 px-4">Create account</a></li>
            </ul>
        </nav>
    )
};

export default NavBar;