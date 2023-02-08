import React from 'react';
import  { Routes,Route } from 'react-router-dom' 
import MainPage from './MainPage';
import Navbar from './NavBar';
import AccountArea from './AccountArea';
import MyLists from './MyLists';
import ContactUs from './ContactUs';
import Footer from './Footer';
const Routing = () => {
    return (
        <div>
            <Navbar/>
            <Routes>
                <Route path='/' element={<MainPage/>}></Route>
                <Route path='/accountArea' element={<AccountArea/>}></Route>
                <Route path='/myLists' element={<MyLists/>}></Route>
                <Route path='/contactUs' element={<ContactUs/>}></Route>
            </Routes>
        </div>
    );
}

export default Routing;
