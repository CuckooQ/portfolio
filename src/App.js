import "./styles/App.scss";
import Header from "./components/sections/Header";
import Main from "./components/sections/Main";
import Footer from "./components/sections/Footer";
import ModalPortals from "./components/ModalPortals";
import { useEffect, useState } from "react";
import { BROWSER, getBrowser } from "./utils/environments/browser";
import { OS, getOS } from "./utils/environments/os";

function App() {
  let [isSupport, setSupport] = useState(true);
  useEffect(() => {
    (getBrowser() === BROWSER.UNDEFINED || getOS() === OS.UNDEFINED) &&
      setSupport(false);
  }, []);

  return (
    <div className="App">
      {!isSupport && (
        <ModalPortals>
          <div className={`background`}></div>
        </ModalPortals>
      )}
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
