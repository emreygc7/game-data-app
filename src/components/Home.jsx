import React from "react";
import Header from './Header'
import {Link} from 'react-router-dom'
import BG from '../assets/img/main-bg.jpg'
import '../styles/home.css'

const Home = () => {

    return(
        <>
            <Header/>
            
            <main>
                <img className="bg-image" src={BG} alt="" />
                
                <div className="main-mid">
                    <h1 className="home-title">Game Data App</h1>
                    <p className="home-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia excepturi sequi ipsa quibusdam amet perspiciatis officiis nostrum iste ab esse facilis, eaque doloribus praesentium id non voluptatibus maiores suscipit cupiditate?</p>
                    <Link to="/games">
                        <button className="btn-game-list">Game List</button>
                    </Link>
                </div>
            </main>
        </>
    )
}


export default Home; 