import { useContext } from "preact/hooks";
import { Dark } from "../app";

type CheckboxParameters = {
  value: boolean
  set: Function
}

export function Checkbox({ value, set }: CheckboxParameters) {
  var dark = useContext(Dark);
  var style = {
    unchecked: {
      appearance: "none",
      background: dark ? "#233" : "#1458",
      backdropFilter: "blur(10px)",
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
  var toggle = () => set(!value);
  var getStyle = () => value ? style.checked : style.unchecked;
  return <input type="checkbox" checked={value} onChange={toggle} style={getStyle()} />;
}