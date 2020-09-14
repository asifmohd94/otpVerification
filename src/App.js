import React from 'react';

import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import OptScreen from "./components/OptScreen";
import Sign from "./components/OptScreen";
import Success from "./components/OptScreen";

function App() {
  return (
   <Router>

<div>
  <Switch>

   <Route exact path="/" component={Sign} />
   <Route exact path="/verify" component={OptScreen} />
   <Route exact path="/success" component={Success} />

  </Switch>
</div>

   </Router>
  );
}

export default App;
