import React from "react";
import { useState } from "react";

const Header = ({
  types,
  showFilter,
  cityFilter,
  typeFilter,
  dateFilter,
  lastFilter,
}) => {
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
      case "type":
        typeFilter(value);
        break;
      case "from":
        dateFilter(value, "from");
        break;
      case "to":
        lastFilter(value, "to");
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
            placeholder="Etkinlik Ara.."
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
        <select
          className="form-control-type"
          id="type"
          onChange={handleInput("type")}
        >
          <option value="">Kategoriler</option>
          {types.map((type) => (
            <option value={type} key={type}>
              {type}
            </option>
          ))}
        </select>
        <i class="fa-solid fa-city"></i>
        <input
          className="form-control-city"
          placeholder="Şehir"
          type="text"
          id="name"
          value={filters.city}
          onChange={handleInput("city")}
        />
        <input
          className="form-control-date"
          placeholder="From"
          type="date"
          id="date"
          onChange={handleInput("from")}
        />
        <input
          className="form-control-last-date"
          placeholder="To"
          type="date"
          id="date"
          onChange={handleInput("to")}
        />
      </div>
      <hr width="100%"></hr>
    </header>
  );
};

export default Header;
