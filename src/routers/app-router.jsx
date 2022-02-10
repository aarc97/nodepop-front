import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import LoginPage from "../pages/login/login-page.component";
import AdvertsPage from "../pages/adverts/adverts-page.component";
import AdvertPage from "../pages/advert/advert-page.component";
import NotFoundPage from "../pages/not-found/not-found-page.component.jsx";

import ProtectedRoute from "./protected-route";

const AppRouter = () => {
  return (
    <Routes>
      <Route exact path='/login' element={<LoginPage />} />
      <Route exact path='/adverts' element={<ProtectedRoute />}>
        <Route exact path='/adverts' element={<AdvertsPage />} />
      </Route>
      <Route exact path='/advert' element={<ProtectedRoute />}>
        <Route exact path='/advert' element={<AdvertPage />} />
      </Route>
      <Route exact path='/' element={<ProtectedRoute />}>
        <Route exact path='/' element={<Navigate replace to='/adverts' />} />
      </Route>
      <Route exact path='*' element={<NotFoundPage />} />
    </Routes>
  );
};
export default AppRouter;
