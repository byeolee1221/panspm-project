import { uiActions } from "./UiSlice";

export const sendNewMemberData = (data) => {
    return async (dispatch) => {
        dispatch(uiActions.showStatusMsg({
            status: "pending",
            title: "잠시만 기다려주세요!",
            message: "입력하신 정보를 전송중입니다."
        }));

        const sendRequest = async () => {
            const response = await fetch('https://react-http-d54e9-default-rtdb.firebaseio.com/panspmNewMember.json', {
                method: 'POST',
                headers: { "content-type": "application/json" },
                body: JSON.stringify({ SignInData: data })
            });

            if (!response.ok) {
                throw new Error('서버에 오류가 발생했습니다. 잠시 후에 다시 시도해주세요!');
            };

            const userData = await response.json();

            return userData;
        };

        try {
            await sendRequest();

            dispatch(uiActions.showStatusMsg({
                status: "success",
                title: "감사합니다!",
                message: "전송되었습니다. 며칠 내로 연락드리겠습니다."
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