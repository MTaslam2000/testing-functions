// IMPORT MODULES under test here:
import { myFunction, 
    addExclamationPoints, 
    multiplyBySeven, 
    multiplyBy12ThenHalve, 
    divideThenMultiply, 
    returnAsAnArray,
    returnAsAString,
    makeLuckyGreeting,
    getSecondItem,
    getLastItem,
    renderDogLI,
    renderDogDiv } from '../functions.js';

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

test('this test should add exclamation points', (expect2) => {
    const expected2 = 'rawr!!!';

    const actual2 = addExclamationPoints('rawr');

    expect2.equal(actual2, expected2, 'rawr = rawr!!!');

    
});

test('this test should add exclamation points', (expect3) => {
    const expected3 = 'whats up!!!';

    const actual3 = addExclamationPoints('whats up');

    expect3.equal(actual3, expected3, 'whats up = whats up!!!');

    
});

test('This function should take in a number and multiply it by seven', (expect) => {
    const expected = 28;

    const actual = multiplyBySeven(4);

    expect.deepEqual(actual, expected, '4 * 7 = 28');
});

test('This function should take in a number and multiply it by seven', (expect2) => {
    const expected2 = 14;

    const actual2 = multiplyBySeven(2);

    expect2.deepEqual(actual2, expected2, '2 * 7 = 14');
});

test('This function should take in a number and multiply it by seven', (expect3) => {
    const expected3 = 21;

    const actual3 = multiplyBySeven(3);

    expect3.deepEqual(actual3, expected3, '3 * 7 = 21');
});

test('This function should take in a number and multiply it by twelve then cut the result in half', (expect) => {
    const expected = 24;

    const actual = multiplyBy12ThenHalve(4);

    expect.deepEqual(actual, expected, '(4 * 12)/2 = 24');
});

test('This function should take in a number and multiply it by twelve then cut the result in half', (expect2) => {
    const expected2 = 12;

    const actual2 = multiplyBy12ThenHalve(2);

    expect2.deepEqual(actual2, expected2, '(2 * 12)/2 = 12');
});

test('This function should take in a number and multiply it by twelve then cut the result in half', (expect3) => {
    const expected3 = 18;

    const actual3 = multiplyBy12ThenHalve(3);

    expect3.deepEqual(actual3, expected3, '(2 * 12)/2 = 12');
});

test('This function should take in three numbers, divide the first by the second, then multiply the result by the third', (expect) => {
    const expected = 10;

    const actual = divideThenMultiply(8, 4, 5);

    expect.deepEqual(actual, expected, '(8/4)5 = 10');
});

test('This function should take in three numbers, divide the first by the second, then multiply the result by the third', (expect2) => {
    const expected2 = 24;

    const actual2 = divideThenMultiply(6, 2, 8);

    expect2.deepEqual(actual2, expected2, '(8/4)5 = 10');
});

test('This function should take in three numbers, divide the first by the second, then multiply the result by the third', (expect2) => {
    const expected2 = 1;

    const actual2 = divideThenMultiply(1, 2, 2);

    expect2.deepEqual(actual2, expected2, '(8/4)5 = 10');
});

test('This function should take in three numbers and return those numbers in an array', (expect) => {
    const expected = [8, 4, 5];

    const actual = returnAsAnArray(8, 4, 5);

    expect.deepEqual(actual, expected, '8,4,5 should be [8, 4, 5]');
});

test('This function should take in three numbers and return those numbers mushed together as a string', (expect) => {
    const expected = '8, 4, 5';

    const actual = returnAsAString(8, 4, 5);

    expect.deepEqual(actual, expected, '8,4,5 should be "845"');
});

test('This function should take in two numbers and return a greeting announcing that the sum of those numbers is todays lucky number', (expect) => {
    const expected = 'Hello! Your lucky number for the day is 12.';

    const actual = makeLuckyGreeting(8, 4);

    expect.deepEqual(actual, expected, '8, 4 should be Hello! Your lucky number for the day is 12');
});

test('This function should take an array and return the second item in the array', (expect) => {
    const expected = 'apple';

    const actual = getSecondItem(['kiwi', 'apple', 'orange', 'plum']);

    expect.deepEqual(actual, expected, 'should be apple');
});

test('This function should take an array and return the LAST item in the array, no matter the arrays length', (expect) => {
    const expected = 'plum';

    const actual = getLastItem(['kiwi', 'apple', 'orange', 'plum']);

    expect.deepEqual(actual, expected, 'should be plum');
});

test('This function should take a dog object and return an <li> with the name of the dog', (expect) => {
    const expected = '<li>Benny</li>';

    const actual = renderDogLI({ name: 'Benny', age: 6 });

    expect.deepEqual(actual.outerHTML, expected, 'should be name of dog');
});

test('This function should take a dog object and return a div with the dogs information', (expect) => {
    const expected = '<div><h1>Benny</h1><p>Benny is 6 years old</p></div>';

    const actual = renderDogDiv({ name: 'Benny', age: 6 });

    expect.deepEqual(actual.outerHTML, expected, 'should be information of dog');
});

