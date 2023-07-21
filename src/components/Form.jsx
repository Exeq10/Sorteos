import React, { useState,useEffect } from "react";
import Spinner from "./Spinner";




function Form({ arrayPlayers, setArrayPlayers, setIsloading,isLoading}) {
  const [status, setStatus] = useState("hidden");
  const [name, setName] = useState('');
  const [bot,setBot]= useState('')
  const [error, setError] = useState("");
 

  /* funcion que controla el estado de visibilidad  */

  const handleStatus = () => {
    if (status === "hidden") {
      setStatus("flex");
    } else if (status === "flex") {
      setStatus("hidden");
    }
  };

  /* funcion que controla el handle  */

  const handleSubmit = (e) => {
    e.preventDefault();



    if (name.length > 0 ) {
      setIsloading(true)
      setArrayPlayers([...arrayPlayers, {name:{first:`${name}`}}]);

      setIsloading(false)
      setName("");
    }
    
 
    
    else {
      setError("Debe ingresar un Nombre");

      setTimeout(() => {
        setError("");
      }, 1500);
    }
  };


  /* funcion que valida la cantidad de bots   entre 1 - 50*/


  const validateBots = (e) => {


    if(e.target.value > 0 && e.target.value <= 150) {

      setBot(e.target.value)
      
    }
    else{
      
      setError('La cantidad de usuarios random debe ser entre 1 a 150')

      setTimeout(() => {

        setError('')
        
      }, 5000);
    }
    
    
    
    



  }






/* get names for list random */
async function randomData() {

  setIsloading(true)
  const res = await fetch(`https://randomuser.me/api/?results=${bot} `);

  const data = await res.json();

  
 setArrayPlayers( data.results)

 setIsloading(false)
 

}


  return (

    <>
    <form className="mt-9 flex flex-col" onSubmit={handleSubmit}>
      <div className="flex flex-col items-center gap-2">
        <label className="text-lg font-medium">Participante</label>
        <input
          type="text"
          className="outline-none  border-b-2 border-indigo-700 "
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {error.length > 0 ? (
          <p className="text-red-800  mt-4 mb-4 border-2 px-2 py-1 ">
            {error}{" "}
          </p>
        ) : (
          ""
        )}

    
      </div>

     

      <button className="py-2 px-3 bg-indigo-500 text-white  font-medium mt-8   hover:bg-indigo-800 duration-300 ease-in rounded-md shadow-lg ">
        Añadir participantes
      </button>
    </form>


    <p onClick={() => handleStatus()} className="cursor-pointer mt-6 font-bold ">
          Más opciones{" "}
          <i
            className={`fa-solid fa-chevron-${
              status == "hidden" ? "down" : "up"
            }`}
          ></i>
        </p>


        <div className={`flex flex-col items-center gap-2 mt-5 ${status}  `}>
        <label>Usuarios random</label>
        <input
          type="number"
          min={0}
          className="w-14  outline-none  border-b-2 border-indigo-700 "
          onChange={(e) => validateBots(e)}


        />

       

      <button onClick={()=> {randomData()}} className="py-1 px-2 mt-4 rounded-md shadow-md bg-sky-600 text-white "  >Añadir random</button>
      </div>


      {
          useEffect(() => {
            

            isLoading ? <Spinner/> : ''
           
          }, [])
          

      }

    </>
  );
}

export default Form;
