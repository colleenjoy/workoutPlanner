import React from 'react';

const MuscleGroups = props => {
  return (
    <div className="selection-btn-container">
      {/* ideally, if the full body box is checked, the others are automatically unchecked and vice versa */}
      {/* eventually, this will be populated from the database? */}
      {/* eventually, this will be it's own component? */}
      <input type="checkbox" value="arm" name="arm" id="arm" />
      <label htmlFor="arm">Arms</label>
      <input type="checkbox" value="back" name="back" id="back" />
      <label htmlFor="back">Back</label>
      <input type="checkbox" value="leg" name="leg" id="leg" />
      <label htmlFor="leg">Legs</label>
      <input type="checkbox" value="abs" name="abs" id="abs" />
      <label htmlFor="abs">Abs</label>
      <input type="checkbox" value="chest" name="chest" id="chest" />
      <label htmlFor="chest">Chest</label>
      <input
        type="checkbox"
        value="full-body"
        name="full-body"
        id="full-body"
        checked
      />
      <label htmlFor="full-body">Full Body</label>
    </div>
  );
};

export default MuscleGroups;
