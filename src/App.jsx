import { useState,useEffect } from 'react'
import Form from './components/Form'
import Listplayers from './components/Listplayers'
import Spinner from './components/Spinner'



function App() {
const [arrayPlayers,setArrayPlayers] = useState([])
const [isLoading,setIsloading] = useState(false)
  









  return (
    <main className=' w-screen h-screen flex flex-col  items-center'>

    <div className=' w-6/12 flex flex-col justify-start items-center' >
    <h1 className='font-extrabold  text-4xl  ' >Probemos la <span className='text-indigo-600'>Suerte</span></h1>


      

    <Form  arrayPlayers={arrayPlayers}  setArrayPlayers={setArrayPlayers} setIsloading={setIsloading} isLoading={isLoading} />
    </div>


    <Listplayers arrayPlayers={arrayPlayers} setIsloading={setIsloading} isLoading={isLoading} />


      
    </main>
  )
}

export default App
