import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function Main() {

const {hours,minutes,seconds}=useSelector(state=>state)

const dispatch=useDispatch()
const intervalRef = useRef(null);
const startTimer = () => {
  intervalRef.current = setInterval(() => {
      dispatch({ type: 'start' });
  }, 1000);
}
const pauseTimer = () => {
  clearInterval(intervalRef.current);
}

const restartTimer = () => {
  pauseTimer();
  dispatch({ type: 'restart' });
}
useEffect(()=>{
  return () => clearInterval(intervalRef.current);
},[])

return (

    <div className='my-[100px] mx-[500px] text-white'>
    <div className='flex gap-[40px]  '>

    <button className='text-[40px] text-white ml-[10px]' onClick={startTimer}>START</button> 
    <button className='text-[40px] text-white' onClick={pauseTimer}>PAUSE</button>
    <button className='text-[40px] text-white ml-[10px]' onClick={restartTimer}>RESTART</button>
    
        </div>
    <div className='flex gap-3 text-[110px] '>

    <div className='border border-white h-[150px] w-[150px] px-[12px]'>{hours}</div>
    <div className='border border-white h-[150px] w-[150px] px-[12px]'>{minutes}</div>
    <div className='border border-white h-[150px] w-[150px] px-[12px]'>{seconds}</div>
    
        </div>



        <div className='flex gap-4 ml-[20px] '>

    <div className='text-[40px] text-white'>HOUR:</div>
    <div className='text-[40px] text-white'>MINUTE:</div>
    <div className='text-[40px] text-white'>SECOND</div>
    
        </div>
    </div>

  )
}