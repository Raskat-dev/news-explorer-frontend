import React from "react";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";

function SavedNews({ loggedIn }) {
  return (
    <Header saved={true} component={Navigation} loggedIn={loggedIn} />
  );
}

export default SavedNews;
