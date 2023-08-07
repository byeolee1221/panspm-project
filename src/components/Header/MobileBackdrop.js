import React from "react";
import ReactDOM from "react-dom";
import { useDispatch } from "react-redux";
import { mobileActions } from "../../store/MobileSlice";

import classes from "./MobileBackdrop.module.css";

const MobileBackdrop = () => {
    const dispatch = useDispatch();

    const closeHandler = () => {
        dispatch(mobileActions.toggle());
        dispatch(mobileActions.backdrop());
    }

    return ReactDOM.createPortal (
            <div className={classes.backdrop} onClick={closeHandler}></div>, document.getElementById('backdrop')
            ) 
    }

export default MobileBackdrop;