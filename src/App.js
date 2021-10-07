import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from './pages/Login';
import Register from './pages/Register';
import ForgotPassword from './pages/forgot-password';
import PrivateRoute from './util/PrivateRoute';
import AnonymousAuth from './util/AnonymousAuth';
import EmailVerify from './pages/EmailVerify';
import NotFound from './pages/NotFound';
import ResetPassword from './pages/ResetPassword';
import Landing from './pages/Landing';
import Home from './pages/Home';
import Item from './pages/Items';
import ItemTypes from './pages/ItemTypes';
import Orders from './pages/Orders';

function App() {
  return (
      <Router>
        <Switch>
            <AnonymousAuth path="/auth/login">
              <Login />
            </AnonymousAuth>
            <AnonymousAuth path="/auth/register">
              <Register />
            </AnonymousAuth>
            <AnonymousAuth path="/auth/forgot-password">
              <ForgotPassword />
            </AnonymousAuth>
            <AnonymousAuth path="/auth/reset-password"> 
              <ResetPassword />
            </AnonymousAuth> 
            <AnonymousAuth path="/auth/email-verify">
              <EmailVerify />
            </AnonymousAuth>

            {/* Production mode--------------------------------------- */}

            <PrivateRoute path="/home" >
              <Home />
            </PrivateRoute>
            <PrivateRoute path="/dashboard/items" >
              <Item />
            </PrivateRoute>
            <PrivateRoute path="/dashboard/item-types" >
              <ItemTypes />
            </PrivateRoute> *
            <PrivateRoute path="/dashboard/orders" >
              <Orders />
            </PrivateRoute>

           

            {/* Production mode--------------------------------------- */}



            
            {/* Dev mode--------------------------------------- */}
            {/* <AnonymousAuth path="/home" >
              <Home />
            </AnonymousAuth>
            <AnonymousAuth path="/dashboard/items" >
              <Item />
            </AnonymousAuth>
            <AnonymousAuth path="/dashboard/item-types" >
              <ItemTypes />
            </AnonymousAuth>
            <AnonymousAuth path="/dashboard/orders" >
              <Orders />
            </AnonymousAuth> */}
            {/* Dev mode--------------------------------------- */}


            <Route to="/">
              <Landing />
            </Route>
            <Route to="*">
              <NotFound />
            </Route>
          </Switch>
      </Router>
  );
}

export default App;
