import { Button } from "../elements/Button";
import { Blur } from "../elements/Blur";
import { SendIcon } from "../elements/Icons";

export function SearcherForm({ search, handleChange, handleSubmit }) {
    return (
        <form className="relative" autoComplete="off" onSubmit={handleSubmit}>
            <div>
                <input
                    className=" bg-slate-800 border border-slate-600 transition-colors outline-none rounded-full py-2 px-4 w-full placeholder:text-slate-400 focus:border-indigo-600"
                    name="search"
                    type="search"
                    autoFocus
                    placeholder="Escribe lo que buscas y encuentra lo que necesites"
                    onChange={handleChange}
                    value={search}
                />
            </div>
            <div className="absolute top-1 right-2">
                <Button>
                    <SendIcon />
                </Button>
            </div>
        </form>
    );
}

export function Searcher({ children }) {
    return (
        <section>
            <div className="max-w-screen-sm mx-auto font-light flex flex-col justify-end items-center gap-8 h-96">
                <div className="flex flex-col font-bold">
                    <h1 className="tracking-tighter text-indigo-600 text-5xl mb:text-6xl desk:text-8xl">NavigateX</h1>
                    <h2 className="tracking-tighter">Navega la web con IA</h2>
                </div>
                <div className="w-full">{children}</div>
                <Blur />
            </div>
        </section>
    );
}

export default Searcher;
