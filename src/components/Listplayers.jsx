import Spinner from "./Spinner";
import Winner from "./Winner";

function Listplayers({ arrayPlayers,setIsloading,isLoading }) {
  const listPlayers = () => {

 


    return arrayPlayers.length > 0 ? (
      arrayPlayers.map((player, key) => <li key={key}><div className="py-2 px-3 flex justify-center items-center bg-indigo-950 shadow-lg text-white rounded-md">
        
        {player.name.first}

        {console.log(player)}
      
        </div> </li>)
    ) : (
      <p className="text-center">No hay Participantes</p>
    );
  };

  return (
    <div className="flex flex-col  items-center w-11/12 ">
      <ul className="mt-10 items-center justify-center flex gap-2 w-9/12 mx-auto flex-wrap  ">{listPlayers()}</ul>

      
  
      <Winner arrayPlayers={arrayPlayers} setIsloading={setIsloading} isLoading={isLoading} />
    </div>
  );
}

export default Listplayers;
