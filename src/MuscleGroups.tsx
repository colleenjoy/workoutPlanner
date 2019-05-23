import React from 'react';
import { Link } from 'react-router-dom';
import {InputCheckbox} from './InputCheckbox';

const MuscleGroups: React.FC = props => {
  return (
    <div className="initial-survey-section">
      <span>Which areas would you like to include in your workout? </span>
      <div className="selection-btn-container">
        {/* ideally, if the full body box is checked, the others are automatically unchecked and vice versa */}
        {/* eventually, this will be populated from the database? */}
        {/* eventually, this will be it's own component? */}

        <InputCheckbox muscleGroup={'arm'} />

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

        <input
          className="hidden"
          type="checkbox"
          value="full-body"
          name="full-body"
          id="full-body"
          defaultChecked
        />
        <label htmlFor="full-body">Full Body</label>
      </div>
      <Link className="next-link" to="/new-user/fitness-equipment">
        Next
      </Link>
    </div>
  );
};

export default MuscleGroups;
