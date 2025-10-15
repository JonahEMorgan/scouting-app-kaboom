import { useContext, useState } from "preact/hooks"
import type { Wrapper } from "../store"
import { highlight, languages } from "prismjs"
import { Dark } from "../app"

type DataViewerOptions = {
	store: Wrapper
}

export function DataViewer({ store }: DataViewerOptions) {
	var [opened, setOpened] = useState(false);
	var dark = useContext(Dark);
	var style = {
		button: {
			background: `url(./debug.svg) center / 2em no-repeat, ${dark ? "#233" : "#1458"}`,
			backdropFilter: "blur(10px)",
			width: "3em",
			height: "3em",
			border: "none",
			borderRadius: "100em",
			position: "fixed",
			bottom: "1em",
			right: "1em"
		},
		modal: {
			position: "fixed",
			top: "5em",
			left: "10em",
			bottom: "5em",
			right: "10em",
			background: dark ? "#233" : "#1458",
			backdropFilter: "blur(10px)",
			borderRadius: ".5em",
			padding: "2em",
			textOverflow: "ellipsis",
			overflowX: "hidden",
			overflowY: "scroll",
			whiteSpace: "pre-wrap"
		}
	};
	var toggle = () => setOpened(!opened);
	var html = {
		__html: highlight(JSON.stringify(store, null, 2), languages.json, "json")
	};
	return <>
		<button style={style.button} onClick={toggle}></button>
		{opened && <div style={style.modal} dangerouslySetInnerHTML={html}></div>}
	</>;
}