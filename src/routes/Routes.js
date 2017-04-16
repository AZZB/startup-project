import React from 'react'
import { Route, Switch } from 'react-router-dom'
import AdminRoute from './AdminRoute'
import NotLoggedRoute from './NotLoggedRoute'
import Login from '../login'
import Signup from '../signup'
import Home from '../home/Home'
import Discover from '../discover/Discover'
import Profile from '../profile'
import AdminPanel from '../admin'
import NoMatch from '../error/NoMatch';
import '../assets/styles/app.scss'



const Routes = (props) => {
  console.log(props);
  const { currentUser } = props;

  return (
    <div  className="app-container">
      <Switch>
        <Route exact path="/" component={Home} />
        <NotLoggedRoute exact path="/signup" currentUser={currentUser} component={Signup} />
        <NotLoggedRoute exact path="/login" currentUser={currentUser} component={Login} />
        <Route exact path="/discover" component={Discover} />
        <Route excat path="/:profile" component={Profile} />
        <AdminRoute excat path="/admin-panel" currentUser={currentUser} component={AdminPanel} />
        <Route render={() => <NoMatch /> } />
      </Switch>
    </div>
  );
}


const style = {
  marginTop: '50px',
};


export default Routes;
