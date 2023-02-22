import { Button } from "../../elements/Button";
import { SendIcon, MicIcon, MicMuteIcon, CloseIcon } from "../../elements/Icons";

export function SearcherVoice({ searchVoice, isSpeaking, handleClickSearchVoice, updateSearchVoice, setOpenVoiceModal }) {
    const classNameStateButton = isSpeaking ? "outline-1 outline-red-600" : "";
    const onClickButton = searchVoice ? handleClickSearchVoice : updateSearchVoice;

    return (
        <div className="backdrop-blur-md fixed top-0 left-0 w-full h-full z-20 flex items-center justify-center">
            <div className="relative flex flex-col gap-4 justify-center items-center bg-slate-900 max-w-lg p-4 mx-4 rounded">
                <div className="absolute top-4 right-4">
                    <Button onClick={setOpenVoiceModal}>
                        <CloseIcon />
                    </Button>
                </div>
                <div className="mt-14">
                    <Button classNameState={classNameStateButton} onClick={onClickButton}>
                        {isSpeaking ? searchVoice ? <SendIcon width="w-32" height="h-10" /> : <MicIcon width="w-32" height="h-10" /> : <MicMuteIcon width="w-32" height="h-10" />}
                    </Button>
                </div>
                <div>{isSpeaking && <p>{searchVoice ? searchVoice : "Escuchando..."}</p>}</div>
            </div>
        </div>
    );
}

export default SearcherVoice;
