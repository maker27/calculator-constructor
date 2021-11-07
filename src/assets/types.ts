type TOperationFunction = ((a: number, b: number) => number) | null;

export interface IOperations {
    '/': TOperationFunction;
    // prettier-ignore
    'х': TOperationFunction;
    '-': TOperationFunction;
    '+': TOperationFunction;
    '=': TOperationFunction;
}

export type TOperation = keyof IOperations;
