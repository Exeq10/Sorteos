import React, { useState } from "react";
import Spinner from "./Spinner";
import ConfettiExplosion from "react-confetti-explosion";
function Winner({ arrayPlayers, isLoading, setIsloading }) {
  /* spinner  */
  const [winner, setWinner] = useState("");

  /* confetti */
  const [isExploding, setIsExploding] = useState(false);

  const selectWinner = () => {
    let min = 0;
    let max = arrayPlayers.length - 1;

    let indexWinner = Math.floor(Math.random() * (max - min + 1) + min);

    setIsloading(true);

    setTimeout(() => {
      setIsloading(false);
      setIsExploding(true);
      setWinner(arrayPlayers[indexWinner].name.first);
    }, 2500);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      {arrayPlayers.length >= 2 ? (
        <button
          onClick={() => selectWinner()}
          className="py-2 px-3 relative  bg-green-800 text-white  font-medium mt-8   hover:bg-indigo-800 duration-300 ease-in rounded-md shadow-lg w-52  "
        >
          Sortear
        </button>
      ) : (
        ""
      )}

      {isLoading ? <Spinner /> : ""}

      {winner ? (
        <div className="text-center mt-8">
          {" "}
          <p>El Ganador es !!</p>
          <h2 className="mt-8 text-center font-bold text-blue-950 text-3xl">
            {winner}{" "}
          </h2>
        </div>
      ) : (
        ""
      )}

      {isExploding && <ConfettiExplosion />}
    </div>
  );
}

export default Winner;
