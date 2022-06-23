import "./App.css";
import Header from "./Header/Header";
import PopSlider from "./PopSlider/PopSlider";
import { mockData } from "./mockData";
import EventItems from "./EventItems/EventItems";
import { useState } from "react";

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

  const handleFilterCity = (city) => {
    const filteredData = mockData.filter((item) => {
      if (item.şehir.toLowerCase().includes(city.toLowerCase())) {
        return item;
      }
    });
    setData(filteredData);
  };

  return (
    <div className="App">
      <Header
        show={generateShow()}
        showFilter={handleFilterName}
        cityFilter={handleFilterCity}
      />
      <PopSlider />
      <div className="api-card-container">
        {allData.map((item) => (
          <EventItems item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}

export default App;
