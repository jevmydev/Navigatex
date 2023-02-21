import { useContext } from "react";
import { UserContext } from "../context/user";

import { UserIcon } from "../elements/Icons";

export function useUser() {
    const { user, setUser } = useContext(UserContext);

    const updateUser = ({ name, icon }) => {
        const newUser = structuredClone(user);
        newUser.name = name || "Guess";
        newUser.icon = icon || <UserIcon />;

        setUser(newUser);
    };

    return { user, updateUser };
}
