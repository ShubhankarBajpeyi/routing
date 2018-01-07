import { Link } from 'react-router-dom';
import React from 'react';
import * as common from '../Src/common.js';

class Navigation extends React.Component {
    render(){
    //    common.navigationActive();
        return(
            
  <div className="container-fluid">
    <div className="navbar-header">
      <Link className="navbar-brand" to="/web">WebSiteName</Link>
    </div>
    <ul className="nav navbar-nav">
      <li className="active"><Link to="/home">Home</Link></li>
      <li><Link  to="/page1">Page 1</Link></li>
      <li><Link  to="/page2">Page 2</Link></li>
      <li><Link  to="/page3">Page 3</Link></li>
    </ul>
  </div>

        );
    }
}

export default Navigation;

