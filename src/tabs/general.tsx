import { Dropdown } from "../components/dropdown.tsx";
import { Input } from "../components/input.tsx"
import { Checkbox } from "../components/checkbox.tsx"
import type { MouseEventHandler } from "preact";
import type { Store } from "../store.tsx";

type GeneralOptions = {
  store: {
    store: {
      general: Store["general"]
    },
    set: Function
  },
  theme: MouseEventHandler<HTMLButtonElement>
}

export function General({store: {store: {general}, set}, theme}: GeneralOptions) {
  var styles = {
    section: {
      fontSize: "1.2em",
      display: "flex",
      flexDirection: "column",
    },
    icon: {
      maxWidth: "10em"
    },
    label: {
      width: "20em",
      display: "flex",
      alignItems: "center",
      justifyContent: "end"
    }
  };
  return <>
    <section style={styles.section}>
      <label style={styles.label}>
        Name:
        <Input value={general.name} set={set("general", "name")} />
      </label>
      <label style={styles.label}>
        Match Type:
        <Dropdown value={general.type} set={set("general", "type")} options={[
          "Practice", "Qualifications", "Playoffs"
        ]}/>
      </label>
      <label style={styles.label}>
        Match Number:
        <Input value={general.match} set={set("general", "match")} type="number" />
      </label>
      <label style={styles.label}>
        Replay?
        <Checkbox />
      </label>
      <label style={styles.label}>
        Alliance:
        <Dropdown value={general.alliance} set={set("general", "alliance")} options={[
          "Blue", "Red"
        ]}/>
      </label>
      <label style={styles.label}>
        Starting Position:
        <Dropdown value={general.position} set={set("general", "position")} options={[
          "1", "2", "3", "4", "5"
        ]}/>
      </label>
      <label style={styles.label}>
        Team Number:
        <Input value={general.team} set={set("general", "team")} type="number" />
      </label>
      <img style={styles.icon} src="./dark-logo.svg" />
      <button onClick={theme}></button>
    </section>
  </>;
}