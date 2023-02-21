import { useState } from "react";

export function useSearchVoice() {
    const [searchVoice, setSearchVoice] = useState(null);
    const [isOpenSearchVoice, seIsOpenSearchVoice] = useState(false);
    const [isSpeaking, setIsSpeaking] = useState(false);

    const setOpenVoiceModal = () => seIsOpenSearchVoice(!isOpenSearchVoice);

    const updateSearchVoice = () => {
        const recognition = new window.webkitSpeechRecognition();
        recognition.lang = "es-ES";
        recognition.continuous = true;

        const newIsSpeaking = !isSpeaking;
        setIsSpeaking(newIsSpeaking);

        if (!newIsSpeaking) {
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

    return { searchVoice, isSpeaking, isOpenSearchVoice, setOpenVoiceModal, updateSearchVoice };
}
