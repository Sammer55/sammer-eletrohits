import { Platform } from "react-native";
import ytdl from "react-native-ytdl";

const getYoutubeUrl = async (videoId: string) => {
  const format = Platform.OS === "ios" ? "video" : "audioonly";

  const info = await ytdl.getInfo(videoId);
  const audioFormats = ytdl.filterFormats(info.formats, format);
  const bestAudioFormat = ytdl.chooseFormat(audioFormats, {
    quality: "highestaudio",
  });

  return bestAudioFormat.url;
};

export default getYoutubeUrl;
