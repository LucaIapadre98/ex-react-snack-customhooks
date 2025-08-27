import useSwitch from "./hook/useSwith";
import useDate from "./hook/useDate";

export default function App() {
  const [ isOn, toggle ] = useSwitch();
  const currentDate = useDate();

  return (
    <>
    <div>
      <h1>Il valore è: {isOn ? "On" : "Off"}</h1>
      <button onClick={toggle}>Cambia stato</button>
    </div>
    <div>
      <h1>Data ed ora attuali:</h1>
      <p>{currentDate.toLocaleString()}</p>
    </div>
    </>
  );
};

 
