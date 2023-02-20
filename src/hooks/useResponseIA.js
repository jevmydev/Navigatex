import { useState, useCallback, useRef } from "react";
import { responseIA } from "../services/responseIA";

export function useResponseIA({ search }) {
    const [response, setResponse] = useState(null);
    const [loading, setLoading] = useState(false);
    const previusSearch = useRef(search);

    const getResponse = useCallback(async ({ search }) => {
        if (search === previusSearch.current) return;

        setLoading(true);

        previusSearch.current = search;

        const formattedSearch = search.trim();
        const newResponse = await responseIA({ search: formattedSearch });

        setResponse(newResponse);

        setLoading(false);
    }, []);

    return { response, loading, getResponse };
}
