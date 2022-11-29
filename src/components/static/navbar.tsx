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
            <p className="text-sm font-light mr-[6px]">หน้าหลัก</p>
          </Link>

          <Link to='/about' title='เกี่ยวกับวิทยาลัยฯ' className="group relative flex items-center px-[.5rem] py-[20px]">
            <p className="text-sm font-light mr-[6px]">เกี่ยวกับวิทยาลัยฯ</p>
            <svg width="6px" fill="#ddd" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"></path></svg>

            <ul className="hidden group-hover:block absolute right-0 bottom-[0] translate-y-[calc(100%-12px)] w-max rounded overflow-hidden bg-[#1a1152]">
              <li><Link to='' title="" className="block text-sm text-right font-light py-3 px-5">ประวัติความเป็นมา</Link></li>
              <li><Link to='' title="" className="block text-sm text-right font-light py-3 px-5">วิสัยทัศ/พันธกิจ</Link></li>
              <li><Link to='' title="" className="block text-sm text-right font-light py-3 px-5">ตราสัญลักษณ์ประจำวิทยาลัยฯ</Link></li>
              <li><Link to='' title="" className="block text-sm text-right font-light py-3 px-5">สีประจำวิทยาลัย</Link></li>
              <li><Link to='' title="" className="block text-sm text-right font-light py-3 px-5">แผนที่</Link></li>
            </ul>
          </Link>

          <Link to='/management' title='ฝ่ายบริหาร' className="group relative flex items-center px-[.5rem] py-[20px]">
            <p className="text-sm font-light mr-[6px]">ฝ่ายบริหาร</p>
            <svg width="6px" fill="#ddd" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"></path></svg>

            <ul className="hidden group-hover:block absolute right-0 bottom-[0] translate-y-[calc(100%-12px)] w-max rounded overflow-hidden bg-[#1a1152]">
              <li><Link to='' title="" className="block text-sm text-right font-light py-3 px-5">ฝ่ายวิชาการ</Link></li>
              <li><Link to='' title="" className="block text-sm text-right font-light py-3 px-5">ฝ่ายกิจการนักศึกษา</Link></li>
              <li><Link to='' title="" className="block text-sm text-right font-light py-3 px-5">ฝ่ายแผนงานและความร่วมมือ</Link></li>
              <li><Link to='' title="" className="block text-sm text-right font-light py-3 px-5">ฝ่ายบริหารทรัพยากร</Link></li>
            </ul>
          </Link>

          <Link to='/school-info' title='ข้อมูลสถานศึกษา' className="group relative flex items-center px-[.5rem] py-[20px]">
            <p className="text-sm font-light mr-[6px]">ข้อมูลสถานศึกษา</p>
            <svg width="6px" fill="#ddd" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"></path></svg>

            <ul className="hidden group-hover:block absolute right-0 bottom-[0] translate-y-[calc(100%-12px)] w-max rounded overflow-hidden bg-[#1a1152]">
              <li><Link to='' title="" className="block text-sm text-right font-light py-3 px-5">จำนวนบุคลากร</Link></li>
              <li><Link to='' title="" className="block text-sm text-right font-light py-3 px-5">จำนวนนักเรียน นักศึกษา</Link></li>
              <li><Link to='' title="" className="block text-sm text-right font-light py-3 px-5">ข้อมูลหลักสูตรที่เปิดสอน</Link></li>
              <li><Link to='' title="" className="block text-sm text-right font-light py-3 px-5">ข้อมูลอาคารสถานที่</Link></li>
            </ul>
          </Link>

          <Link to='/quality-assurance' title='งานประกันคุณภาพ' className="group relative flex items-center px-[.5rem] py-[20px]">
            <p className="text-sm font-light mr-[6px]">งานประกันคุณภาพ</p>
            <svg width="6px" fill="#ddd" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"></path></svg>

            <ul className="hidden group-hover:block absolute right-0 bottom-[0] translate-y-[calc(100%-12px)] w-max rounded overflow-hidden bg-[#1a1152]">
              <li><Link to='' title="" className="block text-sm text-right font-light py-3 px-5">แนวทางการประเมินคุณภาพการศึกษา</Link></li>
              <li><Link to='' title="" className="block text-sm text-right font-light py-3 px-5">แผนปฏิบัติงานประจำปีการศึกษา</Link></li>
              <li><Link to='' title="" className="block text-sm text-right font-light py-3 px-5">แผนพัฒนาการจัดการศึกษา</Link></li>
              <li><Link to='' title="" className="block text-sm text-right font-light py-3 px-5">5 ด้าน / 25 ประเด็นการประเมิน</Link></li>
              <li><Link to='' title="" className="block text-sm text-right font-light py-3 px-5">3 มาตรฐาน / 9 ประเด็นการประเมิน</Link></li>
              <li><Link to='' title="" className="block text-sm text-right font-light py-3 px-5">JR_แนวทางการประเมินคุณภาพ(บรรยาย)</Link></li>
              <li><Link to='' title="" className="block text-sm text-right font-light py-3 px-5">SAR</Link></li>
            </ul>
          </Link>

          <Link to='/department' title='แผนกวิชา' className="group relative flex items-center px-[.5rem] py-[20px]">
            <p className="text-sm font-light mr-[6px]">แผนกวิชา</p>
            <svg width="6px" fill="#ddd" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"></path></svg>

            <ul className="hidden group-hover:block absolute right-0 bottom-[0] translate-y-[calc(100%-12px)] w-max rounded overflow-hidden bg-[#1a1152]">
              <li><Link to='' title="" className="block text-sm text-right font-light py-3 px-5">สาขาการบัญชี</Link></li>
              <li><Link to='' title="" className="block text-sm text-right font-light py-3 px-5">สาขาการบัญชี</Link></li>
              <li><Link to='' title="" className="block text-sm text-right font-light py-3 px-5">สาขาการบัญชี</Link></li>
              <li><Link to='' title="" className="block text-sm text-right font-light py-3 px-5">สาขาการบัญชี</Link></li>
              <li><Link to='' title="" className="block text-sm text-right font-light py-3 px-5">สาขาการบัญชี</Link></li>
              <li><Link to='' title="" className="block text-sm text-right font-light py-3 px-5">สาขาการบัญชี</Link></li>
            </ul>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default NavbarStaticComponent
