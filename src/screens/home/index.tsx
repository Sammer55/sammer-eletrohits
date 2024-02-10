import Header from "@/components/header";
import * as C from "./styles";
import { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { getVideosBySearch } from "@/api";
import Music from "@/components/music";
import useDownload from "@/hooks/useDownload";
import Alert from "@/components/alert";
import { useEletrohitsStore } from "@/store";
import Search from "./search";
import MusicPlayer from "@/components/musicPlayer";

type RenderItemProps = {
  item: MusicProps;
};

const HomeScreen = () => {
  const [musics, setMusics] = useState<MusicProps[] | []>([]);

  const { handleRemoveDownload } = useDownload();
  const {
    getDownloadedMusics,
    setMusicToRemove,
    musicToRemove: removingMusic,
  } = useEletrohitsStore();

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
      const response = await getVideosBySearch({ search });
      setMusics(response);
    }
  };

  useEffect(() => {
    handleSearch();
  }, []);

  useEffect(() => {
    getDownloadedMusics();
  }, []);

  return (
    <C.Wrapper>
      <Header title="Home" />
      <Search handleSearch={handleSearch} />

      <FlatList
        showsVerticalScrollIndicator={false}
        data={musics}
        contentContainerStyle={{
          flexGrow: 1,
          paddingBottom: 16,
        }}
        keyExtractor={(item) => `${item?.id?.videoId} ${item?.etag}`}
        renderItem={renderItem}
      />

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
