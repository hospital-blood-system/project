import React  from "react";

function Footer(){
    return(
        <div>
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
    )
}
export default Footer;