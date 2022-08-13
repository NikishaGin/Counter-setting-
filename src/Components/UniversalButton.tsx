import React from "react";
import {Button, Stack} from "@mui/material";

type ButtonTYpe = {
    name: string
    callback: () => void
    settingsMax: number
    settingsMin: number
    counter: number
}

export const UniversalButton = (props: ButtonTYpe) => {

    const onclickHandler = () => {
        props.callback()
    }

    const Disabled = () =>
        props.settingsMax < 0 || props.settingsMin < 0 || props.settingsMax === props.settingsMin ||
        props.settingsMax === props.counter

    return <div className={"login-box"}>
        <Stack spacing={2} direction="row">
            <Button disabled={Disabled()} onClick={onclickHandler}  variant="contained">{props.name}</Button>
        </Stack>
    </div>
}