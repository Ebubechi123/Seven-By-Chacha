import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {faAlignRight} from "@fortawesome/free-solid-svg-icons";
import  "./Nav.css";
const Nav = () => {
    library.add(faAlignRight)
    return ( 
        <nav>
        <div className="nav-logo">
          <h2>Chacha</h2>
        </div>

        <div className="nav-link">
          <ul className="nav-links">
             <li><FontAwesomeIcon icon="align-right" /></li>
          </ul>
        </div>
      </nav>
     );
}
 
export default Nav;