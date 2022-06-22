import React from "react";
import dayjs from "dayjs";

const EventItems = ({ item }) => {
  return (
    <>
      <div className="api-card-item">
        <div className="api-card-container-top-card">
          <img src={item.img} alt="alt" />
        </div>
        <div className="api-card-container-bottom-card">
          <p>{item.konser}</p>
          <p>{item.şehir}</p>
          <p>{item.mekan}</p>
          <p>{dayjs(item.zaman).format("DD MMMM YYYY")}</p>
        </div>
      </div>
    </>
  );
};

export default EventItems;
