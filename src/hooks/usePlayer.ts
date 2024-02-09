import { useEletrohitsStore } from "@/store";
import { Audio } from "expo-av";

const usePlayer = () => {
  const { setMusic } = useEletrohitsStore();

  const handlePlay = async (music: MusicProps) => {
    if (!music?.localStorage) return;

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
  };
};

export default usePlayer;
