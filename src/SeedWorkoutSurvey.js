import React from 'react';
import { Link } from 'react-router-dom';

const SeedWorkoutSurvey = props => {
  return (
    <div className="initial-survey-section">
      <span>Which muscle groups did you focus on in your last workout?</span>
      <div className="selection-btn-container">
        {/* ideally, if the full body box is checked, the others are automatically unchecked and vice versa */}
        {/* eventually, this will be populated from the database? */}
        {/* eventually, this will be it's own component? */}
        <input
          className="hidden"
          type="checkbox"
          value="arm"
          name="arm"
          id="arm"
        />
        <label htmlFor="arm">Arms</label>
        <input
          className="hidden"
          type="checkbox"
          value="back"
          name="back"
          id="back"
        />
        <label htmlFor="back">Back</label>
        <input
          className="hidden"
          type="checkbox"
          value="leg"
          name="leg"
          id="leg"
        />
        <label htmlFor="leg">Legs</label>
        <input
          className="hidden"
          type="checkbox"
          value="abs"
          name="abs"
          id="abs"
        />
        <label htmlFor="abs">Abs</label>
        <input
          className="hidden"
          type="checkbox"
          value="chest"
          name="chest"
          id="chest"
        />
        <label htmlFor="chest">Chest</label>
      </div>
      <Link className="next-link" to="/current-workout">
        Get your first workout
      </Link>
    </div>
  );
};

export default SeedWorkoutSurvey;
