import { Anchor } from "../elements/Anchor";

export function ResponseArticle({ title, response, children }) {
    return (
        <div className="flex flex-col gap-2 bg-slate-800 p-4 rounded">
            <h2 className="tracking-tighter text-indigo-600 text-xl font-bold">{title}</h2>
            <p>{response}</p>
            {children}
        </div>
    );
}

export function Response({ titleQuestion, response }) {
    const { text } = response.choices[0];

    return (
        <section>
            <div className="flex justify-between gap-4 font-light">
                <div className="flex flex-1 flex-col gap-2">
                    <ResponseArticle title={titleQuestion} response={text} />
                </div>
                {/* <div className="flex flex-col gap-2">
                    <ResponseArticle title={"Artículos sobre: ¿Cúal es la capítal de España?"} response={"Interesantes para tí: "}>
                        <Anchor href="#">Ir a Google</Anchor>
                        <Anchor href="#">Tumadre.com</Anchor>
                        <Anchor href="#">xd</Anchor>
                    </ResponseArticle>
                </div> */}
            </div>
        </section>
    );
}

export default Response;
