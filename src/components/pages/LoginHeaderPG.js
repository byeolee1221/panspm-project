import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import LoginHeader from "../Header/LoginHeader";


const LoginHeaderPG = () => {
    const checkuser = useSelector((state) => state.signin.checkUserData);

    return (
        <Fragment>
            {checkuser && <LoginHeader />}
        </Fragment>
    );
}

export default LoginHeaderPG;