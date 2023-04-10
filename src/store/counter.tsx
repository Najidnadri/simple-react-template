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
//`state` holds your current global state
//`mutations` is a function that receive the current state and the received actions. Returns new state
const {provider: CounterProvider, context: useCounter} = createState<Counter, CounterAction>({
    state: {
        counter: 0
    },
    mutations: (state, actions) => {
        switch (actions.type) {
            case "add":
                return {counter: state.counter + actions.payload}
            case "minus":
                return {counter: state.counter - actions.payload}
        }
    }
})

export {
    //Use this inside `store/index.tsx`
    CounterProvider, 
    //Use this inside any of your components
    useCounter
}

