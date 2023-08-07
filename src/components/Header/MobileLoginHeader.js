import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { mobileActions } from "../../store/MobileSlice";
import { LoginActions } from "../../store/LoginSlice";

import classes from "./MobileLoginHeader.module.css";
import MobileBackdrop from "./MobileBackdrop";

const MobileLoginHeader = () => {
    const dispatch = useDispatch();

    const showBackdrop = useSelector((state) => state.mobile.showBackdrop);

    const headerCloseHandler = () => {
        dispatch(mobileActions.toggle());
        dispatch(mobileActions.backdrop());
    }

    const logoutBtnHandler = () => {
        dispatch(LoginActions.logout());
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
                                    <Link to="mypage" onClick={headerCloseHandler}>마이페이지</Link>
                                </li>                  
                                <button id={classes.logout_btn} type="button" onClick={logoutBtnHandler}>
                                    <Link to="/" className={classes.logout_btn_link}>로그아웃</Link>
                                </button>    
                                <button id={classes.logout_btn} type="button" onClick={headerCloseHandler}>
                                    <Link to="/" className={classes.logout_btn_link}>닫기</Link>
                                </button>    
                            </ul>                     
                        </nav>                     
                    </div>
                </div>
            </aside>
        </Fragment>
    );
}

export default MobileLoginHeader;