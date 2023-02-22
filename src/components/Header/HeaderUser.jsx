import { useId } from "react";

import { Button } from "../../elements/Button";
import { UserIcon, WriteIcon } from "../../elements/Icons";

import { useUser } from "../../hooks/useUser";

import { setStorage } from "../../storage/localStorage";

export function HeaderUser() {
    const inputFileIconId = useId();
    const inputTextNameId = useId();

    const { user, updateUser, clearUser } = useUser();

    const readFileIcon = (fileIcon) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(fileIcon);

        fileReader.onloadend = ({ target }) => {
            const { result } = target;

            const newUser = structuredClone(user);
            newUser.icon = result;

            setStorage({ key: "user", value: newUser });
            updateUser({ user: newUser });
        };
    };

    const getFileIcon = (e) => {
        e.preventDefault();

        const filesFound = e?.target?.files || e?.dataTransfer?.files;
        const fileIcon = filesFound[0];

        if (!fileIcon.type.startsWith("image")) return;

        readFileIcon(fileIcon);
    };

    const getTextName = (e) => {
        e.preventDefault();
        const userName = new FormData(e.target).get("userName");

        const newUser = structuredClone(user);
        newUser.name = userName;

        setStorage({ key: "user", value: newUser });
        updateUser({ user: newUser });
    };

    return (
        <section className="bg-indigo-900 rounded rounded-tr-none p-4 py-4 flex flex-col gap-4">
            <h2 className="tracking-tighter font-bold text-xl text-white">Customiza tu usuario</h2>
            <div className="border border-slate-600 rounded-sm w-full">
                <label className="flex flex-col gap-2 p-4" onDrop={getFileIcon} onDragOver={(e) => e.preventDefault()} htmlFor={inputFileIconId}>
                    <UserIcon />
                    <span>Arrastra una imagen o</span>
                    <Button classNameState="pointer-events-none">Selecciona un archivo</Button>
                    <input className="hidden" onChange={getFileIcon} id={inputFileIconId} type="file" />
                </label>
            </div>
            <div className="border border-slate-600 rounded-sm w-full">
                <form onSubmit={getTextName}>
                    <label className="flex flex-col gap-2 p-4" htmlFor={inputTextNameId}>
                        <WriteIcon />
                        <span>Escribe tu nombre</span>
                        <input
                            className="bg-slate-800 border border-transparent transition-colors outline-none rounded p-2 w-full placeholder:text-slate-400 focus:border-indigo-600"
                            type="text"
                            placeholder="Escribe tu nombre"
                            name="userName"
                            id={inputTextNameId}
                        />
                    </label>
                </form>
            </div>
            <div className="flex flex-col gap-4 p-4 border border-slate-600 rounded-sm w-full">
                <div className="flex items-center justify-between">
                    <span>{user.name}</span>
                    <img className="w-12 h-12 object-cover aspect-square rounded-full" src={user.icon} alt={`Tu nombre de usuario es ${name}`} loading="lazy" decoding="async" />
                </div>
                <div className="flex flex-col w-full">
                    <Button onClick={clearUser}>Restablecer usuario</Button>
                </div>
            </div>
        </section>
    );
}

export default HeaderUser;
