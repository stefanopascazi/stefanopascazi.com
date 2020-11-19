import {useState} from 'react'

export const Result = props => {

    const [result] = useState(props.result)

    return (
        <>
            <p className={"result"} dangerouslySetInnerHTML={{__html:result}} />
            <div className="console">
                <label><code className={"first"}>stefanopascazi:<span className={"tilde"}>~</span> <span className={"dollar"}>$</span></code></label>
                <input type={"text"} onChange={ e => props.setConsole(e.target.value)} onKeyPress={props.__submit} autoFocus></input>            
            </div>
        </>
    )
}