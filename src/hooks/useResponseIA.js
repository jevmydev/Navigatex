import { useState, useCallback, useRef } from "react";
import { responseIA } from "../services/responseIA";

export function useResponseIA({ search }) {
    const [response, setResponse] = useState({ choices: [{ text: "" }] });
    const previusSearch = useRef(search);

    const getResponse = useCallback(async ({ search }) => {
        if (search === previusSearch.current) return;

        /* LOADING */

        previusSearch.current = search;

        const newResponse = await responseIA({ search });
        setResponse(newResponse);

        /* REMOVE LOADING */
    }, []);

    return { response, getResponse };
}
