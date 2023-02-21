import { useState } from "react";
import { createContext } from "react";

import { UserIcon } from "../elements/Icons";

export const UserContext = createContext();

export function UserProvider({ children }) {
    const [user, setUser] = useState({
        name: "Guess",
        icon: <UserIcon />
    });

    return (
        <UserContext.Provider
            value={{
                user,
                setUser
            }}
        >
            {children}
        </UserContext.Provider>
    );
}
