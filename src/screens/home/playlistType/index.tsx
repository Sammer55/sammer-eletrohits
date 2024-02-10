import { useState } from "react";
import * as C from "./styles";

export type PlaylistTypeProps = "youtube" | "local";

type Props = {
  onChange: (value: PlaylistTypeProps) => void;
};

const SelectPlaylistType = ({ onChange }: Props) => {
  const [type, setType] = useState<PlaylistTypeProps>("local");

  const isYoutube = type === "youtube";

  const image = isYoutube
    ? require("assets/cd.png")
    : require("assets/computer.png");

  const text = isYoutube
    ? "Acesse as músicas que você fez download do YouTube."
    : "Pesquise por músicas que existem no YouTube.";

  const handleChangeType = () => {
    const newType: PlaylistTypeProps = isYoutube ? "local" : "youtube";
    setType(newType);
    onChange(newType);
  };

  return (
    <C.Button onPress={handleChangeType}>
      <C.Computer source={image} />
      <C.DownloadMusics>{text}</C.DownloadMusics>
    </C.Button>
  );
};

export default SelectPlaylistType;
