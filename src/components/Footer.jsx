import { Anchor } from "../elements/Anchor";

export function Footer() {
    return (
        <footer>
            <div className="max-w-screen-sm mt-32 mx-auto flex flex-col items-center gap-4">
                <p>Desarrollado moviendo las manitas y con mucho amor</p>
                <div className="flex items-center gap-4">
                    <Anchor href="https://jeremydiaz.netlify.app/" target="_blank">
                        Creado por jevmydev
                    </Anchor>
                    <Anchor href="https://github.com/jevmydev/navigatex" target="_blank">
                        Código abierto
                    </Anchor>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
