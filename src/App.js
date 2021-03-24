import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from './shop/pages/Main'
import ProductDetail from './shop/pages/ProductDetail'
import ProductList from './shop/pages/ProductList'
import Admin from './admin/pages/Main'

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Main}></Route>
          <Route exact path="/detail/:productId" component={ProductDetail}></Route>
          <Route exact path="/list/:listId" component={ProductList}></Route>
          <Route exact path="/admin" component={Admin}></Route>

        </Switch>
      </Router>
    
    </>
  );
}

export default App;
