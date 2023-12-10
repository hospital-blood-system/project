import React  from "react";

function Home(){
    
    return(
        <div>
  <div>
  {/* slider_area_start */}
  <div className="slider_area">
    <div className="single_slider  d-flex align-items-center slider_bg_1 overlay2">
      <div className="container">
        <div className="row">
          <div className="col-lg-9">
            <div className="slider_text ">
              <span>Get Started Today.</span>
              <h3> Help the children
                When They Need</h3>
              <p>With so much to consume and such little time, coming up <br />
                with relevant title ideas is essential</p>
              <a href="About.html" className="boxed-btn3">Learn More
              </a>
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
</div>

        </div>
    )
}
export default Home;