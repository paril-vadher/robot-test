export const moves = ['L', 'R', 'M'];
export const directions = ['N', 'S', 'E', 'W'];

// for given position, return the possible left & right directions
export function getPossibleDirections(currentPosition) {
  switch (currentPosition) {
    case 'N':
      return { left: 'W', right: 'E' };
    case 'E':
      return { left: 'N', right: 'S' };
    case 'S':
      return { left: 'E', right: 'W' };
    case 'W':
      return { left: 'S', right: 'N' };
    default:
      return undefined;
  }
}

// for given position, return axis of the travel and relative shift
export function getDirectionOfTravel(currentPosition) {
  switch (currentPosition) {
    case 'N':
      return { axis: 'Y', shift: 1 };
    case 'E':
      return { axis: 'X', shift: 1 };
    case 'S':
      return { axis: 'Y', shift: -1 };
    case 'W':
      return { axis: 'X', shift: -1 };
    default:
      return undefined;
  }
}

// for given position, return angle (from north) required to face correct direction
export function getDirectionAngle(currentPosition) {
  switch (currentPosition) {
    case 'N':
      return 0;
    case 'E':
      return 90;
    case 'S':
      return 180;
    case 'W':
      return -90;
    default:
      return undefined;
  }
}

// for current position {x: 0, y: 0, direction:'N'}, what would be next position given the next move L,R,M
export function calculateNextPosition(currentPosition, nextMove) {
  if (!moves.includes(nextMove)) {
    return undefined;
  }

  if (nextMove === 'L') {
    const nextDirection = getPossibleDirections(currentPosition.direction);
    return { ...currentPosition, direction: nextDirection.left };
  }

  if (nextMove === 'R') {
    const nextDirection = getPossibleDirections(currentPosition.direction);
    return { ...currentPosition, direction: nextDirection.right };
  }

  if (nextMove === 'M') {
    const travel = getDirectionOfTravel(currentPosition.direction);

    if (travel === undefined) {
      return undefined;
    }

    if (travel.axis === 'Y') {
      return { ...currentPosition, y: currentPosition.y + travel.shift };
    }

    if (travel.axis === 'X') {
      return { ...currentPosition, x: currentPosition.x + travel.shift };
    }
  }

  return undefined;
}
