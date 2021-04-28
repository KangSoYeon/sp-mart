import React from 'react';
import { Navigate } from 'react-router-dom';
import NotFoundView from './NotFoundView';

import AdminMain from './admin/Main';
import ManageShop from './admin/ManageShop/Main';
import ManageCustomer from './admin/ManageCustomer/Main';
import ManageOrder from './admin/ManageOrder/Main';
import ManageProduct from './admin/ManageProduct/Main';
import EditMain from './admin/ManageProduct/EditMain'
import NewProduct from './admin/ManageProduct/NewProduct2'
import EditProduct from './admin/ManageProduct/EditProduct'


import Main from './shop/pages/Main';
import ProductDetail from './shop/pages/ProductDetail';
import ProductList from './shop/pages/ProductList';
import MainTitle from './shop/pages/MainTitle'
import SignIn from './shop/pages/SignIn'
import SignUp from './shop/pages/SignUp'
import Cart from './shop/pages/Cart'
import MyPage from './shop/pages/MyPage'

const routes = [{
    path: 'admin',
    element: < AdminMain />,
    children: [
      { path: 'shop', element: <ManageShop /> },
      { path: 'customer', element: <ManageCustomer /> },
      {
        path: 'product', element: <ManageProduct />,
        children: [
          { path: 'editMain', element: <EditMain /> },
          { path: 'newProduct', element: <NewProduct /> },
          { path: 'editProduct', element: <EditProduct /> }
        ]
      },
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
      { path: '/', element: <MainTitle/>},
      { path: '/signIn', element: <SignIn /> },
      { path: '/signUp', element: <SignUp /> },
      { path: '/cart', element: <Cart /> },
      { path: '/myPage', element: <MyPage /> },
      { path: '404', element: <NotFoundView /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  },
];

export default routes;
