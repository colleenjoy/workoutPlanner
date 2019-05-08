import React from 'react';
import { HashRouter, Route, Link } from 'react-router-dom';
import './App.css';
import CreateWorkout from './CreateWorkout';
import InitialSurvey from './InitialSurvey';
import Log from './Log';
import Workout from './Workout';

function App() {
  return (
    <HashRouter>
      <div className="App">
        <header className="App-header">
          <h1>Personal Workout Planner</h1>
          <nav>
            {/* <Link to="/" className="navbar">
              Create a Workout
            </Link> */}
            <Link to="/" className="navbar">
              My Workouts
            </Link>
            {/* <Link to="/" className="navbar">
              Save Workout
            </Link> */}
          </nav>
        </header>
        <Route path="/newuser" component={InitialSurvey} />
        {/* <Route path="/log" component={Log} />
        <Route exact path="/workouts" component={Workout} /> */}
      </div>
    </HashRouter>
  );
}

export default App;
