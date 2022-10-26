import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Pages from "./pages/Pages";
import Data from "./components/Data";

import Sdata from "./components/shops/Sdata";
import Cart from "./pages/Cart/Cart";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { AuthContextProvider } from "./context/AuthContext";
import Login from "./auth/Login/Login";
import Register from "./auth/Register/Register";
import ProtectedRoute from "./route/ProtectedRoute";

function App() {
  const { productItems } = Data;
  const { shopItems } = Sdata;

  const [CartItem, setCartItem] = useState([]);

  const addToCart = (product) => {
    const productExit = CartItem.find((item) => item.id === product.id);

    if (productExit) {
      setCartItem(
        CartItem.map((item) =>
          item.id === product.id
            ? { ...productExit, qty: productExit.qty + 1 }
            : item
        )
      );
    } else {
      setCartItem([...CartItem, { ...product, qty: 1 }]);
    }
  };

  const decreaseQty = (product) => {
    const productExit = CartItem.find((item) => item.id === product.id);

    if (productExit.qty === 1) {
      setCartItem(CartItem.filter((item) => item.id !== product.id));
    } else {
      setCartItem(
        CartItem.map((item) =>
          item.id === product.id
            ? { ...productExit, qty: productExit.qty - 1 }
            : item
        )
      );
    }
  };

  return (
    <>
      <AuthContextProvider>
        <Router>
          <Header CartItem={CartItem} />
          <Switch>
            <Route exact path="/the-treasure-chest">
              <Pages
                productItems={productItems}
                addToCart={addToCart}
                shopItems={shopItems}
              />
            </Route>
            <Route path="/the-treasure-chest/login">
              <Login />
            </Route>
            <Route path="/the-treasure-chest/register">
              <Register />
            </Route>
            <ProtectedRoute path="/the-treasure-chest/cart" exact>
              <Cart
                CartItem={CartItem}
                addToCart={addToCart}
                decreaseQty={decreaseQty}
              />
            </ProtectedRoute>
          </Switch>
          <Footer />
        </Router>
      </AuthContextProvider>
    </>
  );
}

export default App;
