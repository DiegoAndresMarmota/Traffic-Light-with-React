import "./App.css";

function App() {
  /*Funcionalidades del semaforo: Encendido*/
  const [encendido, setEncendido] = useState("");
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
          <div className="rojo luz"></div>
          <div className="amarillo luz"></div>
          <div className="verde luz"></div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default App;
