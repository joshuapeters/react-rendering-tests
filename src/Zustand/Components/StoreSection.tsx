import { useEffect } from "react";
import { useAppStore, StoreType } from "../Store/Store";

export const StoreSection = () => {
    const count = useAppStore((store: StoreType) => store.count);
    const increment = useAppStore((store: StoreType) => store.increment);
    const decrement = useAppStore((store: StoreType) => store.decrement);

    useEffect(() => {
        console.log('StoreSection rendered');
    });

    return (
        <div>
            <p>The count is: {count}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    );
};