import React, {useContext, useEffect, useState} from 'react';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Footer from "./components/Footer";
import './css/style.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
import * as Scripts from './js/scripts.js';
import {observer} from "mobx-react-lite";
import {Context} from "./index";
import {check} from "./http/userAPI";
import {Spinner} from "react-bootstrap";

const App = () => {
  const {user} = useContext(Context)
  const [loading, setLoading] = useState(true)

  // useEffect(() => {
  //     check().then(data => {
  //         user.setUser(data)
  //         user.setIsAuth(true)
  //     }).finally(() => setLoading(false))
  // }, [])

  // if (loading) {
  //     return <Spinner animation={"grow"}/>
  // }

  return (
    <BrowserRouter>
      <AppRouter />
      <Footer />
    </BrowserRouter>
  );
};

export default App;