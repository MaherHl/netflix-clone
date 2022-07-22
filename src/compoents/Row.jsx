import React, { useEffect, useState } from 'react'
 import {MdChevronLeft, MdChevronRight} from 'react-icons/md'
import axios from 'axios'

import Movie from './Movie'


export const Row = ({Tittle,fetchUrl,rowID}) => {
     const [movies , setMovies] = useState([])
     useEffect(()=>{
         axios.get(fetchUrl).then((res)=>{
            setMovies(res.data.results)

         })
        },[fetchUrl])

console.log("this",movies)

 const slidLeft =()=>{
 var slider = document.getElementById('slider' + rowID)
 slider.scrollLeft = slider.scrollLeft -500
 }
 const slidRight =()=>{
  var slider = document.getElementById('slider'  + rowID)
  slider.scrollLeft = slider.scrollLeft + 500
  }
  

  return (
  <>
    <h2 className='text-white font-bold md:text-xl p-4'>{Tittle}</h2>  
    <div className=' relative  flex items-center  group'>
      <MdChevronLeft onClick={slidLeft} className='bg-white rounded-full left-0 absolute opacity-50 hover:opacity-100 cusror-pointer z-10 hidden group-hover:block' size ={40}/>
      <div id={'slider' + rowID} className='flex w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide'>
        
    {
    movies.map((item,id) =>
        <Movie key={id}  item = {item}/>
    )}
              
      </div>
      <MdChevronRight onClick={slidRight} className='bg-white rounded-full right-0 absolute opacity-50 hover:opacity-100 cusror-pointer z-10 hidden group-hover:block' size ={40}/>
    </div>
  </>
  )
}
