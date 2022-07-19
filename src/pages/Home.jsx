import React from 'react'
import Main from '../compoents/Main'
import Navbar from '../compoents/Navbar'
import { Row } from '../compoents/Row'


const Home = () => {

   const requests = {
     requestPopular : 'https://api.themoviedb.org/3/movie/popular?api_key=a4e6d63d9d3f5bda4ebaef792a64a78e&language=en-US&page=3',

     requestTrending :'https://api.themoviedb.org/3/movie/popular?api_key=a4e6d63d9d3f5bda4ebaef792a64a78e&language=en-US&page=2',
        requestTopRated :'https://api.themoviedb.org/3/movie/top_rated?api_key=a4e6d63d9d3f5bda4ebaef792a64a78e&language=en-US&page=1',
        requestUpComing :'https://api.themoviedb.org/3/movie/upcoming?api_key=a4e6d63d9d3f5bda4ebaef792a64a78e&language=en-US&page=1',
    
     
      
   }
  return (
    <div >
        <Navbar/>
        <Main/>
        <Row rowID='1' Tittle ='UpComing ' fetchUrl={requests.requestUpComing}/>
        <Row rowID='2' Tittle ='Popular' fetchUrl={requests.requestPopular}/>
        <Row rowID='3' Tittle ='Trending ' fetchUrl={requests.requestTrending}/>
        <Row rowID='4' Tittle ='Top Rated  ' fetchUrl={requests.requestTopRated}/>

    </div>
  )
}

export default Home