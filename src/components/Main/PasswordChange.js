// 새로운 비밀번호가 '추가'되는 게 아니라 '변경'되는 방법을 이해 후 적용 예정

import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { replacePassword } from "../../store/PasswordChangeActions";
import { MypageActions } from "../../store/MyPageSlice";
import usePasswordChange from "../../hooks/usePasswordChange";

import classes from "./PasswordChange.module.css";

const PasswordChange = () => {
    const dispatch = useDispatch();

    const passwordAuthState = useSelector((state) => state.mypage.passwordAuth);
    const user = useSelector((state) => state.mypage.deleteUser);
    const userPassword = useSelector((state) => state.mypage.userPassword);
    const allUser = useSelector((state) => state.mypage.allUsers);
    const newPassword = useSelector((state) => state.mypage.newPassword);

    const {
        value: enteredPasswordOne,
        valueChangeHandler: passwordOneChangeHandler,
        reset: OneReset
    } = usePasswordChange((value) => value.trim().length > 8)

    const {
        value: enteredPasswordTwo,
        valueChangeHandler: passwordTwoChangeHandler,
        reset: TwoReset
    } = usePasswordChange((value) => value.trim().length > 8)

    const userInput = { enteredPasswordOne, enteredPasswordTwo };

    useEffect(() => {
        if (passwordAuthState === true) {
            console.log(passwordAuthState);
            console.log(userPassword);
            dispatch(replacePassword(newPassword, user, userPassword, allUser));
        };
    }, [passwordAuthState, dispatch, newPassword, user, userPassword, allUser]);

    const passwordChangeHandler = (event) => {
        event.preventDefault();

        dispatch(MypageActions.newPassword(userInput));

        OneReset();
        TwoReset();
    }

    return (
        <div className={classes.mypage_ps_ch_container}>
            <div className={classes.mypage_title}>
                <h1>MY PAGE</h1>
            </div>
            <div className={classes.mypage_password_change}>
                <p>비밀번호를 변경하려면 새 비밀번호를 두 번 입력하세요.</p>
                <form className={classes.ps_ch_form}>
                    <div className={classes.pa_ch_formBox}>
                        <div className={classes.formBox_inner}>
                            <label htmlFor="newPassword">새 비밀번호</label>
                            <input type="password" id="newPassword" name="newPassword" minLength="8" placeholder=" 8자 이상 입력" value={enteredPasswordOne} onChange={passwordOneChangeHandler} />
                        </div>
                        <div className={classes.formBox_inner}>
                            <label htmlFor="newPasswordCheck">비밀번호 확인</label>
                            <input type="password" id="newPasswordCheck" name="newPasswordCheck" minLength="8" value={enteredPasswordTwo} onChange={passwordTwoChangeHandler} />
                        </div>
                    </div>
                    <div className={classes.pa_ch_formBtn}>
                        <button className={classes.pa_ch_btn} onClick={passwordChangeHandler}>변경하기</button>
                        <Link to="/mypage">취소</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default PasswordChange;