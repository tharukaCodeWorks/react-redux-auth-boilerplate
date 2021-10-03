import React from 'react';
import { logout } from '../redux/User';
import { connect } from 'react-redux';
import DashboardLayout from '../components/DashboardLayout';

const Orders = (props) =>{
    return(
        <DashboardLayout>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                
            </div>
        </DashboardLayout>
    );
}

export default connect(null, {logout})(Orders);