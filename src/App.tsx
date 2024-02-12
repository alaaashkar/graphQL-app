import React, { useEffect, lazy, Suspense } from 'react';
import './App.scss';
import { Route, Routes } from 'react-router';
import { Home } from './Views/Home/Home';
import { useDispatch } from 'react-redux';
import { fetchProducts } from './Store/Slices/ProductsSlice';
import { AppDispatch } from './Store/Store';
import { Layout } from './Components/Header/Layout/Layout';
import { Female } from './Views/Female/Female';
import { Products } from './Views/Products/Products';

const LazyMale = lazy(() => import('./Views/Male/Male'))


function App() {
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    dispatch(fetchProducts())
  })

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='/products/man' element={
          <Suspense fallback={<div>Loading...</div>}>
            <LazyMale />
          </Suspense>
        } />
        <Route path='/products/woman' element={<Female />} />
        <Route path='/products/:productId' element={<Products />} />
      </Route >
    </Routes >
  );
}

export default App;
