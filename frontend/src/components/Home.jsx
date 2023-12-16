import React  from "react";
import { Link } from "react-router-dom";

function Home(){
    
    return(
        <div>
        <div>
  <header>
    <div className="header-area ">
      <div id="sticky-header" className="main-header-area">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-xl-3 col-lg-3">
              <div className="logo">
                <a href="index.html">
                  <img src="img/logo.png" alt />
                </a>
              </div>
            </div>
            <div className="col-xl-9 col-lg-9">
              <div className="main-menu">
                <nav>
                  <ul id="navigation">
                    <li><a href="index.html">Ev</a></li>
                    <li><a href="About.html">Hakkimizda</a></li>
                    <li><a href="#">Sayfalar</a></li>
                    <li><a href="contact.html">İletişim</a></li>
                  </ul>
                </nav>
                <div className="Appointment">
                  <div className="book_btn d-none d-lg-block">
                  <Link to="/Login">Login</Link> {/* Link eklendi */}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="mobile_menu d-block d-lg-none" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  {/* header-end */}
  {/* slider_area_start */}
  <div className="slider_area">
    <div className="single_slider  d-flex align-items-center slider_bg_1 overlay2">
      <div className="container">
        <div className="row">
          <div className="col-lg-9">
            <div className="slider_text ">
              <span>Bu Gün Kan Bağışla.</span>
              <h3> Yarınlara Umut Olmak İçin Bu Gun Kan Bagışla</h3>
              <a href="About.html" className="boxed-btn3">Daha Fazla</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* slider_area_end */}
  {/* reson_area_start  */}
  <div className="reson_area section_padding">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <div className="section_title text-center mb-55">
            <h3><span>Reason of Helping</span></h3>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-4 col-md-6">
          <div className="single_reson">
            <div className="thum">
              <div className="thum_1">
                <img src="img/help/1.png" alt />
              </div>
            </div>
            <div className="help_content">
              <h4>Collecting Fund</h4>
              <p>Lorem ipsum, or lipsum as it is 
                sometimes known, is dummy 
                text used in laying out print.</p>
              <a href="#" className="read_more">Read More</a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="single_reson">
            <div className="thum">
              <div className="thum_1">
                <img src="img/help/2.png" alt />
              </div>
            </div>
            <div className="help_content">
              <h4>Blood Camp</h4>
              <p>Lorem ipsum, or lipsum as it is 
                sometimes known, is dummy 
                text used in laying out print.</p>
              <a href="#" className="read_more">Read More</a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="single_reson">
            <div className="thum">
              <div className="thum_1">
                <img src="img/help/3.png" alt />
              </div>
            </div>
            <div className="help_content">
              <h4>Friendly Volunteer</h4>
              <p>Lorem ipsum, or lipsum as it is 
                sometimes known, is dummy 
                text used in laying out print.</p>
              <a href="#" className="read_more">Read More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* reson_area_end  */}
  {/* footer_start  */}
  <footer className="footer">
    <div className="footer_top">
      <div className="container">
        <div className="row">
          <div className="col-xl-4 col-md-6 col-lg-4 ">
            <div className="footer_widget">
              <div className="footer_logo">
                <a href="#">
                  <img src="img/footer_logo.png" alt />
                </a>
              </div>
              <p className="address_text">Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit, sed do <br /> eiusmod tempor incididunt ut labore.
              </p>
              <div className="socail_links">
                <ul>
                  <li>
                    <a href="#">
                      <i className="ti-facebook" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="ti-twitter-alt" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-dribbble" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-instagram" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-xl-2 col-md-6 col-lg-2">
            <div className="footer_widget">
              <h3 className="footer_title">
                Services
              </h3>
              <ul className="links">
                <li><a href="#">Donate</a></li>
                <li><a href="#">Sponsor</a></li>
                <li><a href="#">Fundraise</a></li>
                <li><a href="#">Volunteer</a></li>
                <li><a href="#">Partner</a></li>
                <li><a href="#">Jobs</a></li>
              </ul>
            </div>
          </div>
          <div className="col-xl-3 col-md-6 col-lg-3">
            <div className="footer_widget">
              <h3 className="footer_title">
                Contacts
              </h3>
              <div className="contacts">
                <p>+2(305) 587-3407 <br />
                  info@loveuscharity.com <br />
                  Flat 20, Reynolds Neck, North
                  Helenaville, FV77 8WS
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-6 col-lg-3">
            <div className="footer_widget">
              <h3 className="footer_title">
                Top News
              </h3>
              <ul className="news_links">
                <li>
                  <div className="thumb">
                    <a href="#">
                      <img src="img/news/news_1.png" alt />
                    </a>
                  </div>
                  <div className="info">
                    <a href="#">
                      <h4>School for African 
                        Childrens</h4>
                    </a>
                    <span>Jun 12, 2019</span>
                  </div>
                </li>
                <li>
                  <div className="thumb">
                    <a href="#">
                      <img src="img/news/news_2.png" alt />
                    </a>
                  </div>
                  <div className="info">
                    <a href="#">
                      <h4>School for African 
                        Childrens</h4>
                    </a>
                    <span>Jun 12, 2019</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="copy-right_text">
      <div className="container">
        <div className="row">
          <div className="bordered_1px " />
          <div className="col-xl-12">
            <p className="copy_right text-center">
            </p><p>{/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
              Copyright © All rights reserved | This template is made with <i className="ti-heart" aria-hidden="true" /> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
              {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}</p>
            <p />
          </div>
        </div>
      </div>
    </div>
  </footer>
</div>


        </div>
    )
}
export default Home;