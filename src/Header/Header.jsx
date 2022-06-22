import React from "react";

const Header = ({ show }) => {
  return (
    <header className="header-container">
      <div className="top-header">
        <div>
          <input placeholder="Etkinlik, sanatçı ya da mekan arayın"></input>
        </div>
        <div>
          <h2>Giriş Yap</h2>
        </div>
      </div>
      <div className="bottom-header-filters">
        <select className="form-control" id="show">
          <option value="">Kategoriler</option>
          {show.map((show) => (
            <option value={show} key={show}>
              {show}
            </option>
          ))}
        </select>
        <select>
          <option>BUGÜN</option>
          <option>HAFTAYA</option>
          <option>GELECEK</option>
        </select>
        <select>
          <option>ANKARA</option>
          <option>İSTANBUL</option>
          <option>İZMİR</option>
          <option>ANTALYA</option>
        </select>
      </div>
      <hr width="100%"></hr>
    </header>
  );
};

export default Header;
