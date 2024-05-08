// sum.test.js
import { sum } from '../code-to-unit-test/sum';

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1,2)).toBe(4);
});

test('adds 31 + 21 to equal 52', () => {
  expect(sum(31,21)).toBe(52);
});