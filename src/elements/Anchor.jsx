export function Anchor({ href, children }) {
    return (
        <a className="px-4 py-2 bg-slate-700 rounded-full transition-colors hover:bg-slate-600 active:bg-transparent active:border-slate-600 focus-visible:border-slate-600" href={href}>
            {children}
        </a>
    );
}
