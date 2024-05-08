// unit.test.js
import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
// isPhoneNumer Unit Test cases
test('313-223-4123 is true', () => {
  expect(isPhoneNumber('313-223-4123')).toBe(true);
});

test('000-000-0000 is true', () => {
  expect(isPhoneNumber('000-000-0000')).toBe(true);
});


test('fwa-fwa-terq is false', () => {
  expect(isPhoneNumber('fwa-fwa-terq')).toBe(false);
});

test('3233013234 is false', () => {
  expect(isPhoneNumber('3233013234')).toBe(false);
});

// isEmail Unit Test Cases
test('alstkd@gmail.com is true', () => {
  expect(isEmail('alstkd@gmail.com')).toBe(true);
});

test('0000@ucsd.edu is true', () => {
  expect(isEmail('0000@ucsd.edu')).toBe(true);
});


test('alstkd#ucsd.edu', () => {
  expect(isEmail('alstkd#ucsd.edu')).toBe(false);
});

test('', () => {
  expect(isEmail('')).toBe(false);
});

// isStrongPassword Unit Test Cases
test('alstkd01_ is true', () => {
  expect(isStrongPassword('alstkd01_')).toBe(true);
});

test('alstkd01 is true', () => {
  expect(isStrongPassword('alstkd01')).toBe(true);
});

test('_alstkd01 is false', () => {
  expect(isStrongPassword('_alstkd01')).toBe(false);
});

test('alstkd01dlwklakldklwkdadwdwdw is false', () => {
  expect(isStrongPassword('alstkd01dlwklakldklwkdadwdwdw')).toBe(false);
});

// isDate Unit Test Cases
test('1/2/2000 is true', () => {
  expect(isDate('1/2/2000')).toBe(true);
});

test('00/00/0000 is true', () => {
  expect(isDate('00/00/0000')).toBe(true);
});

test('1/2/000 is false', () => {
  expect(isDate('1/2/000')).toBe(false);
});

test('231/00/0000 is false', () => {
  expect(isDate('231/00/0000')).toBe(false);
});

// isHexColor Unit Test Cases
test('000000 is true', () => {
  expect(isHexColor('000000')).toBe(true);
});

test('A7DD21 is true', () => {
  expect(isHexColor('A7DD21')).toBe(true);
});

test('00000 is false', () => {
  expect(isHexColor('00000')).toBe(false);
});

test('$dwawe is true', () => {
  expect(isHexColor('$dwawe')).toBe(false);
});