import React from 'react'
import './Home.css'

export const Home: React.FC = () => {
  return (
    <div className='w-full min-h-screen flex justify-start items-center '>
       <div className='w-1/2 h-[450px] ml-10 flex flex-col justify-evenly items-start'>
          <h3 className=' text-5xl font-texto tracking-wide'>Bienvenidos a</h3>
          <h1 className=' text-[180px] text-secunrdario font-titulo text-center '>Stetic Glam</h1>
            <h3 className=' text-3xl  font-texto tracking-wider'>Tu estetica de confianza</h3>
          <div className='w-3/4 flex justify-end'>
           <button className='w-[140px] h-[50px] text-center rounded bg-secunrdario text-primario text-xl buttonHover tracking-wide font-semibold'>Servicios</button>  
          </div>
        </div>
        <div className='w-1/2 min-h-screen bgHome imgEffectLeft'>
        
        </div>
       
    </div>
  )
}

export default Home;