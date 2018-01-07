import React from 'react';
import * as common from '../Src/common.js';
import * as fb from '../Src/fbLogin.js';
import { Link } from 'react-router-dom';

class Page1 extends React.Component {
    render() {
        this.state = {
            facebook:'Login with facebook'
        };
        common.loginWidget();
        return (
            <div className="row">
                <div id="overlay"></div>
                <div id="popup">
                    <div id="status"></div>
                    <div id="userData"></div>
                    <a href="javascript:void(0);" className='btn btn-danger col-xs-2 pull-right' onClick={fb.fbLogout} id="fbLinkLogout">Logout</a>                    
                </div>
                <div id="statusLogout"></div>
                <a href="javascript:void(0);" className='btn btn-primary col-xs-2 pull-right' onClick={fb.fbLogin} id="fbLink">{this.state.facebook}</a>
                <div className="col-md-4 col-md-offset-4 text-center">
                    <div className="search-box">
                        <div className="caption">
                            <h3>Advance Password Validation</h3>
                            <p>Find to All</p>
                        </div>
                        <form action="" className="loginForm">
                            <div className="input-group">
                                <input type="text" id="name" className="form-control" placeholder="Full Name" />
                                <input type="password" id="paw" className="form-control" placeholder="Password" />
                                <input type="submit" id="submit" className="form-control" value="Submit" />
                            </div>
                        </form>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="aro-pswd_info">
                        <div id="pswd_info">
                            <h4>Password must be requirements</h4>
                            <ul>
                                <li id="letter" className="invalid">At least <strong>one letter</strong></li>
                                <li id="capital" className="invalid">At least <strong>one capital letter</strong></li>
                                <li id="number" className="invalid">At least <strong>one number</strong></li>
                                <li id="length" className="invalid">Be at least <strong>8 characters</strong></li>
                                <li id="space" className="invalid">be<strong> use [~,!,@,#,$,%,^,&,*,-,=,.,;,']</strong></li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Page1;