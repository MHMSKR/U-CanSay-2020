import React from "react";
import fata from "../images/fata.jpg";
import down from "../images/down.jpg";
import wang from "../images/wang.jpg";
import kmitl from '../images/kmitl.jpg'
import "./About.css";

function About() {
  return (
    <div>
      <navBar />
      <div className="about">
        <div className="about-container">
          <div className="history">
            <div className="history-header">
              <h1>HiStoRy<i class="fas fa-dove"></i></h1>
              
            </div>
            <div className="history-paragraph">
              <p>
                Website U Can Say
                ของพวกเราเล็งเห็นถึงความสำคัญของการเขียนบทความบนอินเทอร์เน็ต
                โดยมีวัตถุประสงค์เพื่อให้ผู้คนสามารถเข้ามาเปิดอ่านบทความที่เราได้เขียน
                โดยบทความของเราจะเป็นบทความที่เราเขียนขึ้นมาแบ่งเป็นหลายๆหมวด
                เพื่อให้ผู้คนได้อ่านหลายๆแนว
                การเขียนในแต่ละบทความเราใส่ใจในเนื้อหา
                และใส่ใจว่าผู้คนที่เขาเข้ามาอ่านเขาต้องรู้สึกดีกับบทความของเรา
                รวมถึงได้เปิดกว้างในด้านของข้อคิด
                เน้นการสร้างแรงบันดาลใจกับผู้คน
                และเป็นการฝึกฝนตัวเราในทักษะด้านการเขียน
              </p>
            </div>
            <div className="contact">
              <div className="contact-bar"><h1>Contact Us</h1></div>
              <div className="my-contact">
                <div className="my-contact-item">
                  <img src={fata} alt="" />
                  <div className="name-me">
                    <h5>MISS:FATAHIYAH BRAHENG</h5>
                    <h5>STUDENT ID:61011408</h5>
                  </div>
                  <div className="face-link">
                    <i class="fab fa-facebook"></i>
                    <a href="https://www.facebook.com/fatahiyah.br/about_places">FATAHIYAH BRAHENG</a>
                  </div>
                  <div className="ig-link">
                    <i class="fab fa-instagram"></i>
                    <a href="https://www.instagram.com/faataa_br/">FATAA_BR</a>
                  </div>
                </div>
                <div className="my-contact-item">
                  <img src={down} alt="" />
                  <div className="name-me">
                    <h5>MISS:FIRDOWNS KUNING</h5>
                    <h5>STUDENT ID:61011409</h5>
                  </div>
                  <div className="face-link">
                    <i class="fab fa-facebook"></i>
                    <a href="https://www.facebook.com/firdows.langkasuka">FIRDOWNS KUNING</a>
                  </div>
                  <div className="ig-link">
                    <i class="fab fa-instagram"></i>
                    <a href="https://www.instagram.com/medicine.fd/">MEDICINE.FD</a>
                  </div>
                </div>
                <div className="my-contact-item">
                  <img src={wang} alt="" />
                  <div className="name-me-w">
                    <h5>MR. : MUHAMMADSUKREE YAKOH</h5>
                    <h5>STUDENT ID:61011411</h5>
                  </div>
                  <div className="face-link">
                    <i class="fab fa-facebook"></i>
                    <a href="https://www.facebook.com/mhm.sukree.y/about">MHM SUKREE YAKOH</a>
                  </div>
                  <div className="ig-link">
                    <i class="fab fa-instagram"></i>
                    <a href="https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.instagram.com%2Fsukree_201242%3Ffbclid%3DIwAR3DjPm1BtebN5FJoXcszlOFV07ZzouvE3musYUQ4gtftgWS22G9qO_DOr4&h=AT0cO0NvuljJbZTnZZYdQS3IZHoIuiV4FtqlPlFoepO5Oc7gfk8Sb1dhK7GYv8KILH8ngLQODpLWkgguAPJn8c5PnwgZrrpg-s1zkWPDmZiqTSQTWpKKncXJPtWOCbI1b5Ii">_MHM_SKR_</a>
                  </div>
                </div>
              </div>
              <div className="kmitl">
                  <img src={kmitl} alt=""/>
                  <h4>king mongkut's institute of technology ladkrabang</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
