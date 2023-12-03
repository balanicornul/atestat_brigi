import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Media } from "./components/Media";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Media />
    </div>
  );
}

export default App;
