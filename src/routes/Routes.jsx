import React from 'react';
import {
      createBrowserRouter
    } from "react-router-dom";
import LoginLayout from '../layout/LoginLayout';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';
import PrivateRoutes from './PrivateRoutes';
import ErrorPage from '../Pages/Home/ErrorPage';
import Home from '../Pages/Home/Home';
import Blog from '../Pages/Home/Blog';
import MainLayout from '../Pages/Home/Main/MainLayout';
import RecipeDetails from '../Pages/Home/Main/RecipeDetails';

    const router = createBrowserRouter([
        {
          path: "/",
          element: <LoginLayout></LoginLayout>,
          errorElement: <ErrorPage></ErrorPage>,
          children: [
            {
              path: 'login',
              element: <Login></Login>
            },
            {
              path: 'register',
              element: <Register></Register>
            },
            {
              path: '/home',
              element: <Home></Home>
            },
            {
              path: '/blog',
              element: <Blog></Blog>
            }

          ]
        },
        {
          path: 'recipe',
          element:<MainLayout></MainLayout>,
          children:[
            {
              path:':id',
              element:<PrivateRoutes><RecipeDetails></RecipeDetails></PrivateRoutes>,
              loader:({params}) => fetch(`http://localhost:5000/recipe/${params.id}`)
            }
          ]
        }
      ]);

export default router;