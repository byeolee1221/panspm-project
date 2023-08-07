import React, { Fragment, useEffect } from "react";
import ReactDOM from "react-dom";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { uiActions } from "../../store/UiSlice";
import { signinActions } from "../../store/SignInSlice";
import { sendUserData } from "../../store/SignInActions";

import useSignin from "../../hooks/useSignin";
import SigninBackdrop from "./SigninBackdrop";
import classes from "./SignIn.module.css";
import SignInMsg from "../UI/SignInMsg";

const SignIn = () => {
    const {
        value: affiliation,
        valueChangeHandler: affiliationChangeHandler
    } = useSignin((value) => value.trim() !== '');

    const {
        value: ordinal,
        valueChangeHandler: ordinalChangeHandler
    } = useSignin((value) => value.trim() !== '');

    const {
        value: name,
        valueChangeHandler: nameChangeHandler
    } = useSignin((value) => value.trim() !== '');

    const {
        value: userid,
        valueChangeHandler: useridChangeHandler
    } = useSignin((value) => value.trim() !== '');

    const {
        value: password,
        valueChangeHandler: passworddChangeHandler
    } = useSignin((value) => value.trim() !== '' && value.length > 8);

    const {
        value: email,
        valueChangeHandler: emailChangeHandler
    } = useSignin((value) => value.trim() !== '' && value.trim().include('@'));

    let formIsValid = false;

    if (affiliation && name && userid && password && email) {
        formIsValid = true;
    }

    const dispatch = useDispatch();

    const showBackdrop = useSelector((state) => state.signin.backdropIsVisible);
    const showSignInMsg = useSelector((state) => state.ui.msgIsVisible);
    const signInMsg = useSelector((state) => state.ui.statusMsg);

    const signinCloseHandler = () => {
        dispatch(signinActions.toggle());
        dispatch(signinActions.backdrop());
    }

    const privacyBtnHandler = () => {
        dispatch(signinActions.toggle());
        dispatch(signinActions.backdrop());
    }
    
    const submitHandler = (event) => {
        event.preventDefault();

        const userData = { id: Math.random().toString(), affiliation, ordinal, name, userid, password, email };
        

        dispatch(uiActions.showMsgBox());
        dispatch(signinActions.addUserData(userData));
        dispatch(sendUserData(userData));
    }

    useEffect(() => {
        dispatch(sendUserData());
    }, [dispatch]);

    return ReactDOM.createPortal (
        <Fragment>
            {showBackdrop && <SigninBackdrop />}        
            <aside className={classes.signin_overlay}>
            {showSignInMsg && <SignInMsg status={signInMsg.status} title={signInMsg.title} message={signInMsg.message} />}
                {!showSignInMsg && <div className={classes.signin_container}>
                    <h2>Pan's PM에 오신 것을 환영합니다.</h2>
                    <p>동아리에 가입하고 싶으신 분은 상단의 '동아리 가입신청'을 이용해주세요!</p> 
                        <form className={classes.signin_form} onSubmit={submitHandler} >
                            <div className={classes.signin_form_element}>
                                <label htmlFor="user_affiliation">소속</label>
                                <select id="user_affiliation" name="affiliation" value={affiliation} onChange={affiliationChangeHandler} >
                                    <option value="">--소속을 골라주세요--</option>
                                    <option value="panspm">Pan's PM</option>
                                    <option value="other">타 동아리</option>
                                    <option value="none">어느 동아리도 아님</option>
                                </select>
                            </div>
                            <div className={classes.signin_form_element}>
                                <label htmlFor="user_ordinal">기수</label>
                                <input type="number" id="user_ordinal" name="ordinal" min="1" placeholder=" Pan's PM 멤버만 입력" value={ordinal} onChange={ordinalChangeHandler} />
                            </div>
                            <div className={classes.signin_form_element}>
                                <label htmlFor="user_name">이름</label>
                                <input type="text" id="user_name" name="name" value={name} onChange={nameChangeHandler} />
                            </div>
                            <div className={classes.signin_form_element}>
                                <label htmlFor="user_id">아이디</label>
                                <input type="text" id="user_id" name="userid" value={userid} onChange={useridChangeHandler} />
                            </div>
                            <div className={classes.signin_form_element}>
                                <label htmlFor="user_password">비밀번호</label>
                                <input type="password" id="user_password" name="password" placeholder=" 8자 이상 입력" minLength="8" value={password} onChange={passworddChangeHandler} />
                            </div>
                            <div className={classes.signin_form_element}>
                                <label htmlFor="user_email">이메일</label>
                                <input type="email" id="user_email" name="email" value={email} onChange={emailChangeHandler} />
                            </div>
                            <div className={classes.form_privacy}>
                                <Link to="termsOfService" onClick={privacyBtnHandler}>서비스이용약관</Link>
                                <div id={classes.privacy_centerBar}></div>
                                <Link to="privacyTerms" onClick={privacyBtnHandler}>개인정보처리방침</Link>
                            </div>
                        <button disabled={!formIsValid}>회원가입</button>
                        <button type="button" onClick={signinCloseHandler}>돌아가기</button>
                    </form>
                </div>}
            </aside>
        </Fragment>, document.getElementById('overlay')
    );
}

export default SignIn;