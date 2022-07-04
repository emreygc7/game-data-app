import React from "react";
import {Link} from 'react-router-dom'; 
import '../styles/gamecard.css'; 



const GameCard = (props) =>{

  
    const gameList = props.games.map((game) => 
            <div className="card" key={game.id}>
                <img src={game.background_image} alt="" />
                <h1 className="game-title">{game.name}</h1>
                <div className="card-bottom">
                <p className="rating">{game.rating}/5</p>
                <Link to={"/game"+game.id}>
                <button className="btn-details">Details</button>
                </Link>
                </div>
            </div>
    ); 
    
    
    
    return(
        <>
            {gameList}
        </>
    )

         
}
      
        
        


export default GameCard;

