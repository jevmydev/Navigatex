export function Button({ children, type = "button", onClick, classNameState }) {
    return (
        <button
            type={type}
            className={`flex items-center whitespace-nowrap gap-2 bg-slate-800 p-2 border border-transparent outline-none rounded transition-colors hover:bg-slate-700 active:bg-transparent active:border-slate-600 focus-visible:border-slate-600 ${classNameState}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
}
