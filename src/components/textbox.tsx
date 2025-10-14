import type { TargetedEvent } from "preact";

type TextboxParameters = {
  value: string | number
  set: Function
  area?: string
}

export function Textbox({ value, set, area = "" }: TextboxParameters) {
  var style = {
    gridArea: area,
    background: "#233",
    border: "none",
    borderRadius: ".5em",
    fontSize: "1em",
    padding: ".5em",
    height: "100%"
  };
  var change = (input: TargetedEvent<HTMLTextAreaElement, Event>) => set(input.target!.value);
  return <textarea onChange={change} style={style}>{value}</textarea>;
}