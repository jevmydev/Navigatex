import { Anchor } from "../elements/Anchor";

export function ResponseArticle({ title, question, response, children }) {
    return (
        <div className="h-full flex flex-col gap-2 bg-slate-800 p-4 rounded">
            <h2>
                {title}
                <span className="tracking-tighter text-indigo-600 text-xl font-bold">{question}</span>
            </h2>
            <p>{response}</p>
            {children}
        </div>
    );
}

export function ResponseSection({ question, response }) {
    return (
        <section>
            <div className="flex flex-col md:flex-row justify-between gap-4 font-light">
                <div className="flex flex-1 flex-col gap-2">
                    <ResponseArticle title="Respuesta para: " question={question} response={response} />
                </div>
                <div className="flex w-full md:w-80 flex-col gap-2">
                    <ResponseArticle title="Otros recursos para: " question={question} response="Busca más en...">
                        <Anchor href={`https://www.google.com/search?q=${question}`} target="_blank">
                            Google
                        </Anchor>
                        <Anchor href={`https://www.youtube.com/results?search_query=${question}`} target="_blank">
                            Youtube
                        </Anchor>
                        <Anchor href={`https://es.wikipedia.org/wiki/${question}`} target="_blank">
                            Wikipedia
                        </Anchor>
                    </ResponseArticle>
                </div>
            </div>
        </section>
    );
}

export function ResponseError({ isFirstRender }) {
    return !isFirstRender && <p className="bg-slate-800 p-4 rounded">Hubo un error al responder. Vuelve a intentarlo.</p>;
}

export function Response({ isFirstRender, question, response, error }) {
    const choice = response?.choices[0];
    let responseText = choice?.text;

    return responseText && error === null ? <ResponseSection question={question} response={responseText} /> : <ResponseError isFirstRender={isFirstRender} />;
}

export default Response;
