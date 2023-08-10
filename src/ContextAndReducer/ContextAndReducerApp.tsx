import { ContextSection } from "./Components/ContextSection";
import { ContextSectionUsingName } from "./Components/ContextSectionUsingName";
import { NonContextSection } from "./Components/NonContextSection";
import { ContextProvider } from "./Store/Context";

export const ContextAndReducerApp = () => {
    return (
        <div>
            <ContextProvider>
                <ContextSection />
                <NonContextSection />
                <ContextSection />
                <NonContextSection />
                <ContextSectionUsingName />
                <ContextSectionUsingName />
            </ContextProvider>
            <div>
                <a href="/">Go Home</a>
            </div>
        </div>
    );
};