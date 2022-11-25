import React from "react";
import { Link } from "react-router-dom";
import Banner from '../../assets/banner.png';

function NavbarStaticComponent() {
  return (
    <nav className="flex justify-center bg-[#170f33]">
      <div className="flex justify-between items-center w-[calc(100%-40px)] max-w-7xl text-[#fff]">
        <Link to='/' title='หน้าแรกของ วิทยาลัยเทคโนโลยีภูเขียว' className="block py-[14px]">
          <img src={Banner} alt="banner-ptc-logo" />
        </Link>
        
        <div>Menu</div>
      </div>
    </nav>
  )
}

export default NavbarStaticComponent
