// IMPORT MODULES under test here:
import { myFunction, addExclamationPoints, multiplyBySeven, multiplyBy12ThenHalve, divideThenMultiply } from '../functions.js';

const { test, skip } = QUnit;

test('this test should pass', (expect) => {
    const expected = true;

    const actual = myFunction();

    expect.equal(actual, expected, 'true = true');
});

test('this test should add exclamation points', (expect) => {
    const expected = 'bunny rabbit!!!';

    const actual = addExclamationPoints('bunny rabbit');

    expect.equal(actual, expected, 'bunny rabbit = bunny rabbit!!!');
});

test('This function should take in a number and multiply it by seven', (expect) => {
    const expected = 28;

    const actual = multiplyBySeven(4);

    expect.deepEqual(actual, expected, '4 * 7 should be 28');
});

test('This function should take in a number and multiply it by twelve then cut the result in half', (expect) => {
    const expected = 24;

    const actual = multiplyBy12ThenHalve(4);

    expect.deepEqual(actual, expected, '(4 * 12)/2');
});

test('This function should take in three numbers, divide the first by the second, then multiply the result by the third', (expect) => {
    const expected = 10;

    const actual = divideThenMultiply(8, 4, 5);

    expect.deepEqual(actual, expected, '(8/4)5' );
});
