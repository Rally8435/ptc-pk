import React from "react";

function NavbarStaticComponent() {
  return (
    <nav className="flex justify-center bg-[#170f33]">
      <div className="flex justify-between items-center w-[calc(100%-40px)] max-w-7xl h-[60px] text-[#fff]">
        <div>LOGO</div>
        <div>Menu</div>
      </div>
    </nav>
  )
}

export default NavbarStaticComponent
