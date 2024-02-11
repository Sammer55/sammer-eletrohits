import * as C from "./styles";
import getYoutubeUrl from "@/utils/getYoutubeUrl";
import useDownload from "@/hooks/useDownload";
import { useEletrohitsStore } from "@/store";
import ProgressBar from "../progressBar";
import usePlayer from "@/hooks/usePlayer";

type Props = {
  item: MusicProps;
};

const Music = ({ item }: Props) => {
  const { snippet } = item;
  const videoId = item?.id?.videoId;

  const [downloadedMusics, getDownloadedMusics, setMusicToRemove] =
    useEletrohitsStore((state) => [
      state.downloadedMusics,
      state.getDownloadedMusics,
      state.setMusicToRemove,
    ]);
  const { progress, handleDownloadMusic } = useDownload();

  const { handlePlay } = usePlayer();

  const localMusic = downloadedMusics?.find(
    (local) => local?.id?.videoId === videoId
  );

  const isDownloaded = !!localMusic || progress >= 100;

  const inProgress = progress > 0 && progress < 100;

  const handlePress = async () => {
    if (isDownloaded && localMusic?.localStorage) {
      handlePlay(localMusic);
      return;
    }

    const url = await getYoutubeUrl(videoId);
    const response = handleDownloadMusic(url, item);

    if (!!response) getDownloadedMusics();
  };

  const handleDeleteMusic = () => setMusicToRemove(item);

  return (
    <C.Wrapper onPress={handlePress} disabled={!!inProgress}>
      <C.Content>
        <C.WrapperImage>
          <C.Image source={{ uri: snippet?.thumbnails?.default?.url }} />
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
