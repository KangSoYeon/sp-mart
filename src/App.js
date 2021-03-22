import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from './pages/Main'
import ProductDetail from './pages/ProductDetail'
import ProductList from './pages/ProductList'

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Main}></Route>
          <Route exact path="/detail/:productId" component={ProductDetail}></Route>
          <Route exact path="/list/:listId" component={ProductList}></Route>
        </Switch>
      </Router>
    
    </>
  );
}

export default App;
