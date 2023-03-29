import React, { useEffect, useState } from "react";
import Title from "./Title";
import Player from "./Player";
import Winner from "./Winner";
import Button from "./Button";
import { getRandomNumberInRange } from "../utils/funciones";

// CREAR UN Piedra Papel O Tijera
// pueden utilizar el criterio que quieran para componetizar
// pueden utilizar el criterio que quieran para manejar el estado
// pueden utilizar el criterio que quieran para manejar la lógica del juego

// *se debe elegir una jugada
// *la computadora debe elegir una jugada
// *se debe mostrar el resultado

const GameView = () => {
  // Arreglo de jugadas:
  const arregloJugadas = ["Piedra", "Papel", "Tijera"];

  // State:
  const [jugadaUsuario, setJugadaUsuario] = useState("");
  const [jugadaCPU, setJugadaCPU] = useState("");
  const [resultado, setResultado] = useState("");

  // UseEffect:
  useEffect(() => {
    definirGanador(jugadaUsuario, jugadaCPU); // Se ejecuta cuando hay cambios en jugadaUsuario,jugadaCPU
  }, [jugadaUsuario, jugadaCPU]);

  // Funciones:
  const obtenerjugadaUsuario = (e) => {
    return e.target.value;
  };

  const obtenerjugadaCPU = () => {
    return arregloJugadas[getRandomNumberInRange(0, 2)];
  };

  const handleOnClick = (value) => {
    setJugadaUsuario(obtenerjugadaUsuario(value));
    setJugadaCPU(obtenerjugadaCPU());
  };

  const definirGanador = (jugadaUsuario, jugadaCPU) => {
    if (jugadaUsuario === "" || jugadaCPU === "") {
      setResultado("");
      return;
    }
    if (jugadaUsuario === jugadaCPU) {
      setResultado("Empate");
      return;
    }
    if (jugadaUsuario === "Piedra" && jugadaCPU === "Tijera") {
      setResultado("Jugador1");
      return;
    }
    if (jugadaUsuario === "Papel" && jugadaCPU === "Piedra") {
      setResultado("Jugador1");
      return;
    }
    if (jugadaUsuario === "Tijera" && jugadaCPU === "Papel") {
      setResultado("Jugador1");
      return;
    }
    setResultado("Jugador2");
  };

  return (
    <div>
      <Title titulo={"Piedra Papel Tijera"} />
      <div>
        <Player nombre={"Jugador1"} jugada={jugadaUsuario} />
        <Player nombre={"Jugador2"} jugada={jugadaCPU} />
        <Winner nombre={"Ganador"} resultado={resultado} />
      </div>
      <div>
        {arregloJugadas.map((jugada) => {
          return (
            <Button
              handleOnClick={handleOnClick}
              value={jugada}
              key={jugada}
            ></Button>
          );
        })}
        {/*  <Button handleOnClick={handleOnClick} value={"Piedra"}></Button>
        <Button handleOnClick={handleOnClick} value={"Papel"}></Button>
        <Button handleOnClick={handleOnClick} value={"Tijera"}></Button> */}
      </div>
    </div>
  );
};

export default GameView;
