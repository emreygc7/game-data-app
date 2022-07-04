import {useState, useEffect} from "react";
import axios from "axios";
import Header from "./Header";
import { FaReddit, FaLocationArrow } from 'react-icons/fa';
import '../styles/gamedetail.css';
import LoadingIcons from 'react-loading-icons'
import ImageSlider from "./ImageSlider";
import Trailer from './Trailer'; 

const GameDetails = () =>{
    const path = window.location.pathname.slice(5); 
   
    const [gameDetail, setGameDetail] = useState({});
    const [loading, setLoading] = useState(false);  
    


    useEffect(() => {
        const fetchGameDetail = async () =>{
            const detailURL = `https://api.rawg.io/api/games/${path}?key=${process.env.REACT_APP_API_KEY}`; 
            const response = await axios.get(detailURL);
            const data =  response.data;  
            setGameDetail(data);   
            setLoading(true); 
        }
        
        fetchGameDetail()
    },[])
    
   
    return( 
        <>
            <Header/>

            {loading ? (
                <>
                    <div className="detail-container">
                        <div className="detail-area-top">
                            <div className="top-left">
                                <img className="game-image" src={gameDetail.background_image} alt=""/>
                            </div>
                            <div className="top-right">
                                <h1 className="game-detail-title">{gameDetail.name}</h1>
                            </div>
                        </div>
                        <div className="detail-area-mid">
                            <div className="mid-left">
                                <p><strong>Developer: </strong>{gameDetail.developers[0].name}</p>
                                <p><strong>Publisher: </strong>{gameDetail.publishers[0].name}</p>
                                <p><strong>Release Date: </strong>{gameDetail.released}</p>
                                <p className="metacritic"><strong>Metacritic: </strong>{gameDetail.metacritic}</p>
                                <div className="links">
                                <a style={{color:"black"}} href={gameDetail.reddit_url}><FaReddit color="red" size={2+"rem"}/></a>
                                <a href={gameDetail.website}><FaLocationArrow color="black" size={1.5+"rem"}/></a>
                                </div>
                               
                                <p className="tags"><strong>Tags: </strong>{gameDetail.tags.map(tag => tag.name).join(", ")}</p>
                                <p className="add-line-break"><strong>Platforms: </strong>{gameDetail.parent_platforms.map(parentPlatform => parentPlatform.platform.name).join('\n')}</p>
                            </div>
                            <div className="mid-right">
                                <h3>Description</h3>
                                <p>{gameDetail.description_raw}</p>
                                <h2>System Requirements</h2>
                                {gameDetail.platforms.map(pc => pc.platform.name == "PC" ? (<p className="add-line-break">{pc.requirements.minimum}</p>) : (null))}
                            </div>
                        </div>
                        <div className="detail-area-bottom">
                                <h2>ScreenShots</h2>
                                <ImageSlider/>
                                <h2>Trailer</h2>
                                <p style={{fontSize: "10px"}}>Sometimes the trailer may not load.</p>
                                <Trailer/>
                            
                        </div>
                    </div>
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

export default GameDetails; 
