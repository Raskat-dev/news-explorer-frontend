import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import Main from "../Main/Main";
import ProtectedRoute from "../ProtectedRoute";
import SavedNews from "../SavedNews/SavedNews";
import Footer from "../Footer/Footer";

function App() {
  const [loggedIn, setLoggedIn] = React.useState(true);

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Main loggedIn={loggedIn}/>
        </Route>
        <ProtectedRoute
          exact
          path="/saved-news"
          loggedIn={loggedIn}
          component={SavedNews}
        />
        <Route path="/">
          <Redirect to="/" />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
