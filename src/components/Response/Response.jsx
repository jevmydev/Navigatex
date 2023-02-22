import ResponseSection from "./ResponseSection";
import ResponseError from "./ResponseError";

export function Response({ isFirstRender, question, response, error }) {
    const choice = response?.choices[0];
    let responseText = choice?.text;

    return responseText && error === null ? <ResponseSection question={question} response={responseText} /> : <ResponseError isFirstRender={isFirstRender} />;
}

export default Response;
