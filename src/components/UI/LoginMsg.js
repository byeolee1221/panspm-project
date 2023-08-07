import React, { Fragment } from "react";
import { useDispatch } from "react-redux";
import { LoginActions } from "../../store/LoginSlice";
import classes from "./LoginMsg.module.css";

const LoginMsg = (props) => {
    const dispatch = useDispatch();

    const overlayCloseHandler = () => {
        dispatch(LoginActions.showMsgBox());
        dispatch(LoginActions.reset());
    };

    let statusClasses = '';

    if (props.status === 'error') {
        statusClasses = classes.error;
    };

    if (props.status === 'success') {
        statusClasses = classes.success;
    };

    const MsgClasses = `${classes.loginMsg} ${classes.statusClasses}`;

    return (
        <Fragment>
            <div className={MsgClasses}>
                <h2>{props.title}</h2>
                <p>{props.message}</p>
                <button type="button" onClick={overlayCloseHandler} id={classes.loginBtn}>확인</button>
            </div>
        </Fragment>
    );
}

export default LoginMsg;