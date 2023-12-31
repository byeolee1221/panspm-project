import { useState } from "react";

const useMember = () => {
    const [enteredValue, setEnteredValue] = useState('');

    const valueChangeHandler = (event) => {
        setEnteredValue(event.target.value);
    };

    const reset = () => {
        setEnteredValue('');
    };

    return {
        value: enteredValue,
        valueChangeHandler,
        reset
    }
};

export default useMember;