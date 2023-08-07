import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { LoginActions } from "../../store/LoginSlice";
import { mobileActions } from "../../store/MobileSlice";

import classes from "./LoginHeader.module.css";
import logo from "../../assets/logo.jpg";
import menu from "../../assets/menu.png";

const LoginHeader = () => {
    const dispatch = useDispatch();

    const logoutBtnHandler = () => {
        dispatch(LoginActions.logout());
    }

    const mobileHeaderHandler = () => {
        dispatch(mobileActions.toggle());
        dispatch(mobileActions.backdrop());
    }

    return (
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
                                    <Link to="mypage">마이페이지</Link>
                                </li>
                                <li className={classes.nav_right_item}>  
                                    <button id={classes.logout_btn} type="button" onClick={logoutBtnHandler}>
                                        <Link to="/" className={classes.logout_btn_link}>로그아웃</Link>
                                    </button>                            
                                </li>                        
                            </ul>
                        </nav>
                    </div>
                </div>
        </header>
    );
}

export default LoginHeader;