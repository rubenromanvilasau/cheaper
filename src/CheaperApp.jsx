import React from 'react'
import { Navbar, Footer } from './components/index';
import { MarketplacePage, SellerPage, LoginPage, ItemPage, StoresPage, StorePage, CartPage, NewProductPage, OrderHistoryPage } from './pages/';
import { Route, Routes } from 'react-router-dom';
import { Web3Provider } from './context/Web3Provider';

export const CheaperApp = () => {
    return (
      <Web3Provider>
        <Navbar />
        <Routes>
          <Route path="/" element={ <MarketplacePage/> }/>
          <Route path="/marketplace" element={ <MarketplacePage/> }/>
          <Route path="/seller" element={ <SellerPage/> }/>
          <Route path="/item/:id" element={ <ItemPage/> }/>
          <Route path="/login" element={ <LoginPage/> }/>
          <Route path="/stores" element={ <StoresPage/> }/>
          <Route path="/store/:id" element={ <StorePage/> }/>
          <Route path="/cart" element={ <CartPage/> }/>
          <Route path="/new-product" element={ <NewProductPage/> }/>
          <Route path="/order-history" element={ <OrderHistoryPage/> }/>
          <Route path="/*" element={ <h1>ERROR PAGE NOT FOUND</h1> }/>
        </Routes>
        <Footer/>
      </Web3Provider>

    )
};
