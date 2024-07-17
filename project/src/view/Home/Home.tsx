import React from 'react'
import './Home.css'

export const Home: React.FC = () => {
  return (
    <div className='w-full min-h-screen flex justify-start items-center '>
       <div className='w-1/2 h-[250px] ml-5 flex flex-col justify-evenly items-start'>
          <h3 className=' text-4xl'>Bienvenidos a</h3>
          <h1 className=' text-8xl text-secunrdario font-titulo'>Stetic Glam</h1>
          <h3 className=' text-3xl font-semibold'>Tu estetica de confianza</h3>
          <button className='w-[120px] h-[30px] text-center rounded bg-secunrdario text-primario'>Servicios</button>
        </div>
        <div className='w-1/2 min-h-screen bgHome imgEffectLeft'>
        
        </div>
       
    </div>
  )
}

export default Home;