import type { TargetedEvent } from "preact";
import { useContext } from "preact/hooks";
import { Dark } from "../app";

type TextboxParameters = {
  value: string | number
  set: Function
  area?: string
}

export function Textbox({ value, set, area = "" }: TextboxParameters) {
  var dark = useContext(Dark);
  var style = {
    gridArea: area,
    background: dark ? "#233" : "#1458",
    backdropFilter: "blur(10px)",
    border: "none",
    borderRadius: ".5em",
    fontSize: "1em",
    padding: ".5em",
    height: "100%"
  };
  var change = (input: TargetedEvent<HTMLTextAreaElement, Event>) => set(
    (input.target! as HTMLTextAreaElement).value
  );
  return <textarea onChange={change} style={style}>{value}</textarea>;
}