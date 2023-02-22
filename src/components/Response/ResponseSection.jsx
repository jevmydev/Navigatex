import { Anchor } from "../../elements/Anchor";

import ResponseArticle from "./ResponseArticle";

export function ResponseSection({ question, response }) {
    return (
        <section>
            <div className="flex flex-col md:flex-row justify-between gap-4 font-light">
                <div className="flex flex-1 flex-col gap-2">
                    <ResponseArticle title="Respuesta para: " question={question} response={response} />
                </div>
                <div className="flex w-full md:max-w-xs flex-col gap-2">
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

export default ResponseSection;
