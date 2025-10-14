import { useState } from "preact/hooks"

type DropdownParameters = {
  options: Array<string | number>
  value: number
  set: Function
  area?: string
}

export function Dropdown({ options, value, set, area = "" }: DropdownParameters) {
  var [opened, setOpened] = useState(false);
  var style = {
    button: {
      background: "url(./arrow.svg) right / contain no-repeat, #233",
      border: "none",
      borderRadius: ".5em",
      fontSize: "1em",
      padding: ".5em",
      margin: ".5em",
      width: "10em",
      position: "relative",
      textAlign: "left",
      gridArea: area
    },
    options: {
      display: "flex",
      flexDirection: "column",
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      borderRadius: ".5em",
      background: "#555",
      overflow: "hidden",
      zIndex: 1
    },
    option: {
      border: "none",
      background: "none",
      fontSize: "1em",
      padding: ".5em"
    }
  };
  var click = () => setOpened(true);
  function change(option: string | number) {
    return (event: Event) => {
      event.stopPropagation();
      set(options.indexOf(option));
      setOpened(false);
    };
  }
  return <>
    <button style={style.button} onClick={click}>
      {options[value]}
      {
        opened && <div style={style.options}>
          {options.map(
            option => <button style={style.option} onClick={change(option)}>
              {option}
            </button>
          )}
        </div>
      }
    </button>
  </>;
}