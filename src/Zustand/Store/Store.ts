import {create} from "zustand"

type StoreActions = {
    increment: () => void;
    decrement: () => void;
}

type StoreState = {
    count: number;
    name: string;
}

export type StoreType = StoreState & StoreActions;

export const useAppStore = create<StoreType>()((set) => {
    return {
        count: 0,
        name: "Zustand",
        increment: () => set((state) => ({count: state.count + 1})),
        decrement: () => set((state) => ({count: state.count - 1}))
    }
});