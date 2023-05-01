import React from 'react';
import {
      createBrowserRouter
    } from "react-router-dom";
import LoginLayout from '../layout/LoginLayout';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';
import PrivateRoutes from './PrivateRoutes';

    const router = createBrowserRouter([
        {
          path: "/",
          element: <LoginLayout></LoginLayout>,
          children: [
            {
              path: '/login',
              element: <Login></Login>
            },
            {
              path: '/register',
              element: <PrivateRoutes><Register></Register></PrivateRoutes>
            }

          ]
        },
      ]);

export default router;