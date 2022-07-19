import React, { useEffect, useState } from 'react'
 import {faHeart,FaRegHeart,} from 'react-icons/fa'
 import {MdChevronLeft, MdChevronRight} from 'react-icons/md'
import axios from 'axios'


export const Row = ({Tittle,fetchUrl,rowID}) => {
     const [movies , setMovies] = useState([])
     useEffect(()=>{
         axios.get(fetchUrl).then((res)=>{
            setMovies(res.data.results)

         })
        },[fetchUrl])

console.log("this",movies)
 const [like ,setLike] = useState(false)
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
      <MdChevronLeft onClick={slidRight} className='bg-white rounded-full left-0 absolute opacity-50 hover:opacity-100 cusror-pointer z-10 hidden group-hover:block' size ={40}/>
      <div id={'slider' + rowID} className=' w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide'>
        
    {
    movies.map((item,id) =>
    <div key={id} className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2 '>
    <img className='w-full h-auto block' src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`} alt={item.Title}/>
    <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 text-white opacity-0 hover:opacity-100  '>
      <p className='white-space-normal text-xs md:text-sm font-bold items-center flex justify-center h-full text-center '>{item?.title}</p>
     {like? <faHeart className='absolute top-4 left-4 text-gray-400'/> : <FaRegHeart  className='absolute top-4 left-4 text-gray-400'/>}
    
    
    </div>
   
 </div>
    )}
              
      </div>
      <MdChevronRight onClick={slidRight} className='bg-white rounded-full right-0 absolute opacity-50 hover:opacity-100 cusror-pointer z-10 hidden group-hover:block' size ={40}/>
    </div>
  </>
  )
}
