import React from 'react';
import * as fb from '../Src/fbLogin.js';
class FacebookComponent extends React.Component {
    render() {
        return(
            <div className="facebookcomponent">
            <div id="overlay"></div>
                    <div id="popup">
                        <div id="status"></div>
                        <div id="userData"></div>
                        <a href="javascript:void(0);" className='btn btn-danger col-xs-2 pull-right' onClick={fb.fbLogout} id="fbLinkLogout">Logout</a>                    
                    </div>
                    <div id="statusLogout"></div>
                    <a href="javascript:void(0);" className='btn btn-primary col-xs-2 pull-right' onClick={fb.fbLogin} id="fbLink">{this.props.myData}</a>
            </div>
        );
    
    }

}
export default FacebookComponent;