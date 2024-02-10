import { useEletrohitsStore } from "@/store";
import * as C from "./styles";
import CommunitySlider from "@react-native-community/slider";
import { millisToMinutesAndSeconds } from "@/utils/millisToMinutesAndSeconds";
import { useTheme } from "styled-components";
import { memo, useEffect } from "react";

const Slider = memo(() => {
  const { music, getMusicStatusAsync } = useEletrohitsStore();

  const { colors } = useTheme();

  const duration =
    music?.status?.duration &&
    millisToMinutesAndSeconds(music?.status?.duration);

  const position =
    music?.status?.position &&
    millisToMinutesAndSeconds(music?.status?.position);

  useEffect(() => {
    if (music) {
      getMusicStatusAsync(music);

      const timer = setInterval(() => {
        getMusicStatusAsync(music);
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [music]);

  return (
    <C.Wrapper>
      <C.Time>{position}</C.Time>
      <CommunitySlider
        style={{ flex: 1 }}
        minimumValue={0}
        value={music?.status?.position}
        onValueChange={(value) => music?.sound?.setPositionAsync(value)}
        maximumValue={music?.status?.duration}
        minimumTrackTintColor={colors.black}
        maximumTrackTintColor={colors.black}
        thumbTintColor={colors.primary}
      />
      <C.Time>{duration}</C.Time>
    </C.Wrapper>
  );
});

export default Slider;
