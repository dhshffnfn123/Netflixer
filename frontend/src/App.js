import React from 'react';
import { Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import MainPage from './pages/MainPage';
import VideoPage from './pages/VideoPage';
import WritePage from './pages/WritePage';
import AdminPage from './pages/AdminPage';

const App = () => {
  return (
    <>
      <Route component={AdminPage} path="/admin" />
      <Route component={MainPage} path="/" exact />
      <Route component={LoginPage} path="/login" />
      <Route component={RegisterPage} path="/register" />
      <Route component={WritePage} path="/write" />
      <Route component={VideoPage} path="/@:videoId" />
    </>
  );
};

export default App;
