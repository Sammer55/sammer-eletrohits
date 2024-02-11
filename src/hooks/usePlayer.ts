import { Platform } from "react-native";
import getYoutubeUrl from "@/utils/getYoutubeUrl";
import { useEletrohitsStore } from "@/store";
import { Audio } from "expo-av";

const usePlayer = () => {
  const [playingMusic, setMusic] = useEletrohitsStore((state) => [
    state.music,
    state.setMusic,
  ]);

  const handlePlay = async (music: MusicProps) => {
    const videoId = music?.id?.videoId;

    if (!!playingMusic && videoId)
      return await playingMusic?.sound?.playAsync();

    const audioUrl = await getYoutubeUrl(videoId);

    const { sound } = await Audio.Sound.createAsync({
      uri: Platform.OS === "android" ? music?.localStorage : audioUrl,
      type: Platform.OS === "android" ? "audio/webm" : "video/mp4",
    });

    if (sound) {
      await sound.playAsync();
      setMusic({
        ...music,
        sound,
        status: {
          isPlaying: true,
          duration: 0,
          position: 0,
          finished: false,
        },
      });
    }
  };

  return {
    handlePlay,
  };
};

export default usePlayer;
