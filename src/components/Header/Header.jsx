import React from "react";
import { Link, NavLink } from "react-router-dom";
import About from "../About/About";
import Contact from "../Contact/Contact";

function Header() {
  return (
    <header className="shadow sticky z-50 top-0">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" className="flex items-center">
            <img
              src="https://scontent.fluh1-2.fna.fbcdn.net/v/t39.30808-6/300426695_564665088778415_2311533075677844583_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=RjKVr3QoENwQ7kNvgGS7bxp&_nc_ht=scontent.fluh1-2.fna&oh=00_AYC4YjAczN08QYx_u_duQ79QAQeOO5cDzEhsS2GQdQLjYw&oe=665FB18F"
              className="mr-3 h-14"
              alt="Logo"
            />
          </Link>
          <div className="flex items-center lg:order-2">
            <Link
              to="login"
              className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
            >
              Log in
            </Link>
            <Link
              to="signup"
              className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
            >
              SignUp
            </Link>
          </div>
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <NavLink
                to="/"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 
                    ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Home
                </NavLink>
             
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 
                    ${
                      isActive ?  " text-orange-700" : "text-gray-700" 
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  
                  }
                >
                  About
                </NavLink>
             
              </li>
              <li>
                <NavLink
                to="/contact"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 
                    ${
                      isActive ? "text-orange-700":  "text-gray-700"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Contact
                </NavLink>
             
              </li>
              <li>
                <NavLink
                to="/products"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 
                    ${
                      isActive ? "text-orange-700":  "text-gray-700"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Products
                </NavLink>
             
              </li>
              <li>
                <NavLink
                to="/admin"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 
                    ${
                      isActive ? "text-orange-700":  "text-gray-700"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Admin
                </NavLink>
             
              </li>
             
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
