import { createContext, useContext, useState } from "react";

const NavigationContext = createContext();

export const NavigationProvider = ({ children }) => {
    const [page, setPage] = useState("login");

    return (
        <NavigationContext.Provider value={{ page, setPage }}>
            {children}
        </NavigationContext.Provider>
    );
};

export const useNavigation = () => useContext(NavigationContext);
