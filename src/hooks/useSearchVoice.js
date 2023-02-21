import { useState } from "react";

export function useSearchVoice() {
    const [searchVoice, setSearchVoice] = useState(null);
    const [openSearchVoice, setOpenSearchVoice] = useState(false);
    const [isVoice, setIsVoice] = useState(false);

    const toggleVoiceModal = () => setOpenSearchVoice(!openSearchVoice);

    const updateSearchVoice = () => {
        const recognition = new window.webkitSpeechRecognition();
        recognition.lang = "es-ES";
        recognition.continuous = true;

        const newVoice = !isVoice;
        setIsVoice(newVoice);

        if (!newVoice) {
            setSearchVoice(null);
            recognition.stop();
            return;
        }

        recognition.onresult = (event) => {
            for (const result of event.results) {
                const { transcript } = result[0];
                setSearchVoice(transcript);
            }
        };

        recognition.onspeechend = () => recognition.stop();
        recognition.start();
    };

    return { searchVoice, isVoice, openSearchVoice, updateSearchVoice, toggleVoiceModal };
}
