import React, {useState} from 'react';
import './App.css';
import {UniversalButton} from "./Components/UniversalButton";
import {UniversalInput} from "./Components/UniversalInput";


function App() {

    let [counter, setCounter] = useState(0)
    let [settingsMax, setSettingsMax] = useState(0)
    let [settingsMin, setSettingsMin] = useState(0)
    let [error, setError] = useState("incorrect value!")

    const setButtonHandler = () => {
        setCounter(settingsMin)
    }

    const incButtonHandler = () => {
        setCounter(counter + 1)
    }

    const resetButtonHandler = () => {
        setCounter(settingsMin)
    }

    const UtilityFunction = (numMax: number, numMIn: number, title: string, counter: number) =>
        numMax < 0 || numMIn < 0 || numMax === numMIn
            ? <div className={"error"}>{title}</div>
            : <div className={"h2"}>{counter}</div>

    return (
        <div className="App">
            <div className={"Input"}>
                <div className={'xxx'}>
                    <div>
                        <div className={"maxValue"}>
                            <div>max value:</div>
                            <div>
                                <UniversalInput callback={setSettingsMax} callbackValueState={settingsMax}/>
                            </div>
                        </div>
                        <div className={"startValue"}>
                            <div>start value:</div>
                            <div>
                                <UniversalInput callback={setSettingsMin} callbackValueState={settingsMin}/>
                            </div>
                        </div>
                    </div>
                    <div className={"buttonInput"}>
                        <UniversalButton name={"SET"} callback={setButtonHandler} settingsMax={settingsMax}
                                         settingsMin={settingsMin} counter={counter}/>
                    </div>
                </div>
            </div>
            <div className={"Counter"}>
                <div>
                    <h2>
                        {UtilityFunction(settingsMax, settingsMin, error, counter)}
                    </h2>
                </div>
                <div className={"ButtonCounter"}>
                    <div>
                        <UniversalButton name={"INC"} callback={incButtonHandler} settingsMax={settingsMax}
                                         settingsMin={settingsMin} counter={counter}/>
                    </div>
                    <div>
                        <UniversalButton name={"RESET"} callback={resetButtonHandler} settingsMax={settingsMax}
                                         settingsMin={settingsMin} counter={counter}/>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default App;
