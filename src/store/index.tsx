import AsyncStorage from "@react-native-async-storage/async-storage";
import { asyncStorageKeyMusics } from "@/utils/asyncStorageKeys";
import { create } from "zustand";

type EletrohitsStoreProps = {
  downloadedMusics: MusicProps[];
  getDownloadedMusics: () => Promise<MusicProps[] | []>;

  musicToRemove: null | MusicProps;
  setMusicToRemove: (music: null | MusicProps) => void;

  music: null | MusicProps;
  setMusic: (music: MusicProps | null) => void;

  getMusicStatusAsync: (music: MusicProps) => void;
};

export const useEletrohitsStore = create<EletrohitsStoreProps>((set) => ({
  downloadedMusics: [],
  getDownloadedMusics: async () => {
    const musics = await AsyncStorage.getItem(asyncStorageKeyMusics);
    if (musics) {
      const downloadedMusics = JSON.parse(musics);
      set(() => ({ downloadedMusics }));

      return downloadedMusics;
    }

    return [];
  },

  musicToRemove: null,
  setMusicToRemove: (music) => {
    set(() => ({ musicToRemove: music }));
  },

  music: null,
  setMusic: async (music) => {
    const statusAsync =
      (await music?.sound.getStatusAsync()) as AudioPlayerState;

    const status = {
      finished: statusAsync?.didJustFinish,
      duration: statusAsync?.durationMillis,
      isPlaying: statusAsync?.isPlaying,
      position: statusAsync?.positionMillis,
    };

    return set(() => ({ music: { ...music, status } }));
  },

  getMusicStatusAsync: async (music) => {
    const statusAsync =
      (await music?.sound?.getStatusAsync()) as AudioPlayerState;

    const isFinished =
      statusAsync?.positionMillis >= statusAsync?.durationMillis;

    if (statusAsync?.positionMillis >= statusAsync?.durationMillis) return;

    const status = {
      finished: isFinished,
      duration: statusAsync?.durationMillis,
      isPlaying: statusAsync?.isPlaying,
      position: statusAsync?.positionMillis,
    };

    return set(() => ({ music: { ...music, status } }));
  },
}));
