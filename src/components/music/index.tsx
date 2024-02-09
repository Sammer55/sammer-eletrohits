import useDownload from "@/hooks/useDownload";
import ProgressBar from "../progressBar";
import * as C from "./styles";
import getYoutubeUrl from "@/utils/getYoutubeUrl";
import { Audio } from "expo-av";
import { useStore } from "@/store";

type Props = {
  item: MusicProps;
  localMusics?: MusicProps[];
  handleRemoveDownload: (item: MusicProps) => void;
};

const Music = ({ item, localMusics, handleRemoveDownload }: Props) => {
  const { snippet } = item;
  const videoId = item?.id?.videoId;

  const { progress, handleDownloadMusic } = useDownload();
  const { getDownloadedMusics } = useStore();

  const localMusic = localMusics?.find(
    (local) => local?.id?.videoId === videoId
  );

  const isDownloaded = !!localMusic || progress >= 100;

  const inProgress = progress > 0 && progress < 100;

  const handlePress = async () => {
    if (isDownloaded && localMusic?.localStorage) {
      const { sound } = await Audio.Sound.createAsync({
        uri: localMusic?.localStorage,
        type: "audio/webm",
      });

      if (sound) {
        await sound.playAsync();
      }

      return;
    }

    const url = await getYoutubeUrl(videoId);
    const response = handleDownloadMusic(url, item);

    if (!!response) getDownloadedMusics();
  };

  const handleDeleteMusic = () => handleRemoveDownload(item);

  return (
    <C.Wrapper onPress={handlePress} disabled={!!inProgress}>
      <C.Content>
        <C.WrapperImage>
          <C.Image source={snippet?.thumbnails?.default} />
          {isDownloaded && <C.Check source={require("assets/sound.png")} />}
        </C.WrapperImage>
        <C.WrapperTextContent>
          <C.WrapperText>
            <C.ChannelName>{snippet?.channelTitle}</C.ChannelName>
            <C.Name>{snippet?.title}</C.Name>
          </C.WrapperText>
          {isDownloaded && (
            <C.DeleteButton onPress={handleDeleteMusic}>
              <C.DeleteIcon source={require("assets/trash.png")} />
            </C.DeleteButton>
          )}
        </C.WrapperTextContent>
      </C.Content>
      {inProgress && <ProgressBar percent={progress} />}
    </C.Wrapper>
  );
};

export default Music;
