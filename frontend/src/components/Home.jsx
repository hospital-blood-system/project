import React  from "react";
import { Link } from "react-router-dom";
import ScrollToBottomButton from "./ScrollToBottomButton";
import ScrollToCenterButton from "./ScrollToCenterButton.jsx";

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
                    <li><a href="#">Ana Sayfa</a></li>
                    <li><a><ScrollToCenterButton /></a></li>
                    <li><a><ScrollToBottomButton/></a></li>
                    
                  </ul>
                </nav>
                <div className="Appointment">
                  <div className="book_btn d-none d-lg-block">
                  <Link to="/Login">Giriş</Link> {/* Link eklendi */}
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
              <span>Hayat Kurtar, Bugün Kan Bağışla!</span>
              <h3>Güç Senin Kanında Saklı: Bağışla, Güç Ver!</h3>
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
            <h3><span>İLANLAR</span></h3>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
      <div className="card w-75 mb-3">
  <div className="card-body">
    <h5 className="card-title">🚨 ACİL KAN BAĞIŞI İHTİYACI 🚨</h5>
    <p className="card-text">Sevgili Topluluk Üyeleri,

Bir acil durumla karşı karşıyayız ve sizin yardımınıza ihtiyacımız var. Hasta bir bireyimiz hayati bir mücadele veriyor ve şu anda 🩸B Rh-  kana acil ihtiyaç duyuyoruz.

Bağış Yeri ve Tarih:
📅 Tarih: [21.12.2023]
📍 Bağış Merkezi: [Fırat Üniversitesi Hastanesi]

Lütfen sağlıklıysanız, bu çağrıya yanıt verin ve kan bağışında bulunun. Bir damla kan, bir hayat kurtarabilir. Ayrıca, bu duyuruyu çevrenizle paylaşarak daha fazla kişinin haberdar olmasına yardımcı olabilirsiniz.

Unutmayın, birlikte daha güçlüyüz. Yardımlarınız için şimdiden teşekkür ederiz! 

İletişim İçin:
📞 [05416309501]
✉️ [hasanözdinç@gmail.com] . . .</p>
    <a href="#" class="btn btn-primary">Detay </a>
  </div>
</div>

<div className="card w-75 mb-3">
  <div className="card-body">
    <h5 className="card-title">🚨 ACİL KAN BAĞIŞI İHTİYACI 🚨</h5>
    <p className="card-text">Sevgili Topluluk Üyeleri,

Bir acil durumla karşı karşıyayız ve sizin yardımınıza ihtiyacımız var. Hasta bir bireyimiz hayati bir mücadele veriyor ve şu anda 🩸0 Rh+  kana acil ihtiyaç duyuyoruz.

Bağış Yeri ve Tarih:
📅 Tarih: [17.12.2023]
📍 Bağış Merkezi: [Fetih Sekin Şehir Hastanesi]

Lütfen sağlıklıysanız, bu çağrıya yanıt verin ve kan bağışında bulunun. Bir damla kan, bir hayat kurtarabilir. Ayrıca, bu duyuruyu çevrenizle paylaşarak daha fazla kişinin haberdar olmasına yardımcı olabilirsiniz.

Unutmayın, birlikte daha güçlüyüz. Yardımlarınız için şimdiden teşekkür ederiz!

İletişim İçin:
📞 [05436845485]
✉️ [meryemnurozdemir@gmail.com] . . .</p>
    <a href="#" class="btn btn-primary">Detay</a>
 


          </div>
        </div>
        <div className="card w-75 mb-3">
  <div className="card-body">
    <h5 className="card-title">🌟 BAĞIŞ KAMPANYASI: BİRLİKTE HAYATLARI DEĞİŞTİRELİM! 🌟</h5>
    <p className="card-text">
Sevgili Dostlar,

Sizleri yeni bir bağış kampanyamıza katılmaya davet ediyoruz! Bu kampanya ile birlikte, topluluğumuzun sağlığına ve refahına destek olabilir, birlikte güçlü bir etki yaratabiliriz.

🏆 Hedefimiz: Bu kampanyada amacımız 1000 bağışçıdan destek almak

📅 Kampanya Süresi: [1.12.2023] - [1.01.2024]

Kampanya Avantajları:
✨ İlk 100 Bağışçıya Özel Sertifika
✨ Her Bağış, Topluluğumuz İçin Bir Yatırım

Bağışı Paylaşın:
Bağışınızın sosyal medyada #HayatıDeğiştirBağışıyla etiketiyle paylaşarak kampanyamıza daha fazla katkı sağlayabilirsiniz.

🙏 Topluluğumuzun gücü, sizin bağışlarınızla büyüyor. Katkılarınız için şimdiden teşekkür ederiz!


İletişim İçin:
📞 [02124502052] . . .
</p>
    <a href="#" class="btn btn-primary">Detay</a>
  </div>
</div>

<div className="card w-75 mb-3">
  <div className="card-body">
    <h5 className="card-title">🤝 GÖNÜLLÜ BAĞIŞ ÇAĞRISI: BİR GÜLÜMSEMEYLE DEĞİŞİM YARATIN! 🤝</h5>
    <p className="card-text">
Sevgili Dostlar,

Topluluğumuzu daha güzel bir yer haline getirmek için bir araya gelme vakti geldi! Gelin, birlikte gönüllü olarak değişim yaratalım ve birbirimize destek olalım.

👐 Gönüllü Hedefimiz: Bu kampanya kapsamında 500 gönüllüyü bir araya getirerek çeşitli projelerde birlikte çalışmak ve pozitif bir etki yaratmak.

📅 Gönüllülük Tarihleri: [1.01.2024] - [30.06.2024]

Neden Gönüllü Olmalısınız?
[Burada, gönüllülük faaliyetinin topluluğa, çevreye veya belirli bir amaca nasıl katkı sağlayacağını açıklayın.]

Gönüllülük Avantajları:
✨ Yeni Arkadaşlıklar Kurma Fırsatı
✨ Topluluğumuza Kalıcı Bir Etki Bırakma Şansı

Gönüllülüğü Paylaşın:
Gönüllülük deneyimlerinizi sosyal medyada #GönüllüDeğişim etiketiyle paylaşarak daha fazla insanı gönüllü olmaya teşvik edebilirsiniz.

🙏 Topluluğumuza değerli katkılarınız için şimdiden teşekkür ederiz!
İletişim İçin:
📞 [02124502052] . . .
</p>
    <a href="#" class="btn btn-primary">Detay</a>
  </div>
</div>
          
       
      </div>
    </div>
  </div>
  {/* reson_area_end  */}
  {/* footer_start  */}
  <footer className="footer">
    <div className="">
      <div className="container">
        <div className="row">
          <div className="col-xl-4 col-md-6 col-lg-4 ">
            <div className="footer_widget">
              <div className="footer_logo">
                <a href="#">
                  <img src="img/footer_logo.png" alt />
                </a>
              </div>
              <p className="address_text"> <br />  <br /> 
              </p>
              
            </div>
          </div>

          <div className="col-xl-5 col-md-15 col-lg-10">
            <div className="footer_widget">
              <h3 className="footer_title">
                İletişim Bilgileri
              </h3>
              <div className="contacts">
                <p>Telefon ☎️:
                  0(424)218 1346 <br />
                Email ✉️: 
                info@kanverhayatkurtar.com <br />
                  Adres: 
                  Nailbey Mh. 12002. Sk. 
                  No:1/14 Elazığ İş Merkezi Kat:3

                  
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-10 col-md-5 col-lg-3">
          <form>
      <div className="row">
        <div className="col">
          <input type="text" className="form-control" placeholder="İsim" />
        </div>
        <div className="col">
          <input type="text" className="form-control" placeholder="Soyisim" />
        </div>
      </div>
    </form>
          <form>
  <div className="form-group">
    
  </div>
  <div className="form-group">
   
  </div>
  <form>
  <form>
  <div className="form-group">
    <label htmlFor="formGroupExampleInput">Telefon :</label>
    <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Telefon Girin..." />
  </div>
  <div className="form-group">
    <label htmlFor="formGroupExampleInput2">E-Mail :</label>
    <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="E-mail Girin..." />
  </div>
</form>
</form>
  <div className="form-group">
    <label for="exampleFormControlTextarea1">Mesaj :</label>
    <textarea className="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
  </div>
</form>
<button type="button" class="btn btn-danger">Gönder</button>
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
            Telif Hakkı © 2023 ISS Ekibi Tarafından Tasarlanmıştır.Tüm Hakları Saklıdır.<i className="ti-heart" aria-hidden="true" /> by <a href=" INNOVATIVE SOLUTİONS AND SOFTWARE ŞTİ. AŞ." target="_blank"> INNOVATIVE SOLUTİONS AND SOFTWARE ŞTİ. AŞ.</a>
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