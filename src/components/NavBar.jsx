import { useState } from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"
const NavBar = () => {
  const [toggle, setToggle] = useState(false);
  useEffect(()=>{
    AOS.init({duration:500, anchorPlacement:"top-center"}),[]
  })
  return (
    <nav className={`w-full flex py-6 justify-between items-center navbar `}>

{/* nav bar for desktop and large devices */}
      <img src={logo} alt="hoobank" className="w-[124px] h-[32px]" />
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              index === navLinks.length - 1 ? "mr-0" : "mr-10"
            } text-white hover:text-[cyan] `}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

{/*navbar for small devices */}
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain cursor-pointer"
          onClick={() => setToggle((prev) => !prev)}
        />
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 z-[999] bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl `}
          data-aos="fade-up"
          //  The sidebar here can be tailwind command 
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] ${
                  index === navLinks.length - 1 ? "mb-0" : "mb-4"
                } text-white hover:text-[cyan]`}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
