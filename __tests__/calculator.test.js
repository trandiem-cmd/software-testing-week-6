import {divide} from '../src/calculator.js';

describe('divide',() => {
    it('divides one number by a non-zero number',() => {
        expect(divide(8,2)).toBe(4);
    }) 

it('throws when dividing one number by zero',() => {
    expect(() => divide(10,0)).toThrow("Division by zero is not allowed");
})


it('throws when dividend is not a number',() => {
    expect(() => divide('4',2)).toThrow("Both arguments must be numbers");
})

it('throws when divisor is not a number',() => {
    expect(() => divide(6,'2')).toThrow("Both arguments must be numbers");
})

it('throws when dividend is NaN',() => {
    expect(() => divide(Math.sqrt(-1),2)).toThrow("Arguments can not be NaN");
})
});