import { Counter } from "../components/counter";
import { Toggle } from "../components/toggle";
import type { Store } from "../store";

type AutoOptions = {
  store: {
    store: {
      auto: Store["auto"]
    },
    set: Function
  },
}

export function Auto({store: {store: {auto}, set}}: AutoOptions) {
  var style = {
    section: {
      display: "grid",
      gap: "1em",
      height: "100%",
      gridTemplate: `
        "a e h"
        "a e h"
        "a e h"
        "b e h"
        "b f i"
        "b f i"
        "c f i"
        "c f i"
        "c g j"
        "d g j"
        "d g j"
        "d g j"
      `
    }
  };
  return <section style={style.section}>
    <Counter area="a" value={auto.coral.four} set={set("auto", "coral", "four")}>
      Auto Coral L4
    </Counter>
    <Counter area="b" value={auto.coral.three} set={set("auto", "coral", "three")}>
      Auto Coral L3
    </Counter>
    <Counter area="c" value={auto.coral.two} set={set("auto", "coral", "two")}>
      Auto Coral L2
    </Counter>
    <Counter area="d" value={auto.coral.one} set={set("auto", "coral", "one")}>
      Auto Coral L1
    </Counter>
    <Toggle area="e" value={auto.left} set={set("auto", "left")} yesColor="green" noColor="red">
      Leave
    </Toggle>
    <Counter area="f" value={auto.coral.missed} set={set("auto", "coral", "missed")}>
      Auto Coral Missed
    </Counter>
    <Counter area="g" value={auto.algae.missed} set={set("auto", "algae", "missed")}>
      Auto Algae Missed
    </Counter>
    <Counter area="h" value={auto.algae.net} set={set("auto", "algae", "net")}>
      Auto Algae Net
    </Counter>
    <Counter area="i" value={auto.algae.removed} set={set("auto", "algae", "removed")}>
      Auto Algae Removed
    </Counter>
    <Counter area="j" value={auto.algae.processor} set={set("auto", "algae", "processor")}>
      Auto Algae Processor
    </Counter>
  </section>;
}