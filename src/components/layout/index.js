import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Filter_Index from '../../views/filter';
import Home__Index from '../../views/home';
import Home__Details from '../../views/home/detail';

import Header from './../header/index';



function Layout() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={ <Home__Index /> }/>
                <Route path='/Poke/Details/:id' element={ <Home__Details /> }/>
                <Route path='/Filter/:nombre' element={ <Filter_Index /> }/>
            </Routes>
        </BrowserRouter>
    );
  }

export default Layout;