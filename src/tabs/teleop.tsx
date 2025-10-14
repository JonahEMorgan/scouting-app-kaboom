import { Counter } from "../components/counter";
import type { Store } from "../store";

type TeleopOptions = {
  store: {
    store: {
      teleop: Store["teleop"]
    },
    set: Function
  },
}

export function Teleop({store: {store: {teleop}, set}}: TeleopOptions) {
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
    <Counter area="a" value={teleop.coral.four} set={set("teleop", "coral", "four")}>
      Teleop Coral L4
    </Counter>
    <Counter area="b" value={teleop.coral.three} set={set("teleop", "coral", "three")}>
      Teleop Coral L3
    </Counter>
    <Counter area="c" value={teleop.coral.two} set={set("teleop", "coral", "two")}>
      Teleop Coral L2
    </Counter>
    <Counter area="d" value={teleop.coral.one} set={set("teleop", "coral", "one")}>
      Teleop Coral L1
    </Counter>
    <Counter area="e" value={teleop.fouls} set={set("teleop", "fouls")}>
      Teleop Fouls
    </Counter>
    <Counter area="f" value={teleop.coral.missed} set={set("teleop", "coral", "missed")}>
      Teleop Coral Missed
    </Counter>
    <Counter area="g" value={teleop.algae.missed} set={set("teleop", "algae", "missed")}>
      Teleop Algae Missed
    </Counter>
    <Counter area="h" value={teleop.algae.net} set={set("teleop", "algae", "net")}>
      Teleop Algae Net
    </Counter>
    <Counter area="i" value={teleop.algae.removed} set={set("teleop", "algae", "removed")}>
      Teleop Algae Removed
    </Counter>
    <Counter area="j" value={teleop.algae.processor} set={set("teleop", "algae", "processor")}>
      Teleop Algae Processor
    </Counter>
  </section>;
}