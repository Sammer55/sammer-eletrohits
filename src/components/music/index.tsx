import * as C from "./styles";

type Props = {
  item: MusicProps;
};

const Music = ({ item }: Props) => {
  const { snippet } = item;

  return (
    <C.Wrapper>
      <C.Image source={snippet?.thumbnails?.default} />
      <C.WrapperText>
        <C.ChannelName>{snippet?.channelTitle}</C.ChannelName>
        <C.Name>{snippet?.title}</C.Name>
      </C.WrapperText>
    </C.Wrapper>
  );
};

export default Music;
