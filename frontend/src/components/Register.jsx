import React  from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Logo from "./Logo";

function Register(){
    const [ad, setAd] = useState("");
    const [soyad, setSoyad] = useState("");
    const [personalNo, setpersonalNo] = useState("");
    const [sifre, setSifre] = useState("");
    const [hastaneler, setHastaneler] = useState([]);
    const [selectedHastane, setSelectedHastane] = useState("");
    
    const handleHastaneler= async()=>{
      try {
        const response = await axios.get('http://localhost:8002/hastane/');
        setHastaneler(response.data);
      } catch (error) {
        console.error('Hastane bilgileri alınamadı.', error.message);
      }
    }

    useEffect(() => {
      handleHastaneler()
    }, []);

    const handleSubmit = async(e)=>{
      e.preventDefault();
      try{
        const response = await axios.post('http://localhost:8002/admin/register',{
          ad:ad,
          soyad:soyad,
          personal_no:personalNo,
          sifre:sifre,
          hastane: selectedHastane
        }, {
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (response.error) {
          console.error("Register failed");
          window.location.href = "/Register";
        } else {
          window.location.href = "/Dashboard";
        }

      }catch(error){
        console.log(error.message);
      }
    }

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
                <Logo></Logo>
              </a>
              <p className="text-center">Kayıt</p>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="ad" className="form-label">Ad</label>
                  <input type="text" className="form-control" name="ad" id="ad" aria-describedby="textHelp" value={ad || ''} onChange={ async(e) => setAd(e.target.value)}/>
                </div>
                <div className="mb-3">
                  <label htmlFor="soyad" className="form-label">Soyad</label>
                  <input type="text" className="form-control" name="soyad" id="soyad" aria-describedby="textHelp" value={soyad || ''} onChange={async(e) => setSoyad(e.target.value)}/>
                </div>
                <div className="mb-3">
                  <label htmlFor="personal_no" className="form-label">Personel Numarası</label>
                  <input type="text" className="form-control" id="personal_no" name="personal_no" aria-describedby="textHelp" value={personalNo || ''} onChange={async(e) => setpersonalNo(e.target.value)}/>
                </div>
                <div className="mb-4">
                  <label htmlFor="exampleInputPassword1" className="form-label">Şifre</label>
                  <input type="password" className="form-control" id="sifre" name="sifre" value={sifre || ''} onChange={async(e) => setSifre(e.target.value)}/>
                </div>
                <div className="mb-4">
                  <select
                    className="form-select"
                    id="hastane"
                    name="hastane"
                    value={selectedHastane}
                    onChange={(e) => setSelectedHastane(e.target.value)}
                  >
                    <option value="" disabled>
                      Hastane Seçiniz
                    </option>
                    {hastaneler.map((hastane) => (
                      <option value={hastane._id}>
                        {hastane.ad}
                      </option>
                    ))}
                  </select>
                </div>
                <button className="btn btn-primary w-100 py-8 fs-4 mb-4 rounded-2" type="submit">Sign Up</button>
                <div className="d-flex align-items-center justify-content-center">
                  <p className="fs-4 mb-0 fw-bold">Already have an Account?</p>
                  <a className="text-primary fw-bold ms-2" href="./authentication-login.html"> <Link to="/Login">Sing in</Link></a>
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
export default Register;
