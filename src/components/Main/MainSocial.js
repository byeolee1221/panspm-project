import React from "react";
import { Link } from "react-router-dom";

import classes from "./MainSocial.module.css";

import insta from "../../assets/insta.png";
import facebook from "../../assets/facebook.png";
import youtube from "../../assets/youtube.png";

const MainSocial = () => {
    return (
        <div className={classes.main_social_container}>
            <h2>놀러오세요!</h2>
            <div className={classes.social_link}>
                <ul>
                    <li className={classes.social_item}>
                        <Link to="https://www.instagram.com/pans_pm/" target="_blank" rel="noopener noreferrer">
                            <img src={insta} alt="insta" />
                        </Link>
                    </li>
                    <li>
                        <Link to="https://www.facebook.com/people/PANS-PM/100040875442457/" target="_blank" rel="noopener noreferrer">
                            <img src={facebook} alt="facebook" />
                        </Link>
                    </li>
                    <li>
                        <Link to="https://www.youtube.com/@pans_pm" target="_blank" rel="noopener noreferrer">
                            <img src={youtube} alt="youtube" />
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default MainSocial;