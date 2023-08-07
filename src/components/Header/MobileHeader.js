import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LoginActions } from "../../store/LoginSlice";
import { contactActions } from "../../store/ContactSlice";
import { signinActions } from "../../store/SignInSlice";
import { mobileActions } from "../../store/MobileSlice";
import MobileBackdrop from "./MobileBackdrop";

import classes from "./MobileHeader.module.css";

const MobileHeader = () => {
    const dispatch = useDispatch();

    const showBackdrop = useSelector((state) => state.mobile.showBackdrop);

    const headerCloseHandler = () => {
        dispatch(mobileActions.toggle());
        dispatch(mobileActions.backdrop());
    }

    const loginToggleHandler = () => {
        dispatch(LoginActions.toggle());
        dispatch(LoginActions.backdrop());
        dispatch(mobileActions.toggle());
        dispatch(mobileActions.backdrop());
    }

    const contactToggleHandler = () => {
        dispatch(contactActions.toggle());
        dispatch(contactActions.backdrop());
        dispatch(mobileActions.toggle());
        dispatch(mobileActions.backdrop());
    }

    const signinToggleHandler = () => {
        dispatch(signinActions.toggle());
        dispatch(signinActions.backdrop());
        dispatch(mobileActions.toggle());
        dispatch(mobileActions.backdrop());
    }

    return (
        <Fragment>
            {showBackdrop && <MobileBackdrop />}
            <aside className={classes.mobileHeader_section}>
                <div className={classes.mobileHeader_container}>
                    <div className={classes.header_nav}>
                        <nav className={classes.header_nav}>
                            <ul className={classes.nav_list}>
                                <li className={classes.nav_item}>
                                    <Link to="introduction" onClick={headerCloseHandler}>동아리 소개</Link>
                                </li>
                                <li className={classes.nav_item}>
                                    <Link to="signinMember" onClick={headerCloseHandler}>동아리 가입신청</Link>
                                </li>
                                <li className={classes.nav_item}>
                                    <Link to="https://cafe.naver.com/moksinlove" target="_blank" rel="noopener noreferrer">동아리 기록</Link>
                                </li>                      
                                <li className={classes.nav_item}>
                                    <button id={classes.signin_btn} type="button" onClick={signinToggleHandler}>회원가입</button>
                                </li>
                                <li className={classes.nav_item}>
                                    <button id={classes.login_btn} type="button" onClick={loginToggleHandler}>로그인</button>
                                </li>
                                <li className={classes.nav_item}>
                                    <button id={classes.contact_btn} type="button" onClick={contactToggleHandler}>💡 동아리 문의</button>
                                </li>  
                                <li className={classes.nav_item}>
                                    <button id={classes.contact_btn} type="button" onClick={headerCloseHandler}>닫기</button>
                                </li>                         
                            </ul>                     
                        </nav>                     
                    </div>
                </div>
            </aside>
        </Fragment>
    );
}

export default MobileHeader;