import React, { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Project from 'Components/Project';
import projectForm from 'Pages/ProjectForm';
import Login from 'Pages/Login';
import Dashboard from 'Pages/Dashboard';
import './App.css';

// const Login = lazy(() => import('./Pages/Login'));
function App() {
  return (
    <div className="App">
        <Switch>
          <Route exact path="/login" component = { Login } />
          {/* <Route exact path="/" component = { Dashboard } /> */}
          {/* <Route exact path="/signup" component = { SignUp } />*/}
          <Route exact path="/client/:projectId" component = { Project } />
          <PrivateRoute exact path="/:projectId" component = { Project } />
          <PrivateRoute exact path="/project-form" component = { projectForm } />
          <PrivateRoute exact path="/" component = { Dashboard } />
        </Switch>
    </div>
  );
}

export default App;
