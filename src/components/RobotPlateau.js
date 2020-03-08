import React from 'react';
import { getDirectionAngle } from '../services/DirectionService';
import { ReactComponent as RobotLogo } from './robot-up.svg';

const CELL_SIZE = 50;
const MAP_POINT_SIZE = 2;
const ROBOT_SIZE = 30;
const HALF_ROBOT_SIZE = ROBOT_SIZE / 2;

const addShift = x => x + 1;

// note the plateau is 1 based, otherwise svg circle at 0 will be cut off.
function RobotPlateau({ plateauSize, robot }) {
  // width & height
  const gridSize = () => {
    return {
      width: CELL_SIZE * addShift(plateauSize.x),
      height: CELL_SIZE * addShift(plateauSize.y)
    };
  };

  // plateau layout. starting from index 1 so end will be +1
  const drawPlateauPoints = ({ x, y }) => {
    let points = [];
    for (let i = 1; i <= x + 1; i++) {
      for (let j = 1; j <= y + 1; j++) {
        points.push(
          drawPlateauPoint(
            i * CELL_SIZE,
            j * CELL_SIZE,
            MAP_POINT_SIZE,
            'key' + i + j
          )
        );
      }
    }
    return points;
  };

  // a single point in the plateau
  const drawPlateauPoint = (x, y, size, key) => {
    return <circle cx={x} cy={y} r={size} fill="black" key={key} />;
  };

  // draw a robot at x y coordinates and rotate for direction
  const drawRobot = ({ x, y, direction }) => {
    var angle = getDirectionAngle(direction);

    return (
      <svg
        x={(x + 1) * CELL_SIZE - HALF_ROBOT_SIZE}
        y={gridSize().height - y * CELL_SIZE - HALF_ROBOT_SIZE}
      >
        <g transform={`rotate(${angle} ${HALF_ROBOT_SIZE} ${HALF_ROBOT_SIZE})`}>
          <RobotLogo width={ROBOT_SIZE} height={ROBOT_SIZE} />
        </g>
      </svg>
    );
  };

  // svg within svg to give space for the plateau points.
  return (
    <svg
      width={gridSize().width + CELL_SIZE}
      height={gridSize().height + CELL_SIZE}
      style={{ border: '1px solid green' }}
    >
      <svg
        x={CELL_SIZE / 10}
        y={CELL_SIZE / 10}
        width={gridSize().width + CELL_SIZE}
        height={gridSize().height + CELL_SIZE}
      >
        {drawPlateauPoints(plateauSize)}
        {drawRobot(robot)}
      </svg>
    </svg>
  );
}

export default RobotPlateau;
