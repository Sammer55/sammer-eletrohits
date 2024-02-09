import Header from "@/components/header";
import * as C from "./styles";
import Input from "@/components/input";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Octicons } from "@expo/vector-icons";
import { useTheme } from "styled-components";
import { FlatList, View } from "react-native";
import { getVideosBySearch } from "@/api";
import Music from "@/components/music";
import useDownload from "@/hooks/useDownload";
import Alert from "@/components/alert";
import { useStore } from "@/store";

type RenderItemProps = {
  item: MusicProps;
};

const HomeScreen = () => {
  const [search, setSearch] = useState<string | undefined>("aklipe");
  const [musics, setMusics] = useState<MusicProps[] | []>([]);
  const [removingMusic, setRemovingMusic] = useState<MusicProps | null>(null);

  const { colors } = useTheme();
  const { handleRemoveDownload } = useDownload();
  const { downloadedMusics, getDownloadedMusics } = useStore();

  const handleDeleteMusic = async () => {
    if (!removingMusic) return;

    const response = await handleRemoveDownload(removingMusic);

    if (response) {
      setRemovingMusic(null);
      getDownloadedMusics();
    }
  };

  const renderItem = ({ item }: RenderItemProps) => (
    <Music
      localMusics={downloadedMusics || []}
      item={item}
      handleRemoveDownload={setRemovingMusic}
    />
  );

  const getVideos = async () => {
    if (search) {
      const response = await getVideosBySearch({ search });
      setMusics(response);
    }
  };

  useEffect(() => {
    getVideos();
  }, []);

  useEffect(() => {
    getDownloadedMusics();
  }, []);

  return (
    <C.Wrapper>
      <Header title="Home" />
      <C.WrapperSearch>
        <Input
          onChangeText={setSearch}
          value={search}
          placeholder="Pesquisar..."
        />
        <C.SearchButton disabled={!search} onPress={() => {}}>
          <Octicons
            name="search"
            size={18}
            color={!search ? colors.border : colors.black}
          />
        </C.SearchButton>
      </C.WrapperSearch>

      <FlatList
        // ListHeaderComponent={}
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
          handleClose={() => setRemovingMusic(null)}
          image={require("assets/trash.png")}
        />
      )}
    </C.Wrapper>
  );
};

export default HomeScreen;
