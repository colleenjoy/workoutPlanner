import React from 'react';
import { HashRouter, Route, Link } from 'react-router-dom';
import './App.css';
import InitialSurvey from './InitialSurvey';
import Log from './Log';
import Workout from './Workout';
import FitnessEquipment from './FitnessEquipment';
import SeedWorkoutSurvey from './SeedWorkoutSurvey';
import MuscleGroups from './MuscleGroups';

const App: React.FC = () => {
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
        <Route exact path="/new-user" component={InitialSurvey} />
        <Route path="/log" component={Log} />
        <Route exact path="/workouts" component={Workout} />
        <Route exact path="/new-user/muscle-groups" component={MuscleGroups} />
        <Route
          exact
          path="/new-user/fitness-equipment"
          component={FitnessEquipment}
        />
        <Route
          exact
          path="/new-user/seed-workout"
          component={SeedWorkoutSurvey}
        />
      </div>
    </HashRouter>
  );
}

export default App;
