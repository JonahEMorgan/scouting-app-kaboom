import { useContext, useState } from "preact/hooks";
import { Checkbox } from "../components/checkbox";
import { encodeQR } from "qr";
import type { Store, Subset } from "../store";
import { Dark } from "../app";

type QROptions = {
  store: {
    store: Store
    reset: Function
  },
}

export function QR({store: {store, reset}}: QROptions) {
  var dark = useContext(Dark);
  var style = {
    button: {
      background: dark ? "#233" : "#1458",
      backdropFilter: "blur(10px)",
      border: "none",
      borderRadius: ".5em",
      fontSize: "1em",
      padding: ".5em",
    },
    section: {
      display: "grid",
      gap: "1em",
      gridTemplate: `
        "a a" 5em
        "b b" 3em
        "c c" 1fr
        "d e" 4em
      `,
      justifyContent: "center",
      textAlign: "center"
    },
  };
  var [label, setLabel] = useState("XXXX_XXXX");
  var [keep, setKeep] = useState(true);
  var [qr, setQR] = useState("");
  var display = () => {
    var value = store.output();
    setQR(encodeQR(value, "svg", {
      ecc: "high"
    }));
    var type = ["PRAC", "QUAL", "PLAY"][store.general.type];
    setLabel(
      `${type}_${store.general.match}`
    );
    var key = `${["B","R"][store.general.alliance]}${store.general.position}${
      type}${store.general.replay ? "replay" : ""}ScoutingData${store.general.match}`;
    localStorage[key] = value;
    var link = document.createElement("a");
    link.download = `${key}.txt`;
    link.href = URL.createObjectURL(new Blob([value], {
      type: "text/plain"
    }));
    link.click();
  };
  var restart = () => {
    var kept: Subset<Store> = {
      general: {
        match: store.general.match + 1
      }
    };
    if(keep) {
      kept.general!.name = store.general.name;
    }
    reset(kept);
  };
  return <section style={style.section}>
    <button onClick={display} style={{...style.button, gridArea: "a"}}>
      Display QR Code
    </button>
    <h1 style={{gridArea: "b"}}>{label}</h1>
    <div style={{gridArea: "c"}} dangerouslySetInnerHTML={{__html: qr}}></div>
    <button onClick={restart} style={{...style.button, gridArea: "d"}}>
      Restart Session
    </button>
    <label style={{gridArea: "e"}}>
      Continue Scouting?
      <Checkbox value={keep} set={(value: boolean) => setKeep(value)} />
    </label>
  </section>;
}
