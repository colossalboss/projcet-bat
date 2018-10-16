import React from 'react';
import {FormControl, FormGroup, ControlLabel, HelpBlock} from 'react-bootstrap'

export default ({label, type, onChange, value, placeholder}) => {
  return (
    <FormGroup
      controlId="formBasicText"
    >
      <ControlLabel>{label}</ControlLabel>
      <FormControl
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
      <FormControl.Feedback />
      <HelpBlock>Validation is based on string length.</HelpBlock>
    </FormGroup>
  );
}