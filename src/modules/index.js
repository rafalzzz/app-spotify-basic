import React, { useState } from "react";

import { Switch, Route, useHistory } from "react-router-dom";

import firebase, { auth } from "../common/firebase";

import { Login } from "./loginPanel/index";
import { LogoutMenu } from "./logoutMenu/layout";
import { Sidebar } from "./sidebar/index";
import { List } from "./list/index";
import { Footer } from "./footer/index";

export const Layout = () => {
  const [user, setUser] = useState(false);
  const history = useHistory();

  const signInUser = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth
      .signInWithPopup(provider)
      .then(function(result) {
        setUser(result.user.displayName);
        console.log(result.user.displayName);
        history.push("/user/main");
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  const handleSignOut = () => {
    auth.signOut();
    history.push("/");
  };

  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Login onClick={signInUser} />
        </Route>
        <Route path="/user/">
          <LogoutMenu handleSignOut={handleSignOut} username={user} />
          <Sidebar />
          <List />
          <Footer />
        </Route>
      </Switch>
    </div>
  );
};
