import React from 'react';
import { Link, Route } from 'react-router-dom';
import MuscleGroups from './MuscleGroups';
import FitnessEquipment from './FitnessEquipment';
import SeedWorkoutSurvey from './SeedWorkoutSurvey';

class InitialSurvey extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      muscleGroups: [],
      fitnessEquipment: [],
      timeLimit: 0,
    };
  }
  render() {
    return (
      <div>
        <MuscleGroups />
      </div>
    );
  }
}

export default InitialSurvey;
