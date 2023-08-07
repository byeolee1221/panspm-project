import { uiActions } from "./UiSlice";

export const replaceUserList = (SignInData) => {
    return async (dispatch) => {
        dispatch (
            uiActions.showStatusMsg({
                status: "pending",
                title: "감사합니다.",
                message: "회원탈퇴중입니다..."
            })
        );

        const sendRequest = async () => {
            const response = await fetch('https://react-http-d54e9-default-rtdb.firebaseio.com/panspmUserdata.json', {
                method: 'PUT',
                body: JSON.stringify({ ...SignInData })
            });

            if (!response.ok) {
                dispatch(uiActions.showStatusMsg({
                    status: "error",
                    title: "죄송합니다!",
                    message: "서버에 오류가 발생했습니다. 잠시 후에 다시 시도해주세요!"
                }));
            }

            const userData = await response.json();

            return userData;
        }

        try {
            await sendRequest();

            dispatch(uiActions.showStatusMsg({
                status: "success",
                title: "안녕히 가세요!",
                message: "이용해주셔서 감사합니다."
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