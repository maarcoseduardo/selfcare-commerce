import { Switch, Route } from "react-router-dom";
import { Cart } from "./Pages/Cart";
import { Details } from "./Pages/Details";

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
    </Switch>
  );
}