import { useEffect, useState } from "react";
import { FlatList } from "react-native";
import * as C from "./styles";
import MusicPlayer from "@/components/musicPlayer";
import useDownload from "@/hooks/useDownload";
import { useEletrohitsStore } from "@/store";
import { getVideosBySearch } from "@/api";
import Header from "@/components/header";
import Music from "@/components/music";
import Alert from "@/components/alert";
import Search from "./search";
import Loading from "@/components/loading";
import SelectPlaylistType, { PlaylistTypeProps } from "./playlistType";

type RenderItemProps = {
  item: MusicProps;
};

const HomeScreen = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [musics, setMusics] = useState<MusicProps[] | []>([]);

  const { handleRemoveDownload } = useDownload();

  const [
    downloadedMusics,
    getDownloadedMusics,
    setMusicToRemove,
    removingMusic,
  ] = useEletrohitsStore((state) => [
    state.downloadedMusics,
    state.getDownloadedMusics,
    state.setMusicToRemove,
    state.musicToRemove,
  ]);

  const handleDeleteMusic = async () => {
    if (!removingMusic) return;

    const response = await handleRemoveDownload(removingMusic);

    if (response) {
      setMusicToRemove(null);
      getDownloadedMusics();
    }
  };

  const renderItem = ({ item }: RenderItemProps) => <Music item={item} />;

  const handleSearch = async (search?: string) => {
    if (search) {
      setIsLoading(true);

      const response = await getVideosBySearch({ search }).finally(() =>
        setIsLoading(false)
      );

      setMusics(response);
    }
  };

  const handleChangePlaylistType = (type: PlaylistTypeProps) => {
    if (type === "local") return setMusics(downloadedMusics);
    if (type === "youtube") return handleSearch("the 1975 robbers");
  };

  const handleGetDownloadedMusics = async () =>
    await getDownloadedMusics().then((response: MusicProps[] | []) =>
      setMusics(response)
    );

  useEffect(() => {
    handleGetDownloadedMusics();
  }, []);

  return (
    <C.Wrapper>
      <Header title="Home - Sammer Eletrohits" />
      <Search handleSearch={handleSearch} />

      <SelectPlaylistType onChange={handleChangePlaylistType} />

      {isLoading && <Loading text="Carregando músicas" />}

      {!isLoading && (
        <FlatList
          showsVerticalScrollIndicator={false}
          data={musics}
          contentContainerStyle={{
            flexGrow: 1,
            paddingBottom: 116,
          }}
          keyExtractor={(item, index) =>
            `${item?.id?.videoId} ${index?.toString()}`
          }
          renderItem={renderItem}
        />
      )}

      {!!removingMusic && (
        <Alert
          title="Remover download"
          question={`Tem certeza que deseja remover "${removingMusic?.snippet?.title}" da sua playlist?`}
          isVisible={!!removingMusic}
          handleConfirm={handleDeleteMusic}
          handleClose={() => setMusicToRemove(null)}
          image={require("assets/trash.png")}
        />
      )}

      <MusicPlayer />
    </C.Wrapper>
  );
};

export default HomeScreen;
