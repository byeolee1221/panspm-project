import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

import ScrollToTop from "../UI/ScrollToTop";
import Login from "../Overlay/Login";
import ContactOverlay from "../Overlay/ContactOverlay";
import SignIn from "../Overlay/SignIn";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import PrivacyTerms from "../Main/PrivacyTerms";
import TermsOfService from "../Main/TermsOfService";
import LoginHeader from "../Header/LoginHeader";
import MobileHeader from "../Header/MobileHeader";
import MobileLoginHeader from "../Header/MobileLoginHeader";

const Root = () => {
    const showLogin = useSelector((state) => state.login.loginIsVisible);
    const showContact = useSelector((state) => state.contact.contactIsVisible);
    const showSignin = useSelector((state) => state.signin.signinIsVisible);
    const showPrivacyTerms = useSelector((state) => state.signin.privacyTerms);
    const showTermsOfService = useSelector((state) => state.signin.termsOfService);
    const checkuser = useSelector((state) => state.login.userChecked);
    const showMobileHeader = useSelector((state) => state.mobile.showMenu);
    const showMobileLoginHeader = useSelector((state) => state.mobile.showMenu);

    return (
      <Fragment>
        <ScrollToTop />
        {showLogin && <Login />}
        {showContact && <ContactOverlay />}
        {showSignin && <SignIn />}
        {showPrivacyTerms && <PrivacyTerms />}
        {showTermsOfService && <TermsOfService />}
        {checkuser && <LoginHeader />}
        {!checkuser && <Header />}
        {showMobileHeader && !checkuser && <MobileHeader />}
        {showMobileLoginHeader && checkuser && <MobileLoginHeader />}
        <Outlet />
        <Footer />
      </Fragment>
    );
}

export default Root;