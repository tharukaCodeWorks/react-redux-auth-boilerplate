import React from 'react'
import { Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = (props) => {

  // Add your own authentication on the below line.

  return (
    <Route
      render={x =>
        props.authToken!=null ? (
            {...props.children}
        ) : (
          <Redirect to={{ pathname: '/auth/login', state: { from: x.location } }} />
        )
      }
    />
    
  )
}

const mapStateToProps = (state) => state.user;
export default connect(mapStateToProps, null)(PrivateRoute);