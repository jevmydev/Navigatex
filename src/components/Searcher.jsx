import { Button } from "../elements/Button";
import { Blur } from "../elements/Blur";
import { SendIcon, MicIcon, MicMuteIcon, CloseIcon } from "../elements/Icons";

export function SearcherVoice({ searchVoice, isSpeaking, handleClickSearchVoice, updateSearchVoice, setOpenVoiceModal }) {
    const classNameStateButton = isSpeaking ? "outline-1 outline-red-600" : "";
    const onClickButton = searchVoice ? handleClickSearchVoice : updateSearchVoice;

    return (
        <div className="backdrop-blur-md fixed top-0 left-0 w-full h-full z-20 flex items-center justify-center">
            <div className="relative flex flex-col gap-4 justify-center items-center bg-slate-900 max-w-lg p-4 mx-4 rounded">
                <div className="absolute top-4 right-4">
                    <Button onClick={setOpenVoiceModal}>
                        <CloseIcon />
                    </Button>
                </div>
                <div className="mt-14">
                    <Button classNameState={classNameStateButton} onClick={onClickButton}>
                        {isSpeaking ? searchVoice ? <SendIcon width="w-32" height="h-10" /> : <MicIcon width="w-32" height="h-10" /> : <MicMuteIcon width="w-32" height="h-10" />}
                    </Button>
                </div>
                <div>{isSpeaking && <p>{searchVoice ? searchVoice : "Escuchando..."}</p>}</div>
            </div>
        </div>
    );
}

export function SearcherForm({ search, handleChange, handleSubmit, regenerateResponse, setOpenVoiceModal }) {
    return (
        <form className="relative flex flex-col justify-center gap-4" autoComplete="off" onSubmit={handleSubmit}>
            <div>
                <input
                    className="bg-slate-800 border border-slate-600 transition-colors outline-none rounded-full py-2 px-4 w-full placeholder:text-slate-400 focus:border-indigo-600"
                    name="search"
                    type="search"
                    autoFocus
                    placeholder="Escribe lo que buscas..."
                    onChange={handleChange}
                    value={search}
                />
            </div>
            <div className="absolute top-1 right-4">
                <Button type="submit">
                    <SendIcon />
                </Button>
            </div>
            <div className="flex items-center justify-center gap-4">
                <Button onClick={setOpenVoiceModal}>
                    <span className="inline-block sm:hidden">
                        <MicIcon />
                    </span>
                    <span className="hidden sm:inline-block">Búsqueda por voz</span>
                </Button>
                <Button onClick={regenerateResponse}>
                    <span>Regenerar respuesta</span>
                </Button>
            </div>
        </form>
    );
}

export function Searcher({ children }) {
    return (
        <section>
            <div className="max-w-screen-sm mx-auto font-light flex flex-col justify-end items-center gap-8 h-96 mt-20">
                <div className="flex flex-col font-bold">
                    <h1 className="tracking-tighter text-indigo-600 text-5xl mb:text-6xl desk:text-8xl">NavigateX</h1>
                    <h2 className="tracking-tighter text-white">Navega la web con IA</h2>
                </div>
                <div className="w-full">{children}</div>
                <Blur />
            </div>
        </section>
    );
}

export default Searcher;
