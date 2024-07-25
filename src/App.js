import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Cart from "./pages/cart";
import Header from "./components/header";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path="react-js-shopping-cart-app/" element={<Home />} />
        <Route
          exact
          path="react-js-shopping-cart-app/cart"
          element={<Cart />}
        />
      </Routes>
    </div>
  );
}

export default App;
