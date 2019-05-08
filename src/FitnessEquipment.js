import React from 'react';

const FitnessEquipment = props => {
  return (
    <div className="selection-btn-container">
      {/* ideally, if the full gym box is checked, the others are automatically all checked and if body weight only is checked, all others are unchecked */}
      {/* eventually, this will be populated from the database? */}
      {/* eventually, this will be it's own component? */}
      <input
        type="checkbox"
        value="body-weight-only"
        name="body-weight-only"
        id="body-weight-only"
      />
      <label htmlFor="body-weight-only">Body Weight Only</label>
      <input
        type="checkbox"
        value="free-weights"
        name="free-weights"
        id="free-weights"
      />
      <label htmlFor="free-weights">Free Weights</label>
      <input
        type="checkbox"
        value="cable-machines"
        name="cable-machines"
        id="cable-machines"
      />
      <label htmlFor="cable-machines">Cable Machines</label>
      <input
        type="checkbox"
        value="bars-benches"
        name="bars-benches"
        id="bars-benches"
      />
      <label htmlFor="bars-benches">Bars & Benches</label>
      <input
        type="checkbox"
        value="weight-machines"
        name="weight-machines"
        id="weight-machines"
      />
      <label htmlFor="weight-machines">Weight Machines</label>
      <input
        type="checkbox"
        value="full-gym"
        name="full-gym"
        id="full-gym"
        checked
      />
      <label htmlFor="full-gym">Full Gym</label>
    </div>
  );
};

export default FitnessEquipment;
