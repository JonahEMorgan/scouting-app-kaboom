import { useContext } from "preact/hooks";
import { Dropdown } from "../components/dropdown";
import { Textbox } from "../components/textbox";
import { Toggle } from "../components/toggle";
import type { Store } from "../store";
import { Dark } from "../app";

type EndOptions = {
  store: {
    store: {
      end: Store["end"]
    },
    set: Function
  },
}

export function End({store: {store: {end}, set}}: EndOptions) {
  var dark = useContext(Dark);
  var style = {
    section: {
      display: "grid",
      gap: "1em",
      height: "100%",
      gridTemplate: `
        "a g k" 1fr
        "b g l" 2fr
        "c h l" 1fr
        "d h l" 2fr
        "e i l" 1fr
        "f j l" 2fr / 1fr 1fr 2fr
      `,
    },
    label: {
      display: "grid",
      gridTemplate: "subgrid / subgrid",
      alignItems: "center"
    }
  };
  return <section style={style.section}>
    <label style={{...style.label, gridArea: "a / a / b / a"}}>
      <span style={{gridArea: "a"}}>Cage Climb Attempted</span>
      <Dropdown area="b" value={end.cage.attempted} set={set("end", "cage", "attempted")} options={[
        "None", "Shallow", "Deep"
      ]}/>
    </label>
    <label style={{...style.label, gridArea: "c / c / d / c"}}>
      <span style={{gridArea: "c"}}>Cage Climb Result</span>
      <Dropdown area="d" value={end.cage.result} set={set("end", "cage", "result")} options={[
        "None", "Shallow", "Deep"
      ]}/>
    </label>
    <label style={{...style.label, gridArea: "e / e / f / e"}}>
      <span style={{gridArea: "e"}}>Defense Faced</span>
      <Dropdown area="f" value={end.defense.faced} set={set("end", "defense", "faced")} options={[
        "None", "Poor", "Passable", "Good", "Excellent"
      ]}/>
    </label>
    <label style={{...style.label, gridArea: "i / i / j / i"}}>
      <span style={{gridArea: "i"}}>Defense Played</span>
      <Dropdown area="j" value={end.defense.played} set={set("end", "defense", "played")} options={[
        "None", "Poor", "Passable", "Good", "Excellent"
      ]}/>
    </label>
    <Toggle area="g" value={end.park} set={set("end", "park")} yesColor="green" noColor={dark ? "#233" : "#1458"}>
      Park
    </Toggle>
    <Toggle area="h" value={end.breakdown} set={set("end", "breakdown")} yesColor="red" noColor="green">
      Breakdown
    </Toggle>
    <label style={{...style.label, gridArea: "k / k / l / k"}}>
      <span style={{gridArea: "k"}}>Comments?</span>
      <Textbox area="l" value={end.comments} set={set("end", "comments")} />
    </label>
  </section>;
}