import HeaderUser from "./HeaderUser";

import { Button } from "../../elements/Button";
import { FavIcon, UserIcon } from "../../elements/Icons";
import { useState } from "react";

import { useUser } from "../../hooks/useUser";

export function Header() {
    const [openUser, setOpenUser] = useState(false);
    const { user } = useUser();

    return (
        <header className="fixed w-full z-10 backdrop-blur-md">
            <div className="relative flex justify-between items-center p-4 max-w-screen-lg mx-auto">
                <a className="border border-transparent rounded-full outline-none focus-visible:border-slate-600" href="/">
                    <picture>
                        <FavIcon />
                    </picture>
                </a>
                <nav>
                    <ul className="flex justify-between items-center gap-4">
                        {/* <li>
                            <Button>
                                <SettingIcon />
                            </Button>
                        </li> */}
                        <li>
                            <Button onClick={() => setOpenUser(!openUser)}>
                                {user.icon === "./favicon.ico" ? (
                                    <UserIcon />
                                ) : (
                                    <img className="w-8 h-8 object-cover aspect-square rounded-full" src={user.icon} alt={`Tu nombre de usuario es ${name}`} loading="lazy" decoding="async" />
                                )}
                            </Button>
                        </li>
                    </ul>
                </nav>
                <div className="absolute top-14 right-0 -z-10 p-4">{openUser && <HeaderUser />}</div>
            </div>
        </header>
    );
}

export default Header;
