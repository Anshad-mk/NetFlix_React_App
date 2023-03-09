import React, { useEffect, useState } from 'react'
import './RowPost.css'
import axios from '../../axios'
import YouTube from 'react-youtube'

import {baseUrl,APIKey,imageUrl} from '../Constants/constants'
function RowPost(props) {
  const [youtubeurl,setyoutubeurl]=useState('')
    const playVideo =(id)=>{
      setyoutubeurl('')
        axios.get(`/movie/${id}/videos?api_key=${APIKey}&language=en-US`).then((respon)=>{
            console.log(respon.data.results);
            if(respon.data.results.length!==0){

              setyoutubeurl(respon.data.results[0])   
              //just commented for updation

            }
        })
    }
    const [movies, setMovies]=useState([])
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay:1 ,
        },
      };
   useEffect(()=>{
    axios.get(props.url).then((response)=>{
        //console.log(response.data.results);
       setMovies(response.data.results)
        
    })

    },[])
  return (
    <div className='row'>
      <h2>{props.titles}</h2>
      <div className="posters">
        {movies.map((obj,index)=>
        <div className="poster-card">
<img key={index} onClick={()=>{playVideo(obj.id)}} className={props.isSmall ? 'smallPoster':'poster'} src={imageUrl+obj.backdrop_path} alt="Poster" />

        </div>

        
        )}

      </div>
      {youtubeurl ?  <button onClick={()=>{setyoutubeurl('')}} >X</button>:"" }
      {youtubeurl ?  <YouTube videoId={youtubeurl.key} opts={opts}/>:"" }
      
     
    </div>
  )
}

export default RowPost
