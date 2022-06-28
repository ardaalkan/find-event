import "./App.css";
import Header from "./Header/Header";
import PopSlider from "./PopSlider/PopSlider";
import { mockData } from "./mockData";
import EventItems from "./EventItems/EventItems";
import { useState } from "react";
import dayjs from "dayjs";
import Footer from "./Footer";

const isSameOrAfter = require("dayjs/plugin/isSameOrAfter");
dayjs.extend(isSameOrAfter);
const isSameOrBefore = require("dayjs/plugin/isSameOrBefore");
dayjs.extend(isSameOrBefore);

function App() {
  const [allData, setData] = useState(mockData);

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
        {allData.map((item) => (
          <EventItems item={item} key={item.id} />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;
