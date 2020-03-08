import './RobotInput.css';
import React from 'react';
import {
  parsePlateauInput,
  parseRobotStartInput,
  parseMoveInput
} from '../services/InputParserService';

// each change of input parameter will be returned back to parent
// via onPlateauChange, onStartChange, onMoveChange
function RobotInput({ onPlateauChange, onStartChange, onMoveChange }) {
  function plateauChanged(event) {
    onPlateauChange(parsePlateauInput(event.target.value));
  }

  function startChanged(event) {
    onStartChange(parseRobotStartInput(event.target.value));
  }

  function moveChanged(event) {
    onMoveChange(parseMoveInput(event.target.value));
  }

  return (
    <div>
      <label>Plateau Size (5 5): </label>
      <br />
      <input onChange={plateauChanged} type="text" />
      <br />
      <br />
      <label>Robot Start (1 2 N): </label>
      <br />
      <input onChange={startChanged} type="text" className="uppercase" />
      <br />
      <br />
      <label>Robot Moves (LMR): </label>
      <br />
      <input onChange={moveChanged} className="uppercase" />
      <br />
    </div>
  );
}

export default RobotInput;
