import { Button } from "../../elements/Button";
import { SendIcon, MicIcon } from "../../elements/Icons";

export function SearcherForm({ search, handleChange, handleSubmit, regenerateResponse, setOpenVoiceModal }) {
    return (
        <form className="relative flex flex-col justify-center gap-4" autoComplete="on" onSubmit={handleSubmit}>
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

export default SearcherForm;
