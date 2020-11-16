import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { UserApi } from "../../api/UserApi";
import { myNewsApi } from "../../api/NewsActionApi";
import Main from "../Main/Main";
import ProtectedRoute from "../ProtectedRoute";
import SavedNews from "../SavedNews/SavedNews";
import Footer from "../Footer/Footer";

import "./App.css";

function App() {
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({});
  const [savedNews, setSavedNews] = React.useState([]);

  function checkUserToken() {
    const token = localStorage.getItem("token");
    if (token) {
      UserApi.getCurrentUser(token)
        .then((res) => {
          if (res) {
            setCurrentUser(res);
            setLoggedIn(true);
            myNewsApi
              .get()
              .then((res) => setSavedNews(res))
              .catch((err) => console.log(err));
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  React.useEffect(() => {
    checkUserToken();
  }, [loggedIn]);

  return (
    <CurrentUserContext.Provider
      value={{ currentUser, setCurrentUser, setLoggedIn, loggedIn, savedNews }}
    >
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Main loggedIn={loggedIn} savedNews={savedNews} setSavedNews={setSavedNews} />
          </Route>
          <ProtectedRoute
            exact
            path="/saved-news"
            loggedIn={loggedIn}
            component={SavedNews}
            setSavedNews={setSavedNews}
          />
          <Route path="/">
            <Redirect to="/" />
          </Route>
        </Switch>
        <Footer />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
