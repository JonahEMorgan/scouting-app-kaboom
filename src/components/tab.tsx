import { useContext } from "preact/hooks"
import { Tabs } from "../app.tsx"

type TabParameters = {
	children: string
	name: string
}

export function Tab({ children, name }: TabParameters) {
	var {tab, setTab} = useContext(Tabs);
	var style = {
		button: {
			background: "none",
			border: "none",
			padding: ".5em",
			fontFamily: "Action Jackson",
			fontSize: "2em",
			textShadow: ".1em .1em .2em black",
			width: "100%",
			borderBottom: "none"
		},
		highlight: {
			background: "#0F05",
			borderBottom: ".1em solid #06F"
		}
	};
	var buttonStyle = name == tab ? {...style.button, ...style.highlight} : style.button;
	return <button style={buttonStyle} onClick={() => setTab(name)}>
		{children}
	</button>;
}