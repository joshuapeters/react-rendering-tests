import { useEffect } from "react";

export const NonStoreSection = () => {
    useEffect(() => {
        console.log('NonStoreSection rendered');
    });

    return (
        <div>
            I am a non-store section!
        </div>
    );
};