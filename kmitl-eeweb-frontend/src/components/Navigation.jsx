import React from "react";
import { withRouter } from "react-router-dom";

export default function Navigation(props) {
return (
  <div className="Navigation">
  <header id="header" class="fixed-top">
    <div class="container d-flex align-items-center">
      <h1 class="logo mr-auto"><a href="/">EE KMITL</a></h1>
      <nav class="nav-menu d-none d-lg-block">
        <ul>
          <li class="active"><a href="/">หน้าหลักค่าย</a></li>
          <li><a href="#about">เกี่ยวกับเรา</a></li>
          <li><a href="#covid">โควิด-19</a></li>
          <li><a href="#faq">FAQ</a></li>
          <li><a href="#contact">ติดต่อเรา</a></li>
          <li className="drop-down">
            <a>63010104@kmitl.ac.th</a>
            <ul>
              <center>
                <li><a href="/accounts/userprofile?next=/">ข้อมูลส่วนตัว</a></li>
              </center>
              <center>
                <li><a href="/accounts/email?next=/">เปลี่ยนอีเมล</a></li>
              </center>
              <li><a class="btn btn-danger btn-block" style={{width:"70%", color:"white", margin:"auto"}}
                  href="/accounts/logout?next=/">ออกจากระบบ</a></li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  </header>
  </div>
);
}
