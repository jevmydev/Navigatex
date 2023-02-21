import { useState, useCallback, useRef } from "react";
import { responseIA } from "../services/responseIA";

export function useResponseIA({ search }) {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const previusSearch = useRef(search);
    const regenerateResponseRef = useRef(false);

    const getResponse = useCallback(async ({ search }) => {
        if ((search === previusSearch.current && regenerateResponseRef.current === false) || search === "") return;

        setLoading(true);

        regenerateResponseRef.current = false;
        previusSearch.current = search;

        try {
            const formattedSearch = search.trim();
            const newResponse = await responseIA({ search: formattedSearch });

            setResponse(newResponse);
            setError(null);
        } catch (err) {
            setError(err);
            throw new Error(`Response IA: ${err}`);
        } finally {
            setLoading(false);
        }
    }, []);

    const regenerateResponse = () => {
        regenerateResponseRef.current = true;
        getResponse({ search });
    };

    return { response, error, loading, regenerateResponse, getResponse };
}
