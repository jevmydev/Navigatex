export function ResponseError({ isFirstRender }) {
    return !isFirstRender && <p className="bg-slate-800 p-4 rounded">Hubo un error al responder. Vuelve a intentarlo.</p>;
}

export default ResponseError;
