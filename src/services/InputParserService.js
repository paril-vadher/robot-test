import { moves, directions } from './DirectionService';

const isNumber = num => {
  return !isNaN(parseInt(num));
};

// validate plateau has two number parts
export function parsePlateauInput(value) {
  if (value) {
    let parts = value.split(' ');
    if (parts.length === 2 && isNumber(parts[0]) && isNumber(parts[1])) {
      return { x: parseInt(parts[0]), y: parseInt(parts[1]) };
    }
  }
  return undefined;
}

// validate start format has 3 parts with 2 numbers and one direction
export function parseRobotStartInput(value) {
  if (value) {
    let parts = value.toUpperCase().split(' ');
    if (
      parts.length === 3 &&
      isNumber(parts[0]) &&
      isNumber(parts[1]) &&
      directions.includes(parts[2])
    ) {
      return {
        x: parseInt(parts[0]),
        y: parseInt(parts[1]),
        direction: parts[2]
      };
    }
  }
  return undefined;
}

// validate moves are only of LMR and return as uppercase array.
export function parseMoveInput(value) {
  if (value) {
    let parts = value
      .toUpperCase()
      .split('')
      .filter(v => {
        return moves.includes(v);
      });

    return parts;
  }
  return undefined;
}
