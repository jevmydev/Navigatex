import { createContext } from "react";

import { useUserReducer } from "../hooks/useUserReducer";

export const UserContext = createContext();

export function UserProvider({ children }) {
    const { user, updateUser, clearUser } = useUserReducer();

    return (
        <UserContext.Provider
            value={{
                user,
                updateUser,
                clearUser
            }}
        >
            {children}
        </UserContext.Provider>
    );
}
