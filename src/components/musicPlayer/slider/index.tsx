import { memo, useEffect, useState } from "react";
import * as C from "./styles";
import { useTheme } from "styled-components";
import { millisToMinutesAndSeconds } from "@/utils/millisToMinutesAndSeconds";
import CommunitySlider from "@react-native-community/slider";
import { useEletrohitsStore } from "@/store";

const Slider = memo(() => {
  const [position, setPosition] = useState<number>(0);

  const { music, setMusic } = useEletrohitsStore();

  const { colors } = useTheme();

  const duration =
    music?.status?.duration &&
    millisToMinutesAndSeconds(music?.status?.duration);

  useEffect(() => {
    if (music?.status && position >= music?.status?.duration) {
      setMusic(null);
      return;
    }

    if (music && music?.status && position <= music?.status?.duration) {
      const timer = setInterval(() => {
        setPosition(position + 1000);
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [music, position]);

  const handleSetPosition = (value: number) => {
    setPosition(value);
    music?.sound?.setPositionAsync(value);
  };

  return (
    <C.Wrapper>
      <C.Time>{position && millisToMinutesAndSeconds(position)}</C.Time>
      <CommunitySlider
        style={{ flex: 1 }}
        minimumValue={0}
        value={position}
        onValueChange={handleSetPosition}
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
