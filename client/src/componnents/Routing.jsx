import React from 'react';
import  { Routes,Route } from 'react-router-dom' 
import MainPage from './MainPage';
import Navbar from './NavBar';
import AccountArea from './AccountArea';
import MyAddedLists from './MyAddedLists';
import MyLists from './MyLists';
import ContactUs from './ContactUs';
import Footer from './Footer';
import AddList from './AddList';
import ShowList from './ShowList';
import AdminContactUs from './AdminContactUs';
import AdminSupport from './AdminSupport';
import Search from './Search';
import CookiesPolicy from './CookiesPolicy';
import TermsAndConditions from './TermsAndCondiotions';
import PrivacyPolicy from './PrivacyPolicy';
const Routing = () => {
    return (
        <div>
            <Navbar/>
            <Routes>
                <Route path='/' element={<MainPage/>}></Route>
                <Route path='/accountArea' element={<AccountArea/>}></Route>
                <Route path='/termsAndCondiotions' element={<TermsAndConditions/>}></Route>
                <Route path='/privacyPolicy' element={<PrivacyPolicy/>}></Route>
                <Route path='/myLists' element={<MyLists/>}></Route>
                <Route path='/contactUs' element={<ContactUs/>}></Route>
                <Route path='/myAddedLists' element={<MyAddedLists/>}></Route>
                <Route path='/addList' element={<AddList/>}></Route>
                <Route path='/list/:list' element={<ShowList/>}></Route>
                <Route path='/adminContactUs' element={<AdminContactUs/>}></Route>
                <Route path='/adminSupport' element={<AdminSupport/>}></Route>
                <Route path='/search' element={<Search/>}></Route>
                <Route path='/cookiesPolicy' element={<CookiesPolicy/>}></Route>
            </Routes>
            <Footer/>
        </div>
    );
}

export default Routing;
