import React, { useEffect, useState } from "react";
import axios from "axios";
import GameCard from "./GameCard";
import Header from "./Header";
import ReactPaginate from "react-paginate";
import LoadingIcons from 'react-loading-icons'; 
import '../styles/gamelist.css'




const GameList = (props) =>{

    const [games, setGames] = useState([]); 
    const [page, setPage] = useState(1); 
    const [loading, setLoading] = useState(false); 
    
    const handlePageClick =  (e) =>{
        let currentPage = e.selected + 1; 
        setPage(currentPage);  
    }

    useEffect( () =>{
        const fetchGame = async () => {
            const URL = `https://api.rawg.io/api/games?key=${process.env.REACT_APP_API_KEY}&page=${page}`
            const response = await axios.get(URL)
            setGames(response.data.results)
            setLoading(true); 
        }
        fetchGame();
    },[page])

   

    return(
        <>
            <Header/>

            {loading ? (  
            <>
                <div className="game-list">
                    <GameCard games = {games}/>
                </div>
                
                    <ReactPaginate 
                    breakLabel="..."
                    nextLabel=">>"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={3}
                    pageCount={15}
                    previousLabel="<<"
                    renderOnZeroPageCount={null}
                    containerClassName = "paginate-container"
                    pageClassName ="page"
                    pageLinkClassName = "page-link"
                    previousClassName= "previous-btn"
                    nextClassName= "next-btn"
                    breakClassName="break"
                    previousLinkClassName="page-link"
                    nextLinkClassName="page-link"
                    activeClassName= "active"
                    />
               
                
                </>
            ) : ( 
                        <div className="loading-area">
                            <LoadingIcons.Oval className="loading-icon" stroke="white" strokeOpacity={1} speed={1}/>
                            <p className="loading">Loading...</p>
                        </div>
                        )}
          
   
        </>
    
    )
}

export default GameList;