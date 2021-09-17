import React from 'react';
import { logout } from '../redux/User';
import { connect } from 'react-redux';
import DashboardLayout from '../components/DashboardLayout';

const Home = (props) =>{
    return(
        <DashboardLayout>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <button onClick={props.logout}>Logout</button>
        </div>
        </DashboardLayout>
    );
}

export default connect(null, {logout})(Home);