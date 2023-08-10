import { useEffect } from "react";
import { useAppContext } from "../Store/Context";

export const ContextSection = () => {
    const { count, increment, decrement } = useAppContext();

    useEffect(() => {
        console.log('ContextSection rendered');
    });

    return (
        <div>
            <p>The count is: {count}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    );
};