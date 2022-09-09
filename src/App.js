import "./App.css";
import { Footer } from "./Containers/Footer/Footer";
import { Header } from "./Containers/Header/Header.js";
import { Main } from "./Containers/Main/Main.js";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
