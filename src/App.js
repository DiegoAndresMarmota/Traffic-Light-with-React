import "./App.css";
import { useState } from "react";

function App() {
  /*Funcionalidades del semaforo: Luz Roja*/
  const [rojo, setRojo] = useState(false);
  /*Funcionalidades del semaforo: Luz Amarilla*/
  const [amarillo, setAmarillo] = useState(false);
  /*Funcionalidades del semaforo: Luz Verde*/
  const [verde, setVerde] = useState(false);

  return (
    <div className="container">
      <div className="viga">
        <div className="contenedor-semaforo">
          <div
            className={`rojo ${rojo === true ? "encendido" : ""}`}
            onClick={() => {
              setRojo(!rojo);
              setAmarillo(false);
              setVerde(false);
            }}
          ></div>
          <div
            className={`amarillo ${amarillo === true ? "encendido" : ""}`}
            onClick={() => {
              setAmarillo(!amarillo);
              setRojo(false);
              setVerde(false);
            }}
          ></div>
          <div
            className={`verde ${verde === true ? "encendido" : ""}`}
            onClick={() => {
              setVerde(!verde);
              setAmarillo(false);
              setRojo(false);
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default App;
