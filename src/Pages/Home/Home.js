import React from 'react';
import Button from '../../Components/Button/Button';
import Nav from '../../Components/Nav/Nav';
import  "./Home.css";
import  "./Home.mediaquery.css";
const Home = () => {
    return ( 
        <div className="home-container">
            
            <Nav />
            
            <div className="description">
                <h2> seven by chacha </h2>

                <div className="description-btn">
                    <Button className="btn-transparent">Explore Collection</Button>
                </div>
            </div>

        </div>
     );
}
 
export default Home;