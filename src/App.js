import { Route } from "react-router";
import "./App.css";
import Home from "./components/home/Home";
import NavBar from "./components/navBar/NavBar";
import CakeShopPage from "./pages/CakeShopPage";
import IceCreamShopPage from "./pages/IceCreamShopPage";

function App() {
  return (
    <div className="App">
      {/* <CakeContainer /> */}
      <NavBar />
      <main>
        <Route exact path="/" component={Home} />
        <Route path="/cakeshop" component={CakeShopPage} />
        <Route path="/icecreamshop" component={IceCreamShopPage} />
      </main>
    </div>
  );
}

export default App;
