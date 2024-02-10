import { useEletrohitsStore } from "@/store";
import { Audio } from "expo-av";

const usePlayer = () => {
  const { music: playingMusic, setMusic } = useEletrohitsStore();

  const handlePause = async () => {
    if (playingMusic) {
      await playingMusic?.sound.playAsync();
    }
  };

  const handlePlay = async (music: MusicProps) => {
    if (!music?.localStorage) return;
    if (music?.status?.isPlaying) return handlePause();

    const { sound } = await Audio.Sound.createAsync({
      uri: music?.localStorage,
      type: "audio/webm",
    });

    if (sound) {
      await sound.playAsync();
    }

    setMusic({ ...music, sound });
  };

  return {
    handlePlay,
    handlePause,
  };
};

export default usePlayer;
