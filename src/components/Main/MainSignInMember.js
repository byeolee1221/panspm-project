import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { MemberSigninAction } from "../../store/MemberSigninSlice";
import { sendNewMemberData } from "../../store/MemberSigninActions";
import { uiActions } from "../../store/UiSlice";

import useMember from "../../hooks/useMember";
import MemberSignInMsg from "../UI/MemberSignInMsg";
import classes from "./MainSignInMember.module.css";
import activity6 from "../../assets/activity6.jpg";

const MainSignInMember = () => {
    const {
        value: enteredName,
        valueChangeHandler: nameChangeHandler,
    } = useMember((value) => value.trim() !== '');

    const {
        value: enteredAge,
        valueChangeHandler: ageChangeHandler,
    } = useMember((value) => value.trim() !== '');

    const {
        value: enteredSex,
        valueChangeHandler: sexChangeHandler,
    } = useMember((value) => value.trim() !== '');

    const {
        value: enteredTell,
        valueChangeHandler: tellChangeHandler,
    } = useMember((value) => value.trim() !== '');

    const {
        value: enteredPart,
        valueChangeHandler: partChangeHandler,
    } = useMember((value) => value.trim() !== '');

    const {
        value: enteredArmy,
        valueChangeHandler: armyChangeHandler,
    } = useMember((value) => value.trim() !== '');

    const {
        value: enteredGenre,
        valueChangeHandler: genreChangeHandler,
    } = useMember((value) => value.trim() !== '');

    const {
        value: enteredMusician,
        valueChangeHandler: musicianChangeHandler,
    } = useMember((value) => value.trim() !== '');

    let formIsValid = false;
    
    if (enteredName && enteredAge && enteredSex && enteredTell && enteredPart ) {
        formIsValid = true;
    }
    
    const dispatch = useDispatch();

    const showSignInMsg = useSelector((state) => state.ui.msgIsVisible);
    const signInMsg = useSelector((state) => state.ui.statusMsg);

    const submitHandler = (event) => {
        event.preventDefault();

        const userData = {
            name: enteredName,
            age: enteredAge,
            sex: enteredSex,
            tell: enteredTell,
            part: enteredPart,
            army: enteredArmy,
            genre: enteredGenre,
            musician: enteredMusician,
        };

        dispatch(MemberSigninAction.addMemberData(userData));
        dispatch(sendNewMemberData(userData));
        dispatch(uiActions.showMsgBox());   
    }; 

    return (
        <div className={classes.main_signin_container}>
            <div className={classes.signin_title}>
                <img src={activity6} alt="activity" />
                <div className={classes.signin_title_inner}>
                    <h1>동아리 가입신청</h1>        
                    <p>제출하시면 현 회장 또는 부회장이 며칠 내 연락드리겠습니다.</p>
                </div>
            </div>
            {showSignInMsg && <MemberSignInMsg status={signInMsg.status} title={signInMsg.title} message={signInMsg.message} />}
            {!showSignInMsg && <div className={classes.signin_form_box}>
                <h2>가입원서</h2>
                <form className={classes.signin_form} onSubmit={submitHandler} >
                    <div className={classes.form_element}>
                        <label htmlFor="user_name">이름</label>
                        <input type="text" id="user_name" name="username" value={enteredName} onChange={nameChangeHandler} />
                    </div>
                    <div className={classes.form_element}>
                        <label htmlFor="user_age">나이</label>
                        <input type="number" id="user_age" name="userage" max="99" value={enteredAge} onChange={ageChangeHandler} />
                    </div>
                    <div className={classes.form_element_check}>
                        <h2>성별</h2>
                        <div className={classes.check_box}>
                            <input type="checkbox" id="user_sex_man" name="usersex man" value="man" onChange={sexChangeHandler} />
                            <label htmlFor="user_sex_man">남자</label>
                        </div>
                        <div className={classes.check_box}>
                            <input type="checkbox" id="user_sex_woman" name="usersex woman" value="woman" onChange={sexChangeHandler} />
                            <label htmlFor="user_sex_woman">여자</label>
                        </div>
                    </div>
                    <div className={classes.form_element}>
                        <label htmlFor="user_tel">연락처</label>
                        <input type="tel" id="user_tel" name="usertel" value={enteredTell} onChange={tellChangeHandler} />
                    </div>
                    <div className={classes.form_element_check}>
                        <h2>원하는 파트</h2>
                        <div className={classes.check_box}>
                            <input type="checkbox" id="user_part_vocal" name="vocal" value="vocal" onChange={partChangeHandler} />
                            <label htmlFor="user_part_vocal">보컬</label>
                        </div>
                        <div className={classes.check_box}>
                            <input type="checkbox" id="user_part_guitar" name="guitar" value="guitar" onChange={partChangeHandler} />
                            <label htmlFor="user_part_guitar">기타</label>
                        </div>
                        <div className={classes.check_box}>
                            <input type="checkbox" id="user_part_drum" name="drum" value="drum" onChange={partChangeHandler} />
                            <label htmlFor="user_part_drum">드럼</label>
                        </div>
                        <div className={classes.check_box}>
                            <input type="checkbox" id="user_part_bass" name="bass" value="bass" onChange={partChangeHandler} />
                            <label htmlFor="user_part_bass">베이스</label>
                        </div>
                        <div className={classes.check_box}>
                            <input type="checkbox" id="user_part_keyboard" name="keyboard" value="keyboard" onChange={partChangeHandler} />
                            <label htmlFor="user_part_keyboard">키보드</label>
                        </div>
                    </div>
                    <div className={classes.form_element} id={classes.element_army}>
                        <label htmlFor="user_army">군입대 희망시기</label>
                        <input type="text" id="user_army" name="userarmy" placeholder="대상자인 경우에만 자유롭게 작성" value={enteredArmy} onChange={armyChangeHandler} />
                        <p>밴드동아리 특성상 신입-현역(2년)단계로 이뤄지기 때문에 해당 정보의 제출이 필요합니다.</p>
                    </div>
                    <div className={classes.form_element}>
                        <label htmlFor="user_genre">좋아하는 장르</label>
                        <input type="text" id="user_genre" name="usergenre" value={enteredGenre} onChange={genreChangeHandler} />
                    </div>
                    <div className={classes.form_element}>
                        <label htmlFor="user_musician_like">좋아하는 뮤지션</label>
                        <input type="text" id="user_musician_like" name="musician like" value={enteredMusician} onChange={musicianChangeHandler} />
                    </div>
                    <button disabled={!formIsValid}>제출하기</button>
                </form>
            </div>}
        </div>
    );
}

export default MainSignInMember;