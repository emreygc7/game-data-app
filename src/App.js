import React from "react";
import { BrowserRouter, Routes, Route  } from "react-router-dom";

//components
import Home from "./components/Home";
import About from './components/About'; 
import GameList from './components/GameList';
import GameDetails from './components/GameDetails'; 
//style
import './styles/global.css'


const App =  () => {
  
  return(

        <BrowserRouter>
        
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/about" element={<About/>} /> 
              <Route path="/games" element={<GameList/>}/> 
              <Route path="/game:id" element= {<GameDetails/>}/>
                     
            </Routes>
       
        </BrowserRouter>
        

    
  
  )
}

export default App 