import { getStorage } from "../storage/localStorage";

export const USER_DEFAULT = getStorage({ key: "user", isJSON: true }) ?? {
    name: "Guess",
    icon: "./favicon.ico"
};

export const USER_ACTION_TYPES = {
    UPDATE_USER: "UPDATE_USER",
    CLEAR_USER: "CLEAR_USER"
};

export const reducer = (state, action) => {
    const { type, payload: user } = action;

    switch (type) {
        case USER_ACTION_TYPES.UPDATE_USER:
            return user;
        case USER_ACTION_TYPES.CLEAR_USER:
            return {
                name: "Guess",
                icon: "./favicon.ico"
            };
    }
};
