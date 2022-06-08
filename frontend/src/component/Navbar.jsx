/* eslint-disable jsx-a11y/alt-text */
import logoKemenkeu from "../assets/kemenkeu.png"
import {Link} from "react-router-dom";

function Navbar(){
    return(
        <div>
            <nav className="bg-yellow-500 border-gray-200 px-2 sm:px-4 py-2.5 rounded">
                <div className="container flex flex-wrap justify-between items-center mx-auto">
                    <Link to="/" className="flex items-center">
                        <img src={logoKemenkeu} className="mr-3 h-6 sm:h-9" alt="Kementerian Keuangan Logo" />
                        <span className="self-center text-xl font-semibold whitespace-nowrap">Kementerian Keuangan</span>
                    </Link>
                    <div className="flex md:order-2">
                        <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 hidden">Get started</button>
                    </div>
                    <div className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1">
                        <ul className="flex flex-col md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                        <li>
                            <Link to="/" className=" py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0" aria-current="page">Beranda</Link>
                        </li>
                        <li>
                            <Link to="/manajemen-keuangan" className=" py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">Manajemen Keuangan</Link>
                        </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;