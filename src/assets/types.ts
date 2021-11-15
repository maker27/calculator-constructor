type TBinaryOperator = (a: number, b: number) => number;

export type TOperation = '/' | 'х' | '-' | '+' | '=';

export type TOperationActions = Record<TOperation, TBinaryOperator | null>;

export enum Mode {
    constructor,
    runtime
}

export type TReducer<S, A> = (prevState: S, action: A) => S;
