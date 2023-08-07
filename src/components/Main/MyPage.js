import React from "react";
import { Link } from "react-router-dom";

import classes from "./MyPage.module.css";

const MyPage = () => {
    return (
        <div className={classes.mypage_container}>
            <div className={classes.mypage_wrapper}>
                <div className={classes.mypage_title}>
                    <h1>MY PAGE</h1>
                </div>
                <div className={classes.mypage_contents}>
                    <nav className={classes.mypage_nav}>
                        <ul className={classes.nav_list}>
                            {/* <li>
                                <Link to="passwordChange">비밀번호 변경</Link>
                            </li> */}
                            <li>
                                <Link to="expire">회원탈퇴</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default MyPage;