import React, { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Project from 'Components/Project';
import './App.css';

const Dashboard = lazy(() => import('./Pages/Dashboard'));

function App() {
  return (
    <div className="App">
        <Switch>
          {/* <Route exact path="/login" component = { Login } /> */}
          {/* <Route exact path="/" component = { Dashboard } /> */}
          {/* <Route exact path="/signup" component = { SignUp } />*/}
          <Route exact path="/:projectId" component = { Project } /> 
          <Suspense fallback={<div>Loading...</div>}><Route exact path="/" component = { Dashboard } /></Suspense>
        </Switch>
    </div>
  );
}

export default App;
