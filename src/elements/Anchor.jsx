export function Anchor({ href, target, children }) {
    return (
        <a
            className="flex items-center gap-2 text-white text-center font-bold w-full px-4 py-2 bg-slate-700 border border-transparent outline-none rounded whitespace-nowrap transition-colors hover:bg-slate-600 active:bg-transparent active:border-slate-600 focus-visible:border-slate-600"
            href={href}
            target={target}
        >
            {children}
        </a>
    );
}
