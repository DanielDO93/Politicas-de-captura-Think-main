import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { Spinner } from "reactstrap";
// import { renderRoutes } from 'react-router-config';
import './App.scss';
import Loadable from 'react-loadable';
const loading = () => <div className="animated fadeIn pt-3 text-center "><Spinner  color="danger"  /></div>

// Containers
const DefaultLayout = Loadable({
  loader: () => import('./containers/DefaultLayout'),
  loading
});

// Pages
const Login = Loadable({
  loader: () => import('./views/Login'),
  loading
});




class App extends Component {

  render() {
    return (
      <BrowserRouter>
          <React.Suspense fallback={loading()} >
            <Switch>
              <Route exact path="/login" name="Login Page" render={props => <Login {...props}/>} />
              <Route path="/" name="Home" render={props => <DefaultLayout {...props}/>} />
            </Switch>
          </React.Suspense>
      </BrowserRouter>
    );
  }
}

export default App;
