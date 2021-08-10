import { useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";

import Layout from "./components/Layout";
import About from "./pages/About";
import { Cart } from "./components/Cart";
function App() {
  const { openCart } = useSelector((state) => state.cart);
  return (
    <Router>
      <main className="bg-gray-900 text-white relative">
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route path="/products/:id" component={Products} />
            <Route exact path="/products">
              <Redirect to="/products/0" />
            </Route>
            <Redirect to="/" />
          </Switch>
        </Layout>
        {openCart ? <Cart /> : null}
      </main>
    </Router>
  );
}

export default App;
