type CounterParameters = {
  children: string
  value: number
  set: Function
  area?: string
};

export function Counter({children, value, set, area = ""}: CounterParameters) {
  var style = {
    button: {
      background: "#233",
      border: "none",
      borderRadius: ".1em",
      fontSize: "5em",
      padding: ".5em",
      height: "100%",
      width: "2em"
    },
    wrapper: {
      display: "flex",
      gridArea: area
    },
    content: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      width: "100%"
    },
    span: {
      fontSize: "5em"
    }
  };
  var increase = () => set(value + 1);
  var decrease = () => set(Math.max(0, value - 1));
  return <div style={style.wrapper}>
    <button onClick={decrease} style={style.button}>-</button>
    <div style={style.content}>
      <span>{children}</span>
      <span style={style.span}>{value}</span>
    </div>
    <button onClick={increase} style={style.button}>+</button>
  </div>;
}