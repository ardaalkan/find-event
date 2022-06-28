import React from "react";
import dayjs from "dayjs";

const EventItems = ({ item }) => {
  return (
    <>
      <div className="api-card-item">
        <h3 className="category">{item.type.toUpperCase()}</h3>
        <div className="api-card-container-top-card">
          <img
            src={item.image}
            alt="Artists"
          />
        </div>
        <div className="api-card-container-bottom-card">
          <p>{item.show}</p>
          <p>{item.şehir}</p>
          <p>{item.mekan}</p>
          <p>{dayjs(item.date).format("DD MMMM YYYY")}</p>
        </div>
      </div>
    </>
  );
};

export default EventItems;
