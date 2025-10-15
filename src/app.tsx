import { useState, type Dispatch, type StateUpdater } from "preact/hooks"
import { createContext } from "preact"
import { Tab } from "./components/tab.tsx"
import { General } from "./tabs/general.tsx"
import { Auto } from "./tabs/auto.tsx"
import { Teleop } from "./tabs/teleop.tsx"
import { End } from "./tabs/end.tsx"
import { QR } from "./tabs/qr.tsx"
import { Data } from "./tabs/data.tsx"
import { Wrapper } from "./store.tsx"
import { DataViewer } from "./components/data-viewer.tsx"

type TabContext = {
  tab: string,
  setTab: Dispatch<StateUpdater<string>>
}

export var Tabs = createContext(null as unknown as TabContext);

export var Dark = createContext(true);

export function App() {
  var [tab, setTab] = useState("general");
  var [dark, setDark] = useState(true);
  var store = new Wrapper();
  var toggle = () => setDark(!dark);
  var pages = {
    general: <General store={store} theme={toggle} />,
    auto:    <Auto store={store} />,
    teleop:  <Teleop store={store} />,
    end:     <End store={store} />,
    qr:      <QR store={store} />,
    data:    <Data store={store} />,
  };
  var style = {
    nav: {
      background: "#0A0",
      display: "flex"
    },
    main: {
      background: dark ? "#122" : "url(./sea.svg)",
      padding: "1em",
      height: "100%",
      overflow: "scroll"
    },
    team: {
      position: "fixed",
      bottom: ".5em",
      left: ".5em"
    }
  };
  return <>
    <Dark.Provider value={dark}>
      <nav style={style.nav}>
        <Tabs.Provider value={{tab, setTab}}>
          <Tab name="general">General</Tab>
          <Tab name="auto">Auto</Tab>
          <Tab name="teleop">Teleop</Tab>
          <Tab name="end">End</Tab>
          <Tab name="qr">QR</Tab>
          <Tab name="data">Data</Tab>
        </Tabs.Provider>
      </nav>
      <main style={style.main}>
        {pages[tab]}
        {import.meta.env.DEV && <DataViewer store={store} />}
        <h1 style={style.team}>{store.store.general.team}</h1>
      </main>
    </Dark.Provider>
  </>;
}
