import React, {useState, useEffect} from 'react'; 
import axios from 'axios';


const Trailer = () =>{
    const path = window.location.pathname.slice(5);
    const [trailer, setTrailer] = useState([]);
    const [loading, setLoading] = useState(false); 


    useEffect(()=>{
        
        const fetchTrailer = async () =>{
            const url = `https://api.rawg.io/api/games/${path}/movies?key=${process.env.REACT_APP_API_KEY}`
            const response = await axios.get(url); 
            const data = response.data.results.map(result => result.data.max); 
            setTrailer(data); 
            setLoading(true); 
        }
        fetchTrailer(); 
    },[])
    
    
    return(
        <>
       
         {loading ? (
            <video className='trailer' controls>
                <source src={trailer} type="video/mp4" />
            </video>
           
        ) : (null)} 
        
        </>
    )
}

export default Trailer; 