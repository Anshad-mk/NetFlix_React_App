import React, { useEffect, useState } from 'react'
import './Banner.css'
import axios from '../../axios'
import {APIKey,imageUrl,baseUrl} from '../Constants/constants'

function Banner() {
    const [movie,setMovie] = useState()
    useEffect(()=>{
axios.get(`${baseUrl}/trending/all/week?api_key=${APIKey}&language=en-US`).then((resp)=>{
    setMovie(resp.data.results[parseInt(Math.random()*10)*2])
    console.log( );
    
})
    },[])
  return (
    <div className='banner' style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path:''})`}} >
      <div className='content'>
        <h1 className='title'>{movie ? movie.title: ""}</h1>
        <div className='banner_buttons'> 
        <button className='button'>Play</button>
        <button className='button'>My List</button>
        </div>
        <h1 className='discription'>{movie ? movie.overview:""}</h1>
        </div>
        <div className="fade_bottom"></div>
    </div>
  )
}

export default Banner
