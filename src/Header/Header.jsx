import React from "react";
import { useState } from "react";

const Header = ({ show, showFilter }) => {
  const [name, setName] = useState("");

  const handleNameChange = (event) => {
    const { value } = event.target;
    setName(value);
    showFilter(value);
  };

  return (
    <header className="header-container">
      <div className="top-header">
        <div>
          <input
            className="form-control"
            placeholder="Etkinlik, sanatçı ya da mekan arayın"
            type="text"
            id="name"
            onChange={handleNameChange}
          />
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
