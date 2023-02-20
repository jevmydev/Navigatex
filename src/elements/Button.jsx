export function Button({ children }) {
    return (
        <button className="bg-slate-800 p-2 border border-transparent outline-none rounded-full transition-colors hover:bg-slate-700 active:bg-transparent active:border-slate-600 focus-visible:border-slate-600">
            {children}
        </button>
    );
}
