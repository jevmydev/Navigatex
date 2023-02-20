import { useState, useRef } from "react";

export function useSearch() {
    const [search, setSearch] = useState("");
    const isFirstTimeInput = useRef(true);

    const updateSearch = ({ search }) => {
        if ((search === "" && isFirstTimeInput.current) || search.startsWith(" ")) return;

        isFirstTimeInput.current = false;
        setSearch(search); /* TRIM */
    };

    return { search, updateSearch };
}
