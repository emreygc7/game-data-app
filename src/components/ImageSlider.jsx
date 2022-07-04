import React, {useState, useEffect} from "react";
import SimpleImageSlider  from "react-simple-image-slider";
import axios from "axios";
import '../styles/gamedetail.css'


const ImageSlider = () => {

    const path = window.location.pathname.slice(5);
    const [screenShots, setScreenShots] = useState([]); 
    const [loading, setLoading] = useState(false);  



    useEffect(() => {
        const fetchScreenShots = async () => {
            const url = `https://api.rawg.io/api/games/${path}/screenshots?key=${process.env.REACT_APP_API_KEY}`;
            const response = await axios.get(url); 
            const data = response.data; 
            setScreenShots(data.results.map(ss => ss.image)); 
            setLoading(true);
        }

        fetchScreenShots()
        
    },[])
   
    return(
        <>
                {loading ? (   
                
                        <div className="screenshots">
                            <SimpleImageSlider
                            width={75+"vw"}
                            height={45+"vh"}
                            images={screenShots}
                            showBullets={true}
                            showNavs={true}
                            navMargin={0}
                            navSize={30}
                            navStyle={2}
                            autoPlay={true}
                            />
                        </div>
                    
                
                    ) 
                : (null)
                }
        </>
        
    )
}

export default ImageSlider; 