import { asyncStorageKeyMusics } from "@/utils/storage";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";

type Store = {
  downloadedMusics: MusicProps[];
  getDownloadedMusics: () => void;
};

export const useStore = create<Store>((set) => ({
  downloadedMusics: [],
  getDownloadedMusics: async () => {
    const musics = await AsyncStorage.getItem(asyncStorageKeyMusics);
    if (musics) {
      const downloadedMusics = JSON.parse(musics);
      set(() => ({ downloadedMusics }));
    }
  },
}));
