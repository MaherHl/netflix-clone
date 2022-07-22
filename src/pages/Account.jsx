import React from 'react'
import SavedShows from '../compoents/SavedShows'


const Account = () => {
  return (
   <>
        <div className="w-full text-white">
        <img className='h-[400px]   w-full object-cover' src="https://assets.nflxext.com/ffe/siteui/vlv3/1ef84595-1fdb-4404-adac-15215ceeb3ae/7834076f-5b15-4426-b34b-e04c82dbfeed/MA-fr-20220711-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt='/' />
          <div className=' fixed bg-black/60 top-0 left-0 w-full h-[420px]'>
            <div className='absolute top-[20%] p-4 md:p-8'>
              <h1 className='text-3xl md:text-5xl'>My Shows</h1>
            </div>

          </div>
        </div>
   <SavedShows/>
   </>
  )
}

export default Account