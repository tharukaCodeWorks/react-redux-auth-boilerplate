# React+Redux+JWT Authentication Boilerplate
This is a Dashboard Boilerplate created with React, Reduc and JWT. Authentication is also functional.

This boilerplate works better with the following springboot-jwt-boilerplate backend.
https://github.com/tharukaCodeWorks/springboot-jwt-boilerplate

## Authenticated Routes
React works with routes to change pages in an app. (Find more: https://reactrouter.com/web/guides/quick-start). In this boilerplate each route is contained within a `AnonymousAuth` tag or `PrivateRoute`. 

- AnonymousAuth
The content under this tag does not require Authentication to access

```
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
        <Switch>
    </Router>
  )
}

```

- PrivateRoute
Routes contained inside these tags would require authentication. The authencation would be satisfyied when a user logs in to the system.

```
function App() {
  return (
      <Router>
        <Switch>
            <PrivateRoute path="/home" >
              <Home />
            </PrivateRoute>
            <PrivateRoute path="/dashboard/items" >
              <Item />
            </PrivateRoute>
            <PrivateRoute path="/dashboard/item-types" >
              <ItemTypes />
            </PrivateRoute>
        </Switch>
      </Router>
  )
}

```


