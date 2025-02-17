import {useState, useRef} from "react";

export const useInput = (initialValue, validator) => {
    const [value, setValue] = useState(initialValue);
    function onChange(e) {
        const {
            target: { value }
        } = e;

        let willUpdate = true;
        if (typeof validator === "function") {
            willUpdate = validator(value);
        }
        if (willUpdate) {
            setValue(value);
        }
    }
    return { value, onChange };
};