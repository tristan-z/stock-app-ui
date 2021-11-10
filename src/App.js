import "./App.css";
import Banner from "./components/banner";
import NewsPanel from "./components/newsPanel";
import GainerPanel from "./components/gainerPanel";
import LoserPanel from "./components/loserPanel";

function App() {
  return (
    <div className="App">
      <Banner />
      <NewsPanel />
      <GainerPanel />
      <LoserPanel />
    </div>
  );
}

export default App;
