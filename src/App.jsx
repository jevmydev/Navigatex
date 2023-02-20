import { useRef } from "react";

import Header from "./components/Header";
import Searcher from "./components/Searcher";
import { SearcherForm } from "./components/Searcher";
import Response from "./components/Response";
import Footer from "./components/Footer";

import { Loading } from "./elements/Loading";

import { useSearch } from "./hooks/useSearch";
import { useResponseIA } from "./hooks/useResponseIA";

function App() {
    const { search, searchSubmit, handleChange } = useSearch();
    const { response, error, loading, getResponse } = useResponseIA({ search });
    const isFirstRender = useRef(true);

    const handleSubmit = (e) => {
        e.preventDefault();

        searchSubmit.current = search;
        isFirstRender.current = false;

        getResponse({ search });
    };

    return (
        <>
            <Header />
            <main>
                <div className="flex flex-col gap-32 px-4 max-w-screen-lg mx-auto">
                    <Searcher>
                        <SearcherForm search={search} handleChange={handleChange} handleSubmit={handleSubmit} />
                    </Searcher>
                    {loading ? <Loading /> : <Response isFirstRender={isFirstRender.current} question={searchSubmit.current} response={response} error={error} />}
                </div>
            </main>
            <Footer />
        </>
    );
}

export default App;
