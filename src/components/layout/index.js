import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FilterIndex from '../../views/filter';
import HomeIndex from '../../views/home';
import HomeDetails from '../../views/home/detail';

import Header from './../header/index';



function Layout() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={ <HomeIndex /> }/>
                <Route path='/Poke/Details/:id' element={ <HomeDetails /> }/>
                <Route path='/Filter/:nombre' element={ <FilterIndex /> }/>
            </Routes>
        </BrowserRouter>
    );
  }

export default Layout;