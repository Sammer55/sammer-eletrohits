import { Keyboard, ScrollView } from "react-native";
import * as C from "./styles";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "styled-components";
import { useEletrohitsStore } from "@/store";
import Slider from "./slider";
import usePlayer from "@/hooks/usePlayer";

const MusicPlayer = () => {
  const { colors } = useTheme();

  const { music } = useEletrohitsStore();

  const { handlePlay } = usePlayer();

  const handlePlayOrPause = () => {
    if (music) handlePlay(music);
  };

  return (
    <C.Wrapper isHidden={!music?.status?.isPlaying || Keyboard.isVisible()}>
      <C.WrapperSound>
        <C.WrapperMusic>
          <C.Image source={{ uri: music?.snippet?.thumbnails?.default?.url }} />
          <ScrollView
            contentContainerStyle={{
              flexGrow: 1,
            }}
            horizontal
            showsHorizontalScrollIndicator={false}
            bounces={false}
          >
            <C.Text>{music?.snippet?.title}</C.Text>
          </ScrollView>
        </C.WrapperMusic>
        <C.PlayerButton onPress={handlePlayOrPause}>
          <Ionicons
            name={music?.status?.isPlaying ? "pause" : "play"}
            size={20}
            color={colors.black}
          />
        </C.PlayerButton>
      </C.WrapperSound>

      <C.Actions>
        <Slider />
      </C.Actions>
    </C.Wrapper>
  );
};

export default MusicPlayer;
