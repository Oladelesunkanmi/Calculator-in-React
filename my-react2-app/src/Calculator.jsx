
import { useState } from "react";
import Footer from "./components/Footer";
import { Toggle } from "./components/Toggle";
function Calculator() {

    const [value, setValue] = useState("");
    const [result, setResult] = useState(0);
    const [isDark, setIsDark] = useState(false);


    const operation = ['/', '+', '*', '-', '.'];

    function handleDisplay(e) {

        if (
            operation.includes(e) && value === '' ||
            operation.includes(e) && operation.includes(value.slice(-1))
        ) {
            return;
        }

        setValue(value + e);
        if (!operation.includes(e)) {
            setResult(eval(value + e).toString())
        }
    }

    function percentage(e) {
        setResult(eval((value * 1.0) / 100));
    }

    function calculate() {
        setValue(eval(value).toString())
    }


    function clear() {
        setValue("");
        setResult("");
    }

    function deleteLast() {
        if (value == '') {
            return;
        }
        const newValue = value.slice(0, -1);
        setValue(newValue);
    }

    return (
        <>

            <div className="calculator-container" >
                <div className="Darkmode" data-theme={isDark ? "dark" : "light"} >

                    <div className="my-toggle">
                        <Toggle isChecked={isDark}
                            handleChange={() => setIsDark(!isDark)}
                        />
                    </div>

                    <div className="arithmetic-operation-display">{value}</div>
                    <div className="display-result" >{result}</div>
                    <div className="button-container">
                        <button className="top-operation" onClick={clear} >c</button>
                        <button className="top-operation" onClick={() => handleDisplay("-")}>±</button>
                        <button className="top-operation" onClick={percentage} >%</button>
                        <button className="operation-digit" onClick={() => handleDisplay("/")}>÷</button>
                        <button onClick={() => handleDisplay("7")}>7</button>
                        <button onClick={() => handleDisplay("8")}>8</button>
                        <button onClick={() => handleDisplay("9")}>9</button>
                        <button className="operation-digit" onClick={() => handleDisplay("*")}>X</button>
                        <button onClick={() => handleDisplay("4")}>4</button>
                        <button onClick={() => handleDisplay("5")}>5</button>
                        <button onClick={() => handleDisplay("6")}>6</button>
                        <button className="operation-digit" onClick={() => handleDisplay("-")}>-</button>
                        <button onClick={() => handleDisplay("1")}>1</button>
                        <button onClick={() => handleDisplay("2")}>2</button>
                        <button onClick={() => handleDisplay("3")}>3</button>
                        <button className="operation-digit" onClick={() => handleDisplay("+")}>+</button>
                        <button onClick={() => handleDisplay(".")}>.</button>
                        <button onClick={() => handleDisplay("0")}>0</button>
                        <button onClick={deleteLast}>⌫</button>
                        <button className="operation-digit" onClick={calculate}>=</button>
                    </div>
<Footer/>
                </div>

            </div>
        </>
    );
}

export default Calculator;