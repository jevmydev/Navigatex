export function Anchor({ href, target, children }) {
    return (
        <a
            className="text-white text-center font-bold w-full px-4 py-2 bg-slate-700 border border-transparent outline-none rounded-full whitespace-nowrap transition-colors hover:bg-slate-600 active:bg-transparent active:border-slate-600 focus-visible:border-slate-600"
            href={href}
            target={target}
        >
            {children}
        </a>
    );
}
