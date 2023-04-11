import React from 'react'
import { Navbar, Footer } from './components/index';
import { MarketplacePage, SellerPage, LoginPage, ItemPage, StoresPage, StorePage } from './pages/';
import { Route, Routes } from 'react-router-dom';

export const CheaperApp = () => {
    return (
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={ <MarketplacePage/> }/>
          <Route path="/marketplace" element={ <MarketplacePage/> }/>
          <Route path="/seller" element={ <SellerPage/> }/>
          <Route path="/item/:id" element={ <ItemPage/> }/>
          <Route path="/login" element={ <LoginPage/> }/>
          <Route path="/stores" element={ <StoresPage/> }/>
          <Route path="/store/:id" element={ <StorePage/> }/>
          <Route path="/*" element={ <h1>ERROR PAGE NOT FOUND</h1> }/>
        </Routes>
        {/* <Footer/> */}
      </>

    )
};
