import Header from "./components/Header";
import Searcher from "./components/Searcher";
import { SearcherForm } from "./components/Searcher";
import Response from "./components/Response";
import Footer from "./components/Footer";

import { useSearch } from "./hooks/useSearch";
import { useResponseIA } from "./hooks/useResponseIA";

function App() {
    const { search, updateSearch } = useSearch();
    const { response, getResponse } = useResponseIA({ search });

    const handleChange = (e) => {
        const newSearch = e.target.value;
        updateSearch({ search: newSearch });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
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
                    <Response titleQuestion={search} response={response} />
                </div>
            </main>
            <Footer />
        </>
    );
}

export default App;
