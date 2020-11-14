import React from 'react';
import { Provider } from "react-redux";
import { configureStore } from "../store"
import {BrowserRouter as Router } from "react-router-dom"
import Navbar from "./Navbar";
import Main from "./Main"

// authorization to check if there is currently a token
import { setAuthorizationToken, setCurrentUser } from "../store/actions/auth"
import jwtDecode from "jwt-decode"


const store = configureStore();

if(localStorage.jwtToken){
  setAuthorizationToken(localStorage.jwtToken)
  // to prevent someone from manually tampering with the key of jwtToken in localstorage
  try{
    store.dispatch(setCurrentUser(jwtDecode(localStorage.jwtToken)))
  }catch(e){
    // forcably logging them out
    store.dispatch(setCurrentUser({}))
  }
}

const App = () => {
  return(
    <Provider store={store}>
      <Router>
        <div className="onboarding">
          <Navbar />
          <Main />
        </div>
      </Router>
  </Provider>
  )
}

export default App;
