import React, { Fragment, useState } from "react";
import ReactDOM from "react-dom";
import { useSelector, useDispatch } from "react-redux";
import { LoginActions } from "../../store/LoginSlice";
import { fetchUserData } from "../../store/SignInActions";
import LoginMsg from "../UI/LoginMsg";

import Backdrop from "./Backdrop";
import classes from "./Login.module.css";
import logo from "../../assets/logo.jpg";

const Login = () => {
    const dispatch = useDispatch();

    const loginCloseHandler = () => {
        dispatch(LoginActions.toggle());
        dispatch(LoginActions.backdrop());
        dispatch(LoginActions.reset());
    }
    
    const showBackdrop = useSelector((state) => state.login.backdropIsVisible);
    const idState = useSelector((state) => state.login.idAuth);
    const passwordState = useSelector((state) => state.login.passwordAuth);
    const showMsg = useSelector((state) => state.login.msgIsVisible);
    const loginMsg = useSelector((state) => state.login.statusMsg);

    const [userid, setUserid] = useState('');
    const [password, setPassword] = useState('');

    

    const loginsubmitHandler = (event) => {
        event.preventDefault();

        const userInput = { userid, password };

        dispatch(LoginActions.idAuth(userInput.userid));
        dispatch(LoginActions.passwordAuth(userInput.password));

        if (!idState && !passwordState) {
            dispatch(fetchUserData(userInput));
        }; 
    }

    return ReactDOM.createPortal (
        <Fragment>
            {showBackdrop && <Backdrop />}
            <aside className={classes.login_overlay}>
                {showMsg && <LoginMsg status={loginMsg.status} title={loginMsg.title} message={loginMsg.message} /> }
                {!showMsg && <div className={classes.login_container}>
                    <div className={classes.login_logo}>
                        <img src={logo} alt="login logo"></img>
                        <h2>Pan's PM</h2>
                    </div>
                    <form className={classes.login_form} onSubmit={loginsubmitHandler}>
                        <div className={classes.form_element}>
                            <label htmlFor="userid">아이디</label>
                            <input type="text" id="userid" name="userid" value={userid} onChange={(event) => setUserid(event.target.value)} />
                        </div>
                        <div className={classes.form_element}>
                            <label htmlFor="password">비밀번호</label>
                            <input type="password" id="password" name="password" value={password} onChange={(event) => setPassword(event.target.value)} />   
                        </div>
                        <button>로그인</button>
                        <button type="button" onClick={loginCloseHandler}>돌아가기</button>
                    </form>
                </div>}
            </aside>
        </Fragment>, document.getElementById('overlay')
    );
}

export default Login;