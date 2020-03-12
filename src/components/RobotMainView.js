import React, { useState } from 'react';
import RobotPlateau from './RobotPlateau';
import RobotInput from './RobotInput';
import { calculateNextPosition } from './../services/DirectionService';

const defaultMapSize = { x: 0, y: 0 };
const defaultRobot = { x: 0, y: 0, direction: 'N' };

function RobotMainView() {
  const [plateauSize, setPlateauSize] = useState(defaultMapSize);
  const [originalRobot, setOriginalRobot] = useState(defaultRobot);
  const [robot, setRobot] = useState(defaultRobot);

  // set plateau size
  function plateauChanged(plateau) {
    if (plateau === undefined) return;
    setPlateauSize(plateau);
  }

  // set start pos of robot. record the original start pos.
  function startChanged(start) {
    if (start === undefined) return;
    setOriginalRobot(start);
    setRobot(start);
  }

  // replay all the moves from the original robot pos.
  function moveChanged(moveParts) {
    let next = originalRobot;

    if (moveParts !== undefined) {
      moveParts.forEach(move => {
        next = calculateNextPosition(next, move);
      });
    }
    setRobot(next);
  }

  // output where the robot is
  function robotOutput() {
    return robot && `${robot.x} ${robot.y} ${robot.direction}`;
  }

  return (
    <>
      <h1 className="center">robot test</h1>
      <div className="center">
        <RobotInput
          onPlateauChange={change => plateauChanged(change)}
          onStartChange={change => startChanged(change)}
          onMoveChange={changed => moveChanged(changed)}
        />
        <br />
        <h4>Output: {robotOutput()}</h4>
        <br />
        <RobotPlateau plateauSize={plateauSize} robot={robot} />
        <br />
      </div>
    </>
  );
}

export default RobotMainView;
