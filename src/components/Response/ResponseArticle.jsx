export function ResponseArticle({ title, question, response, children }) {
    return (
        <div className="h-full flex flex-col gap-2 bg-slate-800 p-4 rounded">
            <h2 className="flex flex-col gap-1">
                {title}
                <span className="tracking-tighter text-indigo-600 text-xl font-bold">{question}</span>
            </h2>
            <p className="text-white">{response}</p>
            {children}
        </div>
    );
}

export default ResponseArticle;
