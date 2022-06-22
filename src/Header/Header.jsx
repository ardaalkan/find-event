import React from "react";
import { useState } from "react";

const Header = () => {
  const [selects, setSelects] = useState();

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
        <select value={selects} onChange={(e) => setSelects(e.target.value)}>
          <option>KONSER</option>
          <option>TİYATRO</option>
          <option>SERGİ</option>
        </select>
        <select value={selects} onChange={(e) => setSelects(e.target.value)}>
          <option>BUGÜN</option>
          <option>HAFTAYA</option>
          <option>GELECEK</option>
        </select>
        <select value={selects} onChange={(e) => setSelects(e.target.value)}>
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
