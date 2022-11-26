import React from "react";
import LOGO from '../../assets/logo.png';

function FooterStaticComponent() {
  return (
    <footer className="flex justify-center mt-[50px] py-5 bg-[#222]">
      <div className="flex gap-x-3 w-[calc(100%-40px)] max-w-7xl">
        <div className="flex-1 text-[#eee]">
          <img src={LOGO} alt="ptc-logo-footer" className="w-[100px]" />

          <p className="text-lg mt-5">ที่อยู่</p>
          <p className="text-sm text-[#888] leading-[1.6rem] mt-1">199 ม.17 ถนนภูเขียว - เกษตรกรสมบูรณ์ บ.ผักปัง ต.ผักปัง อ.ภูเขียว จ.ชัยภูมิ 36110</p>

          <p className="text-lg mt-5">ติดต่อ</p>
          <div className="flex gap-x-12 mt-1">
            <a href="tel:+044862202" className="flex items-center py-1 gap-x-2">
              <svg width="18px" fill="#aaa" viewBox="0 0 448 512"><path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm90.7 96.7c9.7-2.6 19.9 2.3 23.7 11.6l20 48c3.4 8.2 1 17.6-5.8 23.2L168 231.7c16.6 35.2 45.1 63.7 80.3 80.3l20.2-24.7c5.6-6.8 15-9.2 23.2-5.8l48 20c9.3 3.9 14.2 14 11.6 23.7l-12 44C336.9 378 329 384 320 384C196.3 384 96 283.7 96 160c0-9 6-16.9 14.7-19.3l44-12z"></path></svg>
              <p className="text-[15px] text-[#aaa] leading-none font-medium">044 862 202</p>
            </a>
            <a href="tel:+0635177488" className="flex items-center py-1 gap-x-2">
              <svg width="18px" fill="#aaa" viewBox="0 0 448 512"><path d="M384 32c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96C0 60.7 28.7 32 64 32H384zm-90.7 96.7c-9.7-2.6-19.9 2.3-23.7 11.6l-20 48c-3.4 8.2-1 17.6 5.8 23.2L280 231.7c-16.6 35.2-45.1 63.7-80.3 80.3l-20.2-24.7c-5.6-6.8-15-9.2-23.2-5.8l-48 20c-9.3 3.9-14.2 14-11.6 23.7l12 44C111.1 378 119 384 128 384c123.7 0 224-100.3 224-224c0-9-6-16.9-14.7-19.3l-44-12z"></path></svg>
              <p className="text-[15px] text-[#aaa] leading-none font-medium">063 517 7488</p>
            </a>
          </div>

          <div className="flex">
            <a href="mailto:ptcpk2565@gmail.com" className="flex items-center py-1 gap-x-2">
              <svg width="18px" fill="#aaa" viewBox="0 0 448 512"><path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM218 271.7L64.2 172.4C66 156.4 79.5 144 96 144H352c16.5 0 30 12.4 31.8 28.4L230 271.7c-1.8 1.2-3.9 1.8-6 1.8s-4.2-.6-6-1.8zm29.4 26.9L384 210.4V336c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V210.4l136.6 88.2c7 4.5 15.1 6.9 23.4 6.9s16.4-2.4 23.4-6.9z"></path></svg>
              <p className="text-[15px] text-[#aaa] leading-none font-medium">ptcpk2565@gmail.com</p>
            </a>
          </div>
        </div>

        <div className="flex-1 text-[#aaa]">
          <p className="text-lg text-[#eee]">หน่วยงานส่วนอื่นๆ</p>

          <ul className="mt-2 list-disc list-inside">
            <li><a rel="nofollow" href="https://www.v-cop.go.th/v-cop/" title="ศูนย์เครือข่ายกำลังคนอาชีวศึกษา" className="text-sm leading-[1.8rem] font-light">ศูนย์เครือข่ายกำลังคนอาชีวศึกษา</a></li>
            <li><a rel="nofollow" href="https://www.moe.go.th/" title="กระทรวงศึกษาธิการ" className="text-sm leading-[1.8rem] font-light">กระทรวงศึกษาธิการ</a></li>
            <li><a rel="nofollow" href="https://www.obec.go.th/" title="สำนักงานคณะกรรมการการศึกษาขั้นพื้นฐาน" className="text-sm leading-[1.8rem] font-light">สำนักงานคณะกรรมการการศึกษาขั้นพื้นฐาน</a></li>
            <li><a rel="nofollow" href="https://opec.go.th/" title="สำนักงานคณะกรรมการส่งเสริมการศึกษาเอกชน" className="text-sm leading-[1.8rem] font-light">สำนักงานคณะกรรมการส่งเสริมการศึกษาเอกชน</a></li>
            <li><a rel="nofollow" href="https://www.ksp.or.th/ksp2018/" title="คุรุสภา" className="text-sm leading-[1.8rem] font-light">คุรุสภา</a></li>
            <li><a rel="nofollow" href="https://www.studentloan.or.th/index.php" title="กองทุนกู้ยืมเพื่อการศึกษา" className="text-sm leading-[1.8rem] font-light">กองทุนกู้ยืมเพื่อการศึกษา</a></li>
            <li><a rel="nofollow" href="https://vesar.org/#/" title="ระบบรายงานการประเมินตนเองของสถานศึกษาอาชีวศึกษา" className="text-sm leading-[1.8rem] font-light">ระบบรายงานการประเมินตนเองของสถานศึกษาอาชีวศึกษา</a></li>
          </ul>
        </div>

        <div className="flex-1 text-center rounded bg-[#f5f5f5]">XXX</div>
      </div>
    </footer>
  )
}

export default FooterStaticComponent
