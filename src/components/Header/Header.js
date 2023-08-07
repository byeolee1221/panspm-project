import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { LoginActions } from "../../store/LoginSlice";
import { contactActions } from "../../store/ContactSlice";
import { signinActions } from "../../store/SignInSlice";
import { mobileActions } from "../../store/MobileSlice";

import classes from "./Header.module.css";
import logo from "../../assets/logo.jpg";
import menu from "../../assets/menu.png";

const Header = (props) => {
    const dispatch = useDispatch();

    const loginToggleHandler = () => {
        dispatch(LoginActions.toggle());
        dispatch(LoginActions.backdrop());
    }

    const contactToggleHandler = () => {
        dispatch(contactActions.toggle());
        dispatch(contactActions.backdrop());
    }

    const signinToggleHandler = () => {
        dispatch(signinActions.toggle());
        dispatch(signinActions.backdrop());
    }

    const mobileHeaderHandler = () => {
        dispatch(mobileActions.toggle());
        dispatch(mobileActions.backdrop());
    }

    return (
        <Fragment>
            <header className={classes.header_section}>
                <div className={classes.header_container}>
                    <div className={classes.header_logo}>
                        <Link to="/">
                            <img src={logo} alt="header logo"></img>PAN'S PM
                        </Link>
                    </div>
                    <div className={classes.header_nav}>
                        <nav className={classes.header_nav_left}>
                            
                            <ul className={classes.nav_left_list}>
                                <li className={classes.nav_left_item}>
                                    <Link to="introduction">동아리 소개</Link>
                                </li>
                                <li className={classes.nav_left_item}>
                                    <Link to="signinMember">동아리 가입신청</Link>
                                </li>
                                <li className={classes.nav_left_item}>
                                    <Link to="https://cafe.naver.com/moksinlove" target="_blank" rel="noopener noreferrer">동아리 기록</Link>
                                </li>
                            </ul>
                        </nav>
                        <nav className={classes.header_nav_right}>
                            <button type="button" className={classes.nav_mobile_btn} onClick={mobileHeaderHandler}>
                                <img src={menu} alt="menu bar"></img>
                            </button>
                            <ul className={classes.nav_right_list}>
                                <li className={classes.nav_right_item}>
                                    <button id={classes.signin_btn} type="button" onClick={signinToggleHandler}>회원가입</button>
                                </li>
                                <li className={classes.nav_right_item}>
                                    <button id={classes.login_btn} type="button" onClick={loginToggleHandler}>로그인</button>
                                </li>
                                <li className={classes.nav_right_item}>
                                    <button id={classes.contact_btn} type="button" onClick={contactToggleHandler}>💡 동아리 문의</button>
                                </li>                          
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        </Fragment>
    );
}

export default Header;