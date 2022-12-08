import './App.css';
import React from 'react';
import NavBar from './Components/NavBar/NavBar';
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';
import {action,originals,ComedyMovies,HorrorMovies,ActionMovies,RomanceMovies,Documentaries} from './urls'
function App() {
  return (
    <div className="App">
    <NavBar/>
    <Banner/>
    <RowPost url={ActionMovies} titles="Action Movies" isSmall/>
    <RowPost url={originals} titles="Netflix Originals" isSmall/>
    <RowPost url={ActionMovies} titles="Action Movies" isSmall/>
    <RowPost url={ComedyMovies} titles="Comedy Movies" isSmall/>
    <RowPost url={HorrorMovies} titles="Horror Movies" isSmall/>
    <RowPost url={RomanceMovies} titles="Romance Movies" isSmall/>
    <RowPost url={Documentaries} titles="Documentaries" isSmall/>
     
    </div>
  );
}

export default App;
