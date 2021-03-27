import React from 'react';
import { Navigate } from 'react-router-dom';
import AdminMain from './admin/pages/Main'
import Main from './shop/pages/Main'
import ProductDetail from './shop/pages/ProductDetail'
import ProductList from './shop/pages/ProductList'
import ManageShop from './admin/pages/ManageShop'
import ManageCustomer from './admin/pages/ManageCustomer'
import ManageOrder from './admin/pages/ManageOrder'
import ManageProduct from './admin/pages/ManageProduct'

const routes = [
    {
      path: 'admin',
      element: < AdminMain/>,
      children: [
        { path: 'shop', element: <ManageShop /> },
        { path: 'customer', element: <ManageCustomer /> },
        { path: 'product', element: <ManageProduct /> },
        { path: 'order', element: <ManageOrder /> },
        { path: '*', element: <Navigate to="/404" /> }
      ]
    },
    {
      path: '/',
      element: <Main />,
      children: [
        { path: '/detail/:productId', element: <ProductDetail /> },
        { path: '/list/:listId', element: <ProductList /> },
        // { path: '404', element: <NotFoundView /> },
        { path: '/', element: <Navigate to="/app/dashboard" /> },
        { path: '*', element: <Navigate to="/404" /> }
      ]
    }
  ];
  
  export default routes;
  