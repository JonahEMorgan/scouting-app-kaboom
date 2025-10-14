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

export var Theme = createContext("dark");

export function App() {
  var [tab, setTab] = useState("general");
  var [theme, setTheme] = useState("dark");
  var store = new Wrapper();
  var toggle = () => setTheme(theme == "dark" ? "light" : "dark");
  console.log("I say", theme);
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
      padding: "1em",
      height: "100%"
    }
  };
  return <>
    <nav style={style.nav}>
      <Theme.Provider value={theme}>
        <Tabs.Provider value={{tab, setTab}}>
          <Tab name="general">General</Tab>
          <Tab name="auto">Auto</Tab>
          <Tab name="teleop">Teleop</Tab>
          <Tab name="end">End</Tab>
          <Tab name="qr">QR</Tab>
          <Tab name="data">Data</Tab>
        </Tabs.Provider>
      </Theme.Provider>
    </nav>
    <main style={style.main}>
      {pages[tab]}
      {import.meta.env.DEV && <DataViewer store={store} />}
    </main>
  </>;
}
