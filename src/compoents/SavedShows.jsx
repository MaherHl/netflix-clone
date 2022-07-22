import React, {useEffect, useState} from 'react'
import {MdChevronLeft, MdChevronRight} from 'react-icons/md'
import { UserAuth } from '../context/AuthContext'
import { db  } from '../firebase'
import { updateDoc , doc ,onSnapshot, collection } from 'firebase/firestore'
import {AiOutlineClose} from'react-icons/ai'

const SavedShows = () => {
    const [movies, setMovies] = useState([])
   const {user} = UserAuth()
    const slidLeft =()=>{
        var slider = document.getElementById('slider')
        slider.scrollLeft = slider.scrollLeft -500
        }
    const slidRight =()=>{
         var slider = document.getElementById('slider' )
         slider.scrollLeft = slider.scrollLeft + 500
         }
         
    useEffect(  ()=>{
        try {
            onSnapshot(doc( db,'users',`${user.email}`
                
            ),(doc)=>{

                setMovies(doc.data().savedShows)
            })
        } catch (error) {
            console.log(error)
        }



    },[user?.email])
    

    const movieRef = doc(db,'users',`${user?.email}`)
     const deleteShow = async (passeID) =>{
        try {
            const result = movies.filter((item)=>item.id !== passeID)
            await updateDoc(movieRef,{
                savedShows : result

            })
            
        } catch (error) {
            console.log(error)
            
        }
     }



  return (
    <> 
        <h2 className='text-white font-bold md:text-xl p-4'>My Shows</h2>  
    <div className=' relative  flex items-center  group'>
      <MdChevronLeft onClick={slidLeft} className='bg-white rounded-full left-0 absolute opacity-50 hover:opacity-100 cusror-pointer z-10 hidden group-hover:block' size ={40}/>
      <div id={'slider' } 
      className='flex w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide'>
        
    {
    movies.map((item,id) =>
    <div key={id} className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2 '>
    <img className='w-full h-auto block' src={`https://image.tmdb.org/t/p/w500/${item?.img}`} alt={item?.title}/>
    <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 text-white opacity-0 hover:opacity-100  '>
      <p className='white-space-normal text-xs md:text-sm font-bold items-center flex justify-center h-full text-center '>{item?.title}</p>

       <p onClick={()=>{deleteShow(item.id)}} className='absolute text-gray-300 top-4 right-4'><AiOutlineClose/></p>
    
    </div>
   
 </div>   
  )
  }
              
      </div>
      <MdChevronRight onClick={slidRight} className='bg-white rounded-full right-0 absolute opacity-50 hover:opacity-100 cusror-pointer z-10 hidden group-hover:block' size ={40}/>
    </div>
    </>
  )
}

export default SavedShows