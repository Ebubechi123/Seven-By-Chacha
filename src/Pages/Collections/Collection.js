import React,{useEffect} from 'react';
import Card from '../../Components/Card/Card';
import Nav from '../../Components/Nav/Nav';
import "./Collection.css";
import "./Collection.mediaquery.css";
const Collections = () => {
    useEffect(
  ()=>{
        <Nav className="nav-background" />
  }
    )
    return ( 
        <>
            <div className="collection-section">
                <h1>Collections</h1>
               <div className="collection-cards">
               <Card className="card blue" />
                <Card className="card green" />
                <Card className="card yellow" />
                <Card className="card black" />
               </div>
            </div>


        </>
     );
}
 
export default Collections;