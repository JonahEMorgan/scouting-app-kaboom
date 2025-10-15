type ToggleParameters = {
  children: string
  value: boolean
  set: Function
  yesColor: string
  noColor: string
  area?: string
};

export function Toggle({children, value, set, yesColor, noColor, area = ""}: ToggleParameters) {
  var style = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    border: "none",
    borderRadius: ".3em",
    fontSize: "1.5em",
    padding: ".5em",
    width: "100%",
    backdropFilter: "blur(10px)",
    gridArea: area
  };
  var click = () => set(!value);
  var color = value ? yesColor : noColor;
  return <button style={{...style, background: color}} onClick={click}>
    <h1>{children}</h1>
    <span>{value ? "Yes" : "No"}</span>
  </button>;
}