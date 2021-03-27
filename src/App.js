import React from 'react';
import './App.css';
import { useRoutes, BrowserRouter as Router, Switch, Route } from "react-router-dom";
import routes from './routes'

function App() {
  const routing = useRoutes(routes);
  return (
    <>
      {routing}
      {/* <Router>
        <Switch>
          <Route exact path="/" component={Main}></Route>
          <Route exact path="/detail/:productId" component={ProductDetail}></Route>
          <Route exact path="/list/:listId" component={ProductList}></Route>
          <Route exact path="/admin" component={Admin}></Route>
          <Route exact path="/admin/"></Route>

        </Switch>
      </Router> */}

    </>
  );
}

export default App;
