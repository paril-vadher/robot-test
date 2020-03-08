import {
  parseMoveInput,
  parsePlateauInput,
  parseRobotStartInput
} from './InputParserService';

it('should return x,y values for plateau input "5 4"', () => {
  // arrange + act
  const size = parsePlateauInput('5 4');

  // assert
  expect(size.x).toEqual(5);
  expect(size.y).toEqual(4);
});

it('should return undefined for plateau input "5 4 "', () => {
  // arrange + act
  const size = parseRobotStartInput('5 4 ');

  // assert
  expect(size).toEqual(undefined);
});

it('should return x,y,direction values for start input "0 0 N"', () => {
  // arrange + act
  const start = parseRobotStartInput('0 0 N');

  // assert
  expect(start.x).toEqual(0);
  expect(start.y).toEqual(0);
  expect(start.direction).toEqual('N');
});

it('should return undefined for start input "A 0 N"', () => {
  // arrange + act
  const start = parseRobotStartInput('A 0 N');

  // assert
  expect(start).toEqual(undefined);
});

it('should return array of uppercase letters for move input "la M zr"', () => {
  // arrange + act
  const move = parseMoveInput('la M zr');

  // assert
  expect(move.length).toEqual(3);
  expect(move[0]).toEqual('L');
  expect(move[1]).toEqual('M');
  expect(move[2]).toEqual('R');
});
