import React from "react"; // , { useEffect, useState }
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login from "./Login/containers/login-container";
import { ProtectedRoute } from "./protected-route";

import EditOnboarding from "./Home/components/EditOnboarding";
import HomeList from "./Home/containers/home-list";

import { signOut } from "./Utils/auth";

function App() {
  const logingOut = async () => {
    /* Esta funcion es para autenticación con AWS Cognito utilizando API Gateway     
    await Auth.signOut();
    */
    await signOut();
    window.location.href = "/";
  };

  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/" component={Login} />
        <Route exact path="/logout" component={logingOut} />
        <ProtectedRoute exact path="/home" component={HomeList} />
        <ProtectedRoute path="/edit/:id" component={EditOnboarding} />
      </Switch>
    </Router>
  );
}

//export default withAuthenticator(App, true);
export default App;
