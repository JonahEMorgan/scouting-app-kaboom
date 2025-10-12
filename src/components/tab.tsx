import { useContext } from "preact/hooks"
import { Tabs } from "../app.tsx"

type TabParameters = {
	children: string
	name: string
}

export function Tab({ children, name }: TabParameters) {
	var tabs = useContext(Tabs);
	var style = {
		background: "none",
		border: "none",
		padding: ".5em",
		fontFamily: "Action Jackson",
		fontSize: "2em",
		textShadow: ".1em .1em .2em black",
		width: "100%"
	};
	return <button style={style} onClick={() => tabs(name)}>
		{children}
	</button>;
}