import React from "react";
export interface State2 {
    value: string[];
}

export enum ActionType2 {
    ADD = "add",
    DELETE = "delete",
    TOGGLE = "toggle",
}

export interface Action2 {
    type: ActionType2;
    payload: any;
}

export function reducer2(state: State2, action: Action2) {
    const { type, payload } = action;
    switch (type) {
        case ActionType2.ADD:
            return {
                ...state,
                value: [...state.value, payload],
            };
        case ActionType2.DELETE:
            return {
                ...state,
                value: state.value.filter((item, index) => index !== payload),
            };
        case ActionType2.TOGGLE:
            return {
                ...state,
                value: state.value.map((item, index) =>
                    index === payload ? item + "!" : item
                ),
            };
        default:
            return state;
    }
}