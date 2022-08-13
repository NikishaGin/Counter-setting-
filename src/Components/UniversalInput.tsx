import React, {ChangeEvent} from "react";
import TextField from "@mui/material/TextField";

type InputType = {
    callback: (value: number) => void
    callbackValueState: number
}

export const UniversalInput = (props: InputType) => {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.callback(+e.currentTarget.value)
    }

    return <div>
        <TextField
            id="standard-number"
            type="number"
            value={props.callbackValueState}
            onChange={onChangeHandler}
            InputLabelProps={{
                shrink: true,
            }}
            variant="standard"
        />
    </div>

}