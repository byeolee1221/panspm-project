import { LoginActions } from "./LoginSlice";
import { uiActions } from "./UiSlice";
import { MypageActions } from "./MyPageSlice";

export const fetchUserData = (userInput) => {
    return async (dispatch) => {
        const fetchData = async () => {
            const response = await fetch('https://react-http-d54e9-default-rtdb.firebaseio.com/panspmUserdata.json');

            if (!response.ok) {
                throw new Error('오류가 발생하여 회원정보를 가져오지 못했습니다. 잠시 후에 다시 시도해주세요!');
            };

            const data = await response.json();
            
            return data;
        }

        try {
            const userData = await fetchData();
            const users = Object.values(userData);
            const user = users.find((user) => user.signInData.userid === userInput.userid && user.signInData.password === userInput.password);
            const isLogin = true;

            if (user) {
                console.log('로그인 성공');
                dispatch(LoginActions.login());
                dispatch(MypageActions.expire({users, user}));
                localStorage.setItem('userLoggedIn', isLogin);
            } else {
                console.log('로그인 실패');
                dispatch(LoginActions.showMsgBox());
                dispatch(LoginActions.showStatusMsg({
                    status: "error",
                    title: "땡!",
                    message: "아이디나 비밀번호를 다시 확인해주세요!"
                }));
            }
        } catch (error) {
            dispatch(LoginActions.showStatusMsg({
                status: "error",
                title: "죄송합니다!",
                message: "오류가 발생하여 회원정보를 가져오지 못했습니다. 잠시 후에 다시 시도해주세요!"
            }));
        }
    }
}

export const sendUserData = (data) => {
    return async (dispatch) => {
        dispatch (
            uiActions.showStatusMsg({
                status: "pending",
                title: "안녕하세요!",
                message: "곧 가입이 완료됩니다!"
            })
        );

        const sendRequest = async () => {
            const response = await fetch('https://react-http-d54e9-default-rtdb.firebaseio.com/panspmUserdata.json', {
                method: 'POST',
                headers: { "content-type": "application/json" },
                body: JSON.stringify({ signInData: data })
            });

            if (!response.ok) {
                throw new Error('서버에 오류가 발생했습니다. 잠시 후에 다시 시도해주세요!');
            }

            const userData = await response.json();

            return userData;
        }    

        try {
            await sendRequest();

            dispatch(uiActions.showStatusMsg({
                status: "success",
                title: "어서오세요!",
                message: "가입이 완료되었습니다!"
            }));
        } catch (error) {
            dispatch(uiActions.showStatusMsg({
                status: "error",
                title: "죄송합니다!",
                message: "서버에 오류가 발생했습니다. 잠시 후에 다시 시도해주세요!"
            }));
        }
    }
}