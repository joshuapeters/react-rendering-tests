import { NonStoreSection } from "./Components/NonStoreSection";
import { StoreSection } from "./Components/StoreSection";
import { StoreSectionUsingName } from "./Components/StoreSectionUsingName";

export const ZustandApp = () => {
    return (
        <div>
            <StoreSection />
            <NonStoreSection />
            <StoreSection />
            <NonStoreSection />
            <StoreSectionUsingName />
            <StoreSectionUsingName />
            <div>
                <a href="/">Go Home</a>
            </div>
        </div>
    );
};