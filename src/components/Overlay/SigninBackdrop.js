import React from "react";
import ReactDOM from "react-dom";
import { useDispatch } from "react-redux";
import { signinActions } from "../../store/SignInSlice"; 

import classes from "./Backdrop.module.css";

const SigninBackdrop = () => {
    const dispatch = useDispatch();

    const closeHandler = () => {
        dispatch(signinActions.toggle());
        dispatch(signinActions.backdrop());
    }

    return ReactDOM.createPortal (
            <div className={classes.backdrop} onClick={closeHandler}></div>, document.getElementById('backdrop')
            ) 
    }

export default SigninBackdrop;