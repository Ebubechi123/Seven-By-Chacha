import React from 'react';
import { Route } from "react-router-dom";
import Collections from '../Pages/Collections/Collection';
import Home from "../Pages/Home/Home";

const Routes = () => {
    return ( 
        <>
        <Route exact={true} path="/" component={Home} />
        <Route exact={true} path="/collections" component={Collections} />
        </>
     );
}
 
export default Routes;