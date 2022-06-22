import "./App.css";
import Header from "./Header/Header";
import PopSlider from "./PopSlider/PopSlider";
import { mockData } from "./mockData";
import EventItems from "./EventItems/EventItems";

function App() {
  const generateShow = () => {
    return [...new Set(mockData.map((item) => item.type))];
  };

  return (
    <div className="App">
      <Header show={generateShow()} />
      <PopSlider />
      <div className="api-card-container">
        {mockData.map((item) => (
          <EventItems item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}

export default App;
