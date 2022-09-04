import { ADD, REMOVE } from "./actiontype";

export const add = (data) => ({

    type: ADD,
    payload: data

})
export const remove = (data) => ({

    type: REMOVE,
    payload: data

})