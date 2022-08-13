import React, { useReducer } from 'react'
const initialState = { count: 0};
const ACTION = {
    INCREASE : "increase",
    DECREASE: "decrease",
}

const reducer = (state,action) => {
    switch(action.type) {
        case ACTION.INCREASE:
            return { count: state.count + 1};
        case ACTION.DECREASE:
                return { count: state.count - 1};

        default:
            return state;
    }


}

export const Form = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const increaseCount = () => {
        dispatch({ type: ACTION.INCREASE});
    }

    const decreaseCount = () => {
        dispatch({ type: ACTION.DECREASE});
    }


  return (
    <div>
        <h2> Count : {state.count}</h2>
  
        <button onClick={increaseCount}>Increase</button>
        <button onClick={decreaseCount}>Decrease</button>


    </div>
  )
}
