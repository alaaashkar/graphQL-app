import debounce from 'lodash.debounce';
import { Header } from '../Header';
import './Layout.scss'
import { useState } from 'react';
import { RootState } from '../../../Store/Store';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router';
import { filterProductsBySearch } from '../../../Store/Slices/ProductsSlice';
import { Navbar } from '../../Navbar/Navbar';

export const Layout = () => {

  return (
    <div className='App'>
      <Header />

      <Navbar />

      <hr />

      <Outlet />
    </div>
  );
};
