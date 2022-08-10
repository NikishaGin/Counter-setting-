import React, {ChangeEvent, useState} from 'react';
import './App.css';
import {Button, Stack} from "@mui/material";

function App() {

    let [counter, setCounter] = useState(0)
    let [settingsMax, setSettingsMax] = useState(0)
    let [settingsMin, setSettingsMin] = useState(0)

    const onChangeMaxHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setSettingsMax(+e.currentTarget.value)
    }

    const onChangeMinHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setSettingsMin(+e.currentTarget.value)
    }

    const setButtonHandler = () => {
        setCounter(settingsMin)
    }

    const incButtonHandler = () => {
        setCounter(counter + 1)
    }

    const resetButtonHandler = () => {
        setCounter(0)
    }

    // @ts-ignore
    return (

        <div className="App">
            <div className={"Input"}>
                <div className={'xxx'}>
                    <div>
                        <div className={"maxValue"}>
                            <div>max value:</div>
                            <div>
                                <input type={"number"} value={settingsMax} onChange={onChangeMaxHandler}/>
                            </div>
                        </div>
                        <div className={"startValue"}>
                            <div>start value:</div>
                            <div>
                                <input type={"number"} value={settingsMin} onChange={onChangeMinHandler}/>
                            </div>
                        </div>
                    </div>
                    <div className={"buttonInput"}>
                        <Button onClick={setButtonHandler} variant="contained" color="success">
                            SET
                        </Button>
                    </div>
                </div>
            </div>

            <div className={"Counter"}>
                <div>
                    <h2 className={"h2"}>
                        {counter}
                    </h2>
                </div>
                <div className={"ButtonCounter"}>
                    <div>
                        <Button disabled={counter === settingsMax} onClick={incButtonHandler} variant="contained" color="success">
                            INC
                        </Button>
                    </div>
                    <div>
                        <Button onClick={resetButtonHandler} variant="outlined" color="error">
                            RESET
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
