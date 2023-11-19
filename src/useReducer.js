import { useEffect, useState, useReducer } from "react";

//init state
const initSate = 0

//Actions
const UP_ACTION = 'up'
const DOWN_ACTION = 'down'

//Reducer
const reducer = (state, action) => {
    switch(action) {
        case UP_ACTION:
            return state + 1
        case DOWN_ACTION:
            return state - 1
        default:
            throw new Error('Invalid action')
    }
}

export default function UseReducer() {
    const [count, dispatch] = useReducer(reducer, initSate)

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => dispatch(UP_ACTION)} >up</button>
            <button onClick={() => dispatch(DOWN_ACTION)} >down</button>
        </div>
    )
}