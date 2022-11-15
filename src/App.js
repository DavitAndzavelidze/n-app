import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Card from "./components/Card";
import OfflineApp from "./components/OfflineApp";
import WatchEver from "./components/WatchEver";
import Kids from "./components/Kids";
import FAQs from "./components/FAQs";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Card />
      <OfflineApp />
      <WatchEver />
      <Kids />
      <FAQs />
      <Footer />
    </>
  );
}

export default App;
