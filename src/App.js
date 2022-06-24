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
  //TODO:change input value as a type > artist and add a concert and theatre values then add the calendar to and setTo then add pagination.
  const handleFilterCity = (şehir) => {
    const filteredData = mockData.filter((item) => {
      if (item.şehir.toLowerCase().includes(şehir.toLowerCase())) {
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
