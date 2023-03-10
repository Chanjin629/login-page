import React, { Suspense } from 'react';
import {
  Route,
  Routes
} from "react-router-dom";

import LandingPage from './views/LandingPage/LandingPage';
import LoginPage from './views/LoginPage/LoginPage';
import RegisterPage from './views/RegisterPage/RegisterPage';
import NavBar from "./views/NavBar/NavBar";
import Footer from "./views/Footer/Footer";
import Auth from '../hoc/auth'

function App() {

  const AuthLandingPage = Auth(LandingPage, null);
  const AuthLoginPage = Auth(LoginPage, false);
  const AuthRegisterPage = Auth(RegisterPage, false);
  
  return (
    <Suspense fallback={(<div>Loading...</div>)}>
      <NavBar />
      <div style={{ paddingTop: '69px', minHeight: 'calc(100vh - 80px)' }}>
         <Routes>
          <Route exact path="/" element={<AuthLandingPage/>}/>
          <Route exact path="/login" element={< AuthLoginPage/>}/>
          <Route exact path="/register" element={<AuthRegisterPage/>}/>
        </Routes>
      </div>
      <Footer />
    </Suspense>
  );
}

export default App;