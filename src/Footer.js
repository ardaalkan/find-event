import React from "react";

const Footer = () => {
  return (
    <div className="main-footer">
      <div className="main-footer-container">
        <div className="main-footer-col1">
          <ul>
            <h2>Hakkımızda</h2>
            <li>Biz Kimiz ?</li>
            <li>Bize Ulaşın</li>
            <li>Sosyal Sorumluluk</li>
          </ul>
        </div>
        <div className="main-footer-col2">
          <ul>
            <h2>Yardım</h2>
            <li>Satış Kanalları</li>
            <li>Politikamız</li>
            <li>Hediye Kart</li>
          </ul>
        </div>
        <div className="main-footer-col3">
          <ul>
            <h2>Bizimle Çalışın</h2>
            <li>Reklam Verin</li>
            <li>Kariyer</li>
            <li>Affiliate Programı</li>
          </ul>
        </div>
      </div>
      <h2 className="footer-main-h1">
        © 2022 X Dağıtım Basım ve Tic. A.Ş. Tüm hakları saklıdır. Bu web
        sitesinin kullanımı,ticari kullanımı engelleyen Kullanım Koşulları'na
        tabidir.
        <br /> Bu sayfayı geçtiğinizde bu koşulları kabul etmiş sayılırsınız.
      </h2>
    </div>
  );
};

export default Footer;
