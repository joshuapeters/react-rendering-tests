import { useEffect } from "react";
import { useAppContext } from "../Store/Context";

export const ContextSectionUsingName = () => {
    const { name } = useAppContext();

    useEffect(() => {
        console.log('ContextSectionUsingName rendered');
    });

    return (
        <div>
            <p>My name is {name}</p>
        </div>
    );
};