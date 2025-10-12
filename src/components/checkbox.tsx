import { useState } from "preact/hooks";

export function Checkbox() {
  var [checked, setChecked] = useState(false);
  var style = {
    unchecked: {
      appearance: "none",
      background: "#233",
      border: "none",
      borderRadius: ".5em",
      fontSize: "1em",
      margin: ".5em",
      width: "1.5em",
      height: "1.5em"
    },
    checked: {
      appearance: "none",
      background: "url(./check.svg) center / contain, #06F",
      border: "none",
      borderRadius: ".5em",
      fontSize: "1em",
      margin: ".5em",
      width: "1.5em",
      height: "1.5em"
    }
  };
  var toggle = () => setChecked(!checked);
  var getStyle = () => checked ? style.checked : style.unchecked;
  return <input type="checkbox" checked={checked} onChange={toggle} style={getStyle()} />;
}