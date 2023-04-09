import { useCounter } from '../store/counter';
import { Link } from "react-router-dom";

export default function AboutPage() {
    const [counter, counterAction] = useCounter();

    return (
        <>
            <h1>About Page</h1>
            <Link to={`/`}>Home</Link>
            <h1>{counter.counter}</h1>
            <button onClick={() => counterAction({type: 'add', payload: 1})}>Increment</button>
            <button onClick={() => counterAction({type: 'minus', payload: 1})}>Decrement</button>
        </>
    )
}