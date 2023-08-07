import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { uiActions } from "../../store/UiSlice";
import { MypageActions } from "../../store/MyPageSlice";

import classes from "./ExpireMsg.module.css";

const ExpireMsg = (props) => {
    const dispatch = useDispatch();

    const closeHandler = () => {
        dispatch(uiActions.showMsgBox());
        dispatch(MypageActions.reset());
    };

    const MsgClasses = `${classes.expireMsg} ${classes.statusClasses}`;

    return (
        <div className={MsgClasses}>
            <h2>{props.title}</h2>
            <p>{props.message}</p>
            <button type="button" onClick={closeHandler}><Link to="/">확인</Link></button>
        </div>
    );
}

export default ExpireMsg;