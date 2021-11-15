interface IAction<T> {
    readonly type: string;
    readonly payload?: T;
}

interface IActionCreator<P> {
    type: string;
    (payload: P): IAction<P>;
}

export function actionCreator<P>(type: string): IActionCreator<P> {
    return Object.assign((payload: P) => ({ type, payload }), { type });
}
