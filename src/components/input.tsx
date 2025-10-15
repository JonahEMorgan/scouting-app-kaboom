import type { TargetedEvent } from "preact";
import { useContext } from "preact/hooks";
import { Dark } from "../app";

type InputParameters = {
  type?: string
  value: string | number
  set: Function
};

export function Input({type = "text", value, set}: InputParameters) {
  var dark = useContext(Dark);
  var style = {
    background: dark ? "#233" : "#1458",
    backdropFilter: "blur(10px)",
    border: "none",
    borderRadius: ".5em",
    fontSize: "1em",
    padding: ".5em",
    margin: ".5em",
    width: "10em"
  };
  var change = (input: TargetedEvent<HTMLInputElement, Event>) => set(input.target!.value);
  return <input type={type} style={style} value={value} onChange={change}/>;
}