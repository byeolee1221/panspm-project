// 새로운 비밀번호가 '추가'되는 게 아니라 '변경'되는 방법을 이해 후 적용 예정

import { uiActions } from "./UiSlice";

export const replacePassword = (newPassword, user, allUser) => {
    return async (dispatch) => {
        dispatch (
            uiActions.showStatusMsg({
                status: "pending",
                title: "잠시만 기다려주세요!",
                message: "정보를 수정하고 있습니다."
            })
        );

        const sendRequest = async () => {
            const response = await fetch('https://react-http-d54e9-default-rtdb.firebaseio.com/panspmUserdata.json', {
                method: 'PUT',
                body: JSON.stringify({ ...allUser ,...user, password: newPassword })
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
                title: "비밀번호가 변경되었습니다.",
                message: "다시 로그인해주세요!"
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