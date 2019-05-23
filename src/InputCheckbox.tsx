import React from 'react';

type CheckboxProps = {
  muscleGroup: string
}

export const InputCheckbox: React.FC<CheckboxProps> = props => {
  return (
    <div>
      <input
        className="hidden"
        type="checkbox"
        value="{props.muscleGroup}"
        name="{props.muscleGroup}"
        id="{props.muscleGroup}"
      />

      <label htmlFor="{props.muscleGroup}">{props.muscleGroup}</label>
    </div>
  );
};
