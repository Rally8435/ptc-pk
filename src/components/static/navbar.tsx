import React from "react";
import { Link } from "react-router-dom";
import Banner from '../../assets/banner.png';

function NavbarStaticComponent() {
  return (
    <nav className="flex justify-center bg-[#170f33]">
      <div className="flex justify-between items-center w-[calc(100%-40px)] max-w-7xl">
        <Link to='/' title='หน้าแรกของ วิทยาลัยเทคโนโลยีภูเขียว' className="block py-[14px]">
          <img src={Banner} alt="banner-ptc-logo" />
        </Link>

        <div className="flex text-[#ddd]">
          <Link to='/' title='หน้าแรกของ วิทยาลัยเทคโนโลยีภูเขียว' className="px-[.5rem] py-[20px]">
            <p className="text-sm font-light">หน้าหลัก</p>
          </Link>
          <Link to='/about' title='เกี่ยวกับวิทยาลัยฯ' className="px-[.5rem] py-[20px]">
            <p className="text-sm font-light">เกี่ยวกับวิทยาลัยฯ</p>
          </Link>
          <Link to='/management' title='ฝ่ายบริหาร' className="px-[.5rem] py-[20px]">
            <p className="text-sm font-light">ฝ่ายบริหาร</p>
          </Link>
          <Link to='/school-info' title='ข้อมูลสถานศึกษา' className="px-[.5rem] py-[20px]">
            <p className="text-sm font-light">ข้อมูลสถานศึกษา</p>
          </Link>
          <Link to='/quality-assurance' title='งานประกันคุณภาพ' className="px-[.5rem] py-[20px]">
            <p className="text-sm font-light">งานประกันคุณภาพ</p>
          </Link>
          <Link to='/department' title='แผนกวิชา' className="px-[.5rem] py-[20px]">
            <p className="text-sm font-light">แผนกวิชา</p>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default NavbarStaticComponent
