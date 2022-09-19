import { Switch, Route } from "react-router-dom";
import { Cart } from "./Pages/Cart";
import { Details } from "./Pages/Details";
import { Login } from "./Pages/Login";

import { Main } from './Pages/Main';

export function Routes() {

  return (
    <Switch>
      <Route exact path="/">
        <Main />
      </Route>
      <Route exact path="/Details/:identificationPage">
        <Details />
      </Route>
      <Route exact path="/cart">
        <Cart />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
    </Switch>
  );
}