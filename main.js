import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Layout from './Components/Layout.jsx';
import Navbar from './Components/navigation.jsx';
import Page1 from './Pages/Page1Content.jsx';
import Page2 from './Pages/Page2Content.jsx';
import Page3 from './Pages/Page3Content.jsx';
import Web from './Pages/Home.jsx';
import * as common from './Src/common.js';


//ReactDOM.render(<Navbar />, document.getElementById('navigationbar'));

const app= document.getElementById('app');
ReactDOM.render(
<BrowserRouter>
<div>
<nav className="navbar navbar-default" id = 'navigationbar'>
<Navbar />
</nav>
<Switch> 
    <div className='container'>
    <Route exact path="/" component={Layout}> </Route>
    <Route exact path="/web" component={Web}> </Route>
    <Route exact path="/home" component={Layout}> </Route>
    <Route exact path="/page1" component={Page1}> </Route>
    <Route exact path="/page2" component={Page2}> </Route>
    <Route exact path="/page3" component={Page3}> </Route>
    </div>
</Switch>
</div>
</BrowserRouter>,
app);
common.navigationActive();





