import React from "react";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";

function Main({ loggedIn }) {
  return (
    <Header main={true} component={Navigation} loggedIn={loggedIn} />
  );
}

export default Main;
