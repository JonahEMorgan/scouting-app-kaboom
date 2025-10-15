import encodeQR from "qr";
import type { Store } from "../store";
import { useContext } from "preact/hooks";
import { Dark } from "../app";

type DataOptions = {
  store: {
    store: Store
  },
}

var password = "67";
var hints = [
  "Lamello Ball",
  "Doot Doot",
  "TikTok"
];

export function Data({store: {store}}: DataOptions) {
  var download = () => {
    var value = Object.values(localStorage).join("\n");
    var link = document.createElement("a");
    link.download = "scoutingData.txt";
    link.href = URL.createObjectURL(new Blob([value], {
      type: "text/plain"
    }));
    link.click();
  };
  var clear = () => {
    var input = prompt("You are about to wipe scouting data. Are you sure?");
    if(input == password) {
      localStorage.clear();
    } else {
      var hint = hints[Math.floor(Math.random() * hints.length)];
      alert(`The password was incorrect. Hint: ${hint}`);
    }
  };
  var dark = useContext(Dark);
  var style = {
    button: {
      background: dark ? "#233" : "#1458",
      backdropFilter: "blur(10px)",
      border: "none",
      borderRadius: ".5em",
      fontSize: "1em",
      padding: ".5em",
      margin: ".5em"
    },
    code: {
      width: "15em",
      display: "inline-block",
      margin: ".5em"
    }
  };
  return <>
    <button style={style.button} onClick={download}>Download Data</button>
    <button style={{...style.button, background: "red"}} onClick={clear}>Clear Data</button>
    <br />
    {
      Object.values(localStorage).map(value => <div style={style.code}>
        <div dangerouslySetInnerHTML={{__html: encodeQR(value, "svg", {
          ecc: "high"
        })}}></div>
        <span>Match {value.split("\t")[2]}</span>
      </div>)
    }
  </>;
}