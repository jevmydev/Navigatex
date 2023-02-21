import { useRef } from "react";

import Header from "./components/Header";
import Searcher from "./components/Searcher";
import { SearcherForm, SearcherVoice } from "./components/Searcher";
import Response from "./components/Response";
import Footer from "./components/Footer";

import { Loading } from "./elements/Loading";

import { useSearch } from "./hooks/useSearch";
import { useSearchVoice } from "./hooks/useSearchVoice";
import { useResponseIA } from "./hooks/useResponseIA";

function App() {
    const { search, searchSubmit, updateSearch, handleChange } = useSearch();
    const { searchVoice, isVoice, openSearchVoice, updateSearchVoice, toggleVoiceModal } = useSearchVoice();
    const { response, error, loading, regenerateResponse, getResponse } = useResponseIA({ search });

    const isFirstRender = useRef(true);

    const handleSubmit = (e) => {
        e.preventDefault();

        searchSubmit.current = search;
        isFirstRender.current = false;

        getResponse({ search });
    };

    const handleClickVoice = () => {
        searchSubmit.current = searchVoice;

        toggleVoiceModal();

        getResponse({ search: searchVoice });
        updateSearch({ search: searchVoice });
    };

    return (
        <>
            <Header />
            <main>
                <div className="flex flex-col gap-32 px-4 max-w-screen-lg min-h-screen mx-auto">
                    <Searcher>
                        <SearcherForm search={search} handleChange={handleChange} handleSubmit={handleSubmit} regenerateResponse={regenerateResponse} toggleVoiceModal={toggleVoiceModal} />
                        {openSearchVoice && (
                            <SearcherVoice searchVoice={searchVoice} isVoice={isVoice} handleClickVoice={handleClickVoice} updateSearchVoice={updateSearchVoice} toggleVoiceModal={toggleVoiceModal} />
                        )}
                    </Searcher>
                    {loading ? <Loading /> : <Response isFirstRender={isFirstRender.current} question={searchSubmit.current} response={response} error={error} />}
                </div>
            </main>
            <Footer />
        </>
    );
}

export default App;
