import { useState } from "react";
import './App.css';
export default function Cronometro(){
  const [timer, setTimer]= useState(0)

function iniciarContagem() {
  setInterval(() => {
      setTimer(prev => prev + 1)
  }, 200);
}
return(
  <div style={{'display': 'block', 'width': '240px','margin': '0 auto', 'textAlign': 'center', 'transform': 'scale(2) translateY(50%)'}}>
    <h2>{timer}</h2>
    <button onClick = {iniciarContagem}>Contar</button>
    <button>Parar</button>
  </div>
  );
}
