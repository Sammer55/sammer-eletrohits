import * as C from "./styles";
import { Keyboard, ScrollView } from "react-native";
import { useEletrohitsStore } from "@/store";
import Slider from "./slider";

const MusicPlayer = () => {
  const music = useEletrohitsStore((state) => state.music);

  return (
    <C.Wrapper isHidden={!music?.sound || Keyboard.isVisible()}>
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
            <C.WrapperText>
              <C.ChannelName>{music?.snippet?.channelTitle}</C.ChannelName>
              <C.Text>{music?.snippet?.title}</C.Text>
            </C.WrapperText>
          </ScrollView>
        </C.WrapperMusic>
      </C.WrapperSound>
      <C.Actions>
        <Slider />
      </C.Actions>
    </C.Wrapper>
  );
};

export default MusicPlayer;
