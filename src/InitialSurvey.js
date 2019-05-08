import React from 'react';
import MuscleGroups from './MuscleGroups';
import FitnessEquipment from './FitnessEquipment';

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
        <div className="initial-survey-section">
          <span>Which areas would you like to include in your workout? </span>
          <MuscleGroups />
          <button name="next" type="button">
            Next
          </button>
        </div>
        <div className="initial-survey-section">
          <span>What fitness equipment do you have access to? </span>
          <FitnessEquipment />
          <button name="next" type="button">
            Next
          </button>
        </div>
      </div>
    );
  }
}

export default InitialSurvey;
