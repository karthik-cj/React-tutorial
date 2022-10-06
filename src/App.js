import "./App.css";
import BusinessCard from "./Components/BusinessCardBody";
import Footer from "./Components/BusinessCardFooter";
import MainContent from "./Components/Header";
import Login from "./Components/Login";

function App() {
  return (
    <div className="App">
      <MainContent />
      <Login />
      <BusinessCard />
      <Footer />
    </div>
  );
}

export default App;
