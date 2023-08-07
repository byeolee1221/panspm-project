import React from "react";
import { useDispatch } from "react-redux";

import { signinActions } from "../../store/SignInSlice";
import { uiActions } from "../../store/UiSlice";
import classes from "./SignInMsg.module.css";

const SignInMsg = (props) => {
    const dispatch = useDispatch();

    const overlayCloseHandler = () => {
        dispatch(signinActions.toggle());
        dispatch(signinActions.backdrop());
        dispatch(uiActions.showMsgBox());
    };

    let statusClasses = '';

    if (props.status === 'error') {
        statusClasses = classes.error;
    };

    if (props.status === 'success') {
        statusClasses = classes.success;
    };

    const MsgClasses = `${classes.signinMsg} ${classes.statusClasses}`;

    return (
        <div className={MsgClasses}>
            <h2>{props.title}</h2>
            <p>{props.message}</p>
            <button type="button" onClick={overlayCloseHandler}>확인</button>
        </div>
    );
}

export default SignInMsg;