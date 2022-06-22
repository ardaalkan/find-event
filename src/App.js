import "./App.css";
import Header from "./Header/Header";
import PopSlider from "./PopSlider/PopSlider";
import { mockData } from "../src/mockData";
import EventItems from "./EventItems/EventItems";

function App() {
  return (
    <div className="App">
      <Header />
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
