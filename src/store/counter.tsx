import { createState } from "./utils";

//DEFINE YOUR STATE HERE
interface Counter {
    counter: number
}

//DEFINE YOUR ACTIONS HERE. FOLLOW THIS PATTERN.
//`type` can be any string
//`payload` can be any valid type
type CounterAction = 
    | {type: 'add', payload: number} 
    | {type: 'minus', payload: number};


//DEFINE YOUR GLOBAL STATE.
//First Argument is the default value of your state above
//Second Argument is a functions that accepts the current state and the action received. returns a new state 
const {provider: CounterProvider, context: useCounter} = createState<Counter, CounterAction>({
    counter: 0
}, (state, actions) => {
    switch (actions.type) {
        case "add":
            return {counter: state.counter + actions.payload}
        case "minus":
            return {counter: state.counter - actions.payload}
    }
})

export {
    CounterProvider, 
    useCounter
}

