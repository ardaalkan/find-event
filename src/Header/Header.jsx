import React from "react";
import { useState } from "react";

const Header = ({ show, showFilter, cityFilter }) => {
  const [filters, setFilters] = useState({
    name: "",
    city: "",
    from: "",
    to: "",
  });

  const handleInput = (field) => (event) => {
    const { value } = event.target;

    setFilters({
      ...filters,
      [field]: value,
    });

    switch (field) {
      case "name":
        showFilter(value);
        break;
      case "city":
        cityFilter(value);
        break;
      case "from":
        break;
      case "to":
        break;
      default:
        break;
    }
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
            value={filters.name}
            onChange={handleInput("name")}
          />
        </div>
        <div>
          <h2>Giriş Yap</h2>
        </div>
      </div>
      <div className="bottom-header-filters">
        <select className="form-control-show" id="show">
          <option value="">Kategoriler</option>
          {show.map((show) => (
            <option value={show} key={show}>
              {show}
            </option>
          ))}
        </select>
        <input
          className="form-control-city"
          placeholder="Şehir"
          type="text"
          id="name"
          value={filters.city}
          onChange={handleInput("city")}
        />
        <select onChange={handleInput("")}>
          <option>BUGÜN</option>
          <option>HAFTAYA</option>
          <option>GELECEK</option>
        </select>
      </div>
      <hr width="100%"></hr>
    </header>
  );
};

export default Header;
