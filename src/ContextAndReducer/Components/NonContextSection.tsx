import { useEffect } from "react";

export const NonContextSection = () => {
    useEffect(() => {
        console.log('NonContextSection rendered');
    });

    return (
        <div>
            I am a non-context section!
        </div>
    );
};