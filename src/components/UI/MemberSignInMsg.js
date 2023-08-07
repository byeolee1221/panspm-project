import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { uiActions } from "../../store/UiSlice";
import { MemberSigninAction } from "../../store/MemberSigninSlice";

import classes from "./MemberSignInMsg.module.css";

const MemberSignInMsg = (props) => {
    const dispatch = useDispatch();

    const closeHandler = () => {
        dispatch(uiActions.showMsgBox());
        dispatch(MemberSigninAction.dataReset());
    };

    const MsgClasses = `${classes.MemberSigninMsg} ${classes.statusClasses}`;

    return (
        <div className={MsgClasses}>
            <h2>{props.title}</h2>
            <p>{props.message}</p>
            <button type="button" onClick={closeHandler}><Link to=".." relative="path">확인</Link></button>
        </div>
    );
}

export default MemberSignInMsg;