import useSwitch from "./hook/useSwith";
import useDate from "./hook/useDate";
import UseMousePosition from "./hook/UseMousePosition.jsx";


export default function App() {
  const [ isOn, toggle ] = useSwitch();
  const currentDate = useDate();
  const mousePosition = UseMousePosition(<span>$</span>);

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
    <div>
      <h1>Posizione del mouse:</h1>
      {mousePosition}
    </div>
    </>
  );
};

 
