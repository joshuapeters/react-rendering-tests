import { createContext, useContext, useReducer } from "react";

type State = {
    count: number;
    name: string;
};
type Actions = {
    type: 'increment' | 'decrement' | 'reset';
};

type ContextType = State & {
    increment: () => void;
    decrement: () => void;
};

const AppContext = createContext<ContextType>({
    count: 0,
    name: "Josh",
    increment: () => { },
    decrement: () => { },
});

const reducer = (state: State, action: Actions) => {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        case 'reset':
            return { count: 0, name: "Josh" };     
    }
}

export const useAppContext = () => useContext(AppContext);


export const ContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [state, dispatch] = useReducer(reducer, { count: 0, name: "Josh", });

    const value = {
        count: state.count,
        name: state.name,
        increment: () => dispatch({ type: 'increment' }),
        decrement: () => dispatch({ type: 'decrement' }),
    }

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
}