export function Loading() {
    return (
        <div className="flex flex-col gap-4 animate-pulse">
            <div className="flex gap-4 w-full">
                <div className="bg-slate-800 w-full h-36 rounded"></div>
                <div className="bg-slate-800 w-full h-36 rounded"></div>
            </div>
            <div className="flex w-full">
                <div className="bg-slate-800 w-full h-36 rounded"></div>
            </div>
        </div>
    );
}
