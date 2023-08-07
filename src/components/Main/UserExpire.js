import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MypageActions } from "../../store/MyPageSlice";
import { replaceUserList } from "../../store/MemberExpireActions";
import { uiActions } from "../../store/UiSlice";
import { LoginActions } from "../../store/LoginSlice";
import ExpireMsg from "../UI/ExpireMsg";

import classes from "./UserExpire.module.css";

const UserExpire = () => {
    const dispatch = useDispatch();

    const allUsers = useSelector((state) => state.mypage.allUsers);
    const user = useSelector((state) => state.mypage.deleteUser);
    const deleteUser = useSelector((state) => state.mypage.delete);
    const showMsg = useSelector((state) => state.ui.msgIsVisible);
    const deleteMsg = useSelector((state) => state.ui.statusMsg);

    useEffect(() => {
        if (deleteUser === true) {
            const remainingUsers = allUsers.filter((userData) => userData !== user);
            console.log(remainingUsers);
            dispatch(replaceUserList(remainingUsers));
            dispatch(LoginActions.logout());
            dispatch(uiActions.showMsgBox());      
        };
    }, [deleteUser]) 

    const userDeleteHandler = () => {
        dispatch(MypageActions.delete());
        console.log(deleteUser);

    }

    return (
        <Fragment>
            <div className={classes.mypage_container}>
                <div className={classes.mypage_wrapper}>
                        <div className={classes.mypage_title}>
                            <h1>MY PAGE</h1>
                        </div>
                    {showMsg && <ExpireMsg status={deleteMsg.status} title={deleteMsg.title} message={deleteMsg.message} />}
                    {!showMsg && <div className={classes.expire_container}>
                        <p>회원탈퇴를 진행하게 되면 정보가 완전히 사라집니다. 탈퇴하시겠습니까?</p>
                        <button type="button" className={classes.expire_btn} onClick={userDeleteHandler}>탈퇴하기</button>
                    </div>}
                </div>
            </div>
        </Fragment>
    );
}

export default UserExpire;