import React from 'react';
import UserProfileSurvey from './UserProfileSurvey';

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
        <UserProfileSurvey />
      </div>
    );
  }
}

export default InitialSurvey;
