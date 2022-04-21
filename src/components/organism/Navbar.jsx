
function Navbar() {
    return (
        <div>
            <nav className="bg-transparent">
                <div className="py-8 px-4 md:px-32">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                {/* <img src={traveliaLogo} width="128px" alt="travelia-logo" /> */}
                                <h1 className="font-bold text-xl text-blue-800">Newsletter</h1>
                            </div>
                            <div className="hidden md:block">
                                <div className="ml-10 flex items-center space-x-4">
                                    <a href="/" alt="link" className=" text-blue-600 hover:bg-blue-800 hover:text-white px-3 py-2 rounded-xl text-sm font-medium">
                                        Homepage
                                    </a>
                                    <a href="/tickets" alt="link" className="text-blue-600 hover:bg-blue-800 hover:text-white px-3 py-2 rounded-xl text-sm font-medium">
                                        Tickets
                                    </a>
                                    <a href="/category" alt="link" className="text-blue-600 hover:bg-blue-800 hover:text-white px-3 py-2 rounded-xl text-sm font-medium">Category
                                    </a>
                                    <a href="/contact" alt="link" className="text-blue-600 hover:bg-blue-800 hover:text-white px-3 py-2 rounded-xl text-sm font-medium">
                                        Contact
                                    </a>
                                    <a href="/cart">
                                        <div className="flex justify-between items-center bg-blue-50 rounded-md py-2 px-4">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd" />
                                            </svg>
                                            <div className="count">
                                                <h1 className="text-md font-bold text-blue-600 ml-2">100</h1>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;