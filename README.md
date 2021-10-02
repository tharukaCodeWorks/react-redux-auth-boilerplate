# React+Redux+JWT Authentication Boilerplate
This is a Dashboard Boilerplate created with React, Reduc and JWT. Authentication is also functional.

This boilerplate works better with the following springboot-jwt-boilerplate backend.
https://github.com/tharukaCodeWorks/springboot-jwt-boilerplate

![This is an image](https://github.com/navintc/react-redux-auth-boilerplate/blob/master/README_CONTENT/itemTypePage.png)

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
        </Switch>
      </Router>
  )
}

```


