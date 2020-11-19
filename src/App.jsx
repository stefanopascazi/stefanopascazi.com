import { useEffect } from 'react'
import {Console} from './Components/Console/Index'
export const App = () => {
	useEffect(() => {
		document.title = `Stefano Pascazi DOT com`
	}, [])
	return (
		<div id="wrapper">
			<h1 className={"result"}>Welcome to stefanopascazi.com</h1>
			<p className={"result"}>Type something in console</p>
			<p className={"result"}>Try with: cat about and then press Enter,<br />or type --help for all list commands</p>
			<Console />
		</div>
	)
}