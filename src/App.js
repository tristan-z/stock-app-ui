import "./App.css";
import Banner from "./components/banner/Banner";
import NewsPanel from "./components/newsPanel/newsPanel";
import GainerPanel from "./components/gainerPanel/gainerPanel";
import LoserPanel from "./components/loserPanel/loserPanel";

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
