import { FavIcon } from "../../elements/Icons";

export function Header() {
    return (
        <header className="fixed w-full z-10 backdrop-blur-md">
            <div className="flex justify-between items-center p-4 max-w-screen-lg mx-auto">
                <a className="border border-transparent rounded-full outline-none focus-visible:border-slate-600" href="/">
                    <picture>
                        <FavIcon />
                    </picture>
                </a>
                {/* <nav>
                    <ul className="flex justify-between items-center gap-4">
                         <li>
                            <Button>
                                <SettingIcon />
                            </Button>
                        </li>
                        <li>
                            <Button onClick={() => {})}>
                                <UserIcon />
                            </Button>
                        </li>
                    </ul>
                </nav> */}
            </div>
        </header>
    );
}

export default Header;
