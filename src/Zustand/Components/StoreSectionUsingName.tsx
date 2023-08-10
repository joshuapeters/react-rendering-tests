import { useEffect } from "react";
import { StoreType, useAppStore } from "../Store/Store";

export const StoreSectionUsingName = () => {
    const name  = useAppStore((store: StoreType) => store.name);

    useEffect(() => {
        console.log('ContextSectionUsingName rendered');
    });

    return (
        <div>
            <p>My name is {name}</p>
        </div>
    );
};