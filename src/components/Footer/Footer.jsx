import { Anchor } from "../../elements/Anchor";

export function Footer() {
    return (
        <footer className="bg-slate-800">
            <div className="max-w-screen-sm mx-auto mt-32 p-4 flex items-center gap-4 flex-col">
                <div className="flex flex-col w-full gap-4 md:flex-row">
                    <Anchor href="https://jeremydiaz.netlify.app/" target="_blank">
                        Acerca del creador
                    </Anchor>
                    <Anchor href="https://github.com/jevmydev/navigatex" target="_blank">
                        Código abierto
                    </Anchor>
                </div>
                <div>
                    <p>Desarrollado con mucho amor</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
