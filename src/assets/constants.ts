import { IOperations } from './types';

export const operations: IOperations = {
    '/': (a, b) => a / b,
    // prettier-ignore
    'х': (a, b) => a * b,
    '-': (a, b) => a - b,
    '+': (a, b) => a + b,
    '=': null
};

export const dot = '.';
