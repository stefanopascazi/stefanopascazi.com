import {useState} from 'react'
import {Result} from './Result'
import {json} from './resuls'
import './css/Console.css'

export const Console = props => {

    const [console, setConsole] = useState()
    const [result, setResult] = useState([])

    const __clear = e => {
        document.getElementById("start").value = "";
        document.getElementById("start").focus()
    }

    const __submit = async e => {
        if( e.which === 13 )
        {            
            if( console === 'clear' )
            {
                setResult([])
                __clear()
                return;
            }

            let string = console.replace(/-|--| /gi, (x) => {
                return ""
            });
            
            if(! Object.prototype.hasOwnProperty.call(json, string) )
            {            
                setConsole(console+": command not found")
            }
            else {
                setConsole(Object.getOwnPropertyDescriptor(json, string).value)
            }            
            
            const array = [...result]
            array.push(<Result setConsole={setConsole} __submit={__submit} result={console} />)
            setResult(array)
            e.preventDefault()
        }
    }

    const rows = result.map((v,i) => 
        <Result key={i} setConsole={setConsole} __submit={__submit} result={console} />
    )

    return (
        <>
            <div className="console">
                <label><code className={"first"}>stefanopascazi:<span className={"tilde"}>~</span> <span className={"dollar"}>$</span></code></label>
                <input id="start" type={"text"} onChange={ e => setConsole(e.target.value)} onKeyPress={__submit} autoFocus></input>            
            </div>
            {rows}
        </>
    )
}