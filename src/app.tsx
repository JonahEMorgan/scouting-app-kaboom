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

export var Tabs = createContext(null as unknown as Dispatch<StateUpdater<string>>);

export var Theme = createContext("dark");

export function App() {
  var [page, setPage] = useState("general");
  var [theme, setTheme] = useState("dark");
  var store = new Wrapper();
  var toggle = () => setTheme(theme == "dark" ? "light" : "dark");
  var pages = {
    general: <General store={store} theme={toggle} />,
    auto:    <Auto />,
    teleop:  <Teleop />,
    end:     <End />,
    qr:      <QR />,
    data:    <Data />,
  };
  var style = {
    nav: {
      background: "#0A0",
      display: "flex"
    },
    main: {
      padding: "1em"
    }
  };
  return <>
    <nav style={style.nav}>
      <Theme.Provider value={theme}>
        <Tabs.Provider value={setPage}>
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
      {pages[page]}
    </main>
  </>;
}
