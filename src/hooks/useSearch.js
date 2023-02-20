import { useState, useRef } from "react";

export function useSearch() {
    const [search, setSearch] = useState("");
    const isFirstTimeInput = useRef(true);
    const searchSubmit = useRef("");

    const updateSearch = ({ search }) => {
        if ((search === "" && isFirstTimeInput.current) || search.startsWith(" ")) return;

        isFirstTimeInput.current = false;
        setSearch(search);
    };

    const handleChange = (e) => {
        const search = e.target.value;
        updateSearch({ search });
    };

    return { search, searchSubmit, handleChange };
}
