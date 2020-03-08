import {
  getPossibleDirections,
  getDirectionOfTravel,
  calculateNextPosition,
  getDirectionAngle
} from './DirectionService';

it('should return the two directions that are possible for the current position', () => {
  // arrange + act
  const north = getPossibleDirections('N');
  const east = getPossibleDirections('E');
  const south = getPossibleDirections('S');
  const west = getPossibleDirections('W');

  // assert
  expect(north.left).toEqual('W');
  expect(north.right).toEqual('E');

  expect(east.left).toEqual('N');
  expect(east.right).toEqual('S');

  expect(south.left).toEqual('E');
  expect(south.right).toEqual('W');

  expect(west.left).toEqual('S');
  expect(west.right).toEqual('N');
});

it('should return an undefined direction for unknown position', () => {
  // arrange + act
  const unknown = getPossibleDirections('A');

  // assert
  expect(unknown).toEqual(undefined);
});

it('should return the direction of travel for the current position', () => {
  // arrange + act
  const north = getDirectionOfTravel('N');
  const east = getDirectionOfTravel('E');
  const south = getDirectionOfTravel('S');
  const west = getDirectionOfTravel('W');

  // assert
  expect(north.axis).toEqual('Y');
  expect(north.shift).toEqual(1);

  expect(east.axis).toEqual('X');
  expect(east.shift).toEqual(1);

  expect(south.axis).toEqual('Y');
  expect(south.shift).toEqual(-1);

  expect(west.axis).toEqual('X');
  expect(west.shift).toEqual(-1);
});

it('should return undefined travel for unknown position', () => {
  // arrange + act
  const unknown = getDirectionOfTravel('A');

  // assset
  expect(unknown).toEqual(undefined);
});

it('should calculate the next position for the next move "M" north ', () => {
  // arrange
  const currentPosition = { x: 1, y: 1, direction: 'N' };

  // act.
  const nextPosition = calculateNextPosition(currentPosition, 'M');

  // assset
  expect(nextPosition.x).toEqual(1);
  expect(nextPosition.y).toEqual(2);
  expect(nextPosition.direction).toEqual('N');
});

it('should calculate the next position for the next move "M" south ', () => {
  // arrange
  const currentPosition = { x: 1, y: 1, direction: 'S' };

  // act.
  const nextPosition = calculateNextPosition(currentPosition, 'M');

  // assset
  expect(nextPosition.x).toEqual(1);
  expect(nextPosition.y).toEqual(0);
  expect(nextPosition.direction).toEqual('S');
});

it('should calculate the next position for the next move "M" east ', () => {
  // arrange
  const currentPosition = { x: 2, y: 2, direction: 'E' };

  // act.
  const nextPosition = calculateNextPosition(currentPosition, 'M');

  // assset
  expect(nextPosition.x).toEqual(3);
  expect(nextPosition.y).toEqual(2);
  expect(nextPosition.direction).toEqual('E');
});

it('should calculate the next position for the next move "M" west ', () => {
  // arrange
  const currentPosition = { x: 2, y: 2, direction: 'W' };

  // act.
  const nextPosition = calculateNextPosition(currentPosition, 'M');

  // assset
  expect(nextPosition.x).toEqual(1);
  expect(nextPosition.y).toEqual(2);
  expect(nextPosition.direction).toEqual('W');
});

it('should calculate the next position for the next move "L"', () => {
  // arrange
  const currentPosition = { x: 1, y: 1, direction: 'N' };

  // act.
  const nextPosition = calculateNextPosition(currentPosition, 'L');

  // assset
  expect(nextPosition.x).toEqual(1);
  expect(nextPosition.y).toEqual(1);
  expect(nextPosition.direction).toEqual('W');
});

it('should calculate the next position for the next move "R"', () => {
  // arrange
  const currentPosition = { x: 1, y: 1, direction: 'N' };

  // act.
  const nextPosition = calculateNextPosition(currentPosition, 'R');

  // assset
  expect(nextPosition.x).toEqual(1);
  expect(nextPosition.y).toEqual(1);
  expect(nextPosition.direction).toEqual('E');
});

it('should return undefined next position for unknown next move "A"', () => {
  // arrange
  const currentPosition = { x: 1, y: 1, direction: 'N' };

  // act.
  const nextPosition = calculateNextPosition(currentPosition, 'A');

  // assset
  expect(nextPosition).toEqual(undefined);
});

it('should return the angle (from north) for the position to face the correct direction', () => {
  // arrange + act + assert
  expect(getDirectionAngle('N')).toEqual(0);
  expect(getDirectionAngle('E')).toEqual(90);
  expect(getDirectionAngle('S')).toEqual(180);
  expect(getDirectionAngle('W')).toEqual(-90);
});
