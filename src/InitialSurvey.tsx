import React from 'react';
import UserProfileSurvey from './UserProfileSurvey';

type SurveyState = {
  muscleGroups: [],
  fitnessEquipment: [],
  timeLimit: 0
}

class InitialSurvey extends React.Component<{}, SurveyState> {
  render() {
    return (
      <div>
        <UserProfileSurvey />
      </div>
    );
  }
}

export default InitialSurvey;
