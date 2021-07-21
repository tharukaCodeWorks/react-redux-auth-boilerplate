import React from 'react';
import { logout } from '../redux/User';
import { connect } from 'react-redux';

const Home = (props) =>{
    return(
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <button onClick={props.logout}>Logout</button>
        </div>
    );
}

export default connect(null, {logout})(Home);