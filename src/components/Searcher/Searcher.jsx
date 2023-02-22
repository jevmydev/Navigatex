import { Blur } from "../../elements/Blur";

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
