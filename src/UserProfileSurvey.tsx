import React from 'react';
import { Link } from 'react-router-dom';

const UserProfileSurvey: React.FC = props => {
  return (
    <div className="initial-survey-section">
      <input type="number" name="age" min="13" max="100" />
      <label htmlFor="age">Enter your age: </label>
      <input type="number" name="weight" min="80" max="500" />
      <label htmlFor="weight">Enter your weight: </label>
      <input type="number" name="activity-level" />
      <label htmlFor="activity-level">What is your activity level? </label>
      <input type="number" name="workout-length" />
      <label htmlFor="workout-length">
        How long do you usually work out for?{' '}
      </label>
      <Link className="next-link" to="/new-user/muscle-groups">
        Next
      </Link>
    </div>
  );
};

export default UserProfileSurvey;
