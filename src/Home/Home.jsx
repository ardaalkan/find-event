import Header from "../Header/Header";
import PopSlider from "../PopSlider/PopSlider";
import { mockData } from "../mockData";
import EventItems from "../EventItems/EventItems";
import { useState } from "react";
import dayjs from "dayjs";
import Footer from "../Footer";
import "../Home/Home.css";

const isSameOrAfter = require("dayjs/plugin/isSameOrAfter");
dayjs.extend(isSameOrAfter);
const isSameOrBefore = require("dayjs/plugin/isSameOrBefore");
dayjs.extend(isSameOrBefore);

function Home() {
  const [allData, setData] = useState(mockData);
  const [visible, setVisible] = useState(3);

  const showMoreItem = () => {
    setVisible((prevValue) => prevValue + 3);
  };

  const generateShow = () => {
    return [...new Set(mockData.map((item) => item.type))];
  };

  const handleFilterName = (name) => {
    const filteredData = mockData.filter((item) => {
      const fullShow = `${item.show}`;
      if (fullShow.toLowerCase().includes(name.toLowerCase())) {
        return item;
      }
    });
    setData(filteredData);
  };

  const handleFilterCity = (şehir) => {
    const filteredData = mockData.filter((item) => {
      if (item.şehir.toLowerCase().includes(şehir.toLowerCase())) {
        return item;
      }
    });
    setData(filteredData);
  };

  const handleFilterType = (type) => {
    const filteredData = mockData.filter((item) => {
      if (item.type === type) {
        return item;
      }
    });
    setData(filteredData);
  };

  const handleFilterDate = (date, field) => {
    const filteredData = mockData.filter((item) => {
      if (field === "from" && dayjs(item.date).isSameOrAfter(dayjs(date))) {
        return item;
      }
    });
    setData(filteredData);
  };

  const handleFilterLast = (date, field) => {
    const filteredData = mockData.filter((item) => {
      if (field === "to" && dayjs(item.date).isSameOrBefore(dayjs(date))) {
        return item;
      }
    });
    setData(filteredData);
  };

  return (
    <div className="App">
      <Header
        types={generateShow()}
        showFilter={handleFilterName}
        cityFilter={handleFilterCity}
        typeFilter={handleFilterType}
        dateFilter={handleFilterDate}
        lastFilter={handleFilterLast}
      />
      <PopSlider />
      <div className="api-card-container">
        {allData.length === 0 ? (
          <div className="content-d-exists">İçerik Şuan Mevcut Değil </div>
        ) : (
          allData
            .slice(0, visible)
            .map((item) => <EventItems item={item} key={item.id} />)
        )}
      </div>
      {allData.length === 0 ? (
        ""
      ) : allData.length < visible ? (
        <div className="all-item-exists">Tüm etkinlikler yüklendi..</div>
      ) : (
        <div className="show-more-item" onClick={showMoreItem}>
          Daha fazla etkinlik yükle..
        </div>
      )}
      <Footer />
    </div>
  );
}

export default Home;
