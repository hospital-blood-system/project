import React  from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function Login(){

  const [personalNo, setPersonalNo] = useState("");
  const [password, setPassword] = useState("");

  const handlePersonalNo = async (e) =>{
    setPersonalNo(e.target.value);
  }

  const handlePassword = async(e)=>{
    setPassword(e.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const response = await axios.post('http://localhost:8002/admin/login', {
          personal_no: personalNo,
          sifre: password,
        }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.error) {
        console.error("Login failed");
        window.location.href = "/Login";
      } else {
        window.location.href = "/Dashboard";
      }
    } catch (error) {
      console.error("An error occurred during login:", error);
    }
  };

    return(
        <div>
          <div className="page-wrapper" id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full" data-sidebar-position="fixed" data-header-position="fixed">
  <div className="position-relative overflow-hidden radial-gradient min-vh-100 d-flex align-items-center justify-content-center">
    <div className="d-flex align-items-center justify-content-center w-100">
      <div className="row justify-content-center w-100">
        <div className="col-md-8 col-lg-6 col-xxl-3">
          <div className="card mb-0">
            <div className="card-body">
              <a href="./index.html" className="text-nowrap logo-img text-center d-block py-3 w-100">
                <img src="/img/logos/dark-logo.svg" width={180} alt />
              </a>
              <p className="text-center">Your Social Campaigns</p>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">Personal No</label>
                  <input type="text" className="form-control" id="personal_no" name="personal_no" aria-describedby="textHelp" value={personalNo || ''} onChange={handlePersonalNo}/>
                </div>
                <div className="mb-4">
                  <label htmlFor="sifre" className="form-label">Password</label>
                  <input type="password" className="form-control" id="sifre" name="sifre" aria-describedby="textHelp" value={password || ''} onChange={handlePassword}/>
                </div>
                <div className="d-flex align-items-center justify-content-between mb-4">
                  <div className="form-check">
                    <input className="form-check-input primary" type="checkbox" defaultValue id="flexCheckChecked" defaultChecked />
                    <label className="form-check-label text-dark" htmlFor="flexCheckChecked">
                      Remeber this Device
                    </label>
                  </div>
                  <a className="text-primary fw-bold" href="./index.html">Forgot Password ?</a>
                </div>
                <button className="btn btn-primary w-100 py-8 fs-4 mb-4 rounded-2" type="submit">Sing in</button>
                <div className="d-flex align-items-center justify-content-center">
                  <p className="fs-4 mb-0 fw-bold">New to Modernize?</p>
                  <a className="text-primary fw-bold ms-2" href="./authentication-register.html"> <Link to="/Register">Register</Link></a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

        </div>
    )
}

export default Login;