import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as FileSystem from "expo-file-system";
import { asyncStorageKeyMusics } from "@/utils/storage";

const useDownload = () => {
  const [progress, setProgress] = useState<number>(0);

  const handleVerifyIsDownloaded = async (videoId: string) => {
    const local = await AsyncStorage.getItem(asyncStorageKeyMusics);

    if (local) {
      const localParsed = JSON.parse(local);

      const music = localParsed.find(
        (item: MusicProps) => item.id.videoId === videoId
      );

      return music;
    }
  };

  const getDownloadedMusics = async () => {
    const musics = await AsyncStorage.getItem(asyncStorageKeyMusics);

    if (musics) {
      const musicsParsed = JSON.parse(musics);

      return musicsParsed || [];
    }

    return [];
  };

  const handleDownloadMusic = async (src: string, music: MusicProps) => {
    const callback = (_: FileSystem.DownloadProgressData) => {
      const percent = _.totalBytesWritten / _.totalBytesExpectedToWrite;
      setProgress(percent * 100);
    };

    const dir = FileSystem.documentDirectory + music?.snippet?.title;

    const resume = FileSystem.createDownloadResumable(src, dir, {}, callback);

    const download = await resume.downloadAsync();

    const musics = await getDownloadedMusics();

    const newMusic = {
      ...music,
      localStorage: download?.uri,
      isDownloaded: true,
    };

    const newMusics = JSON.stringify([...musics, newMusic]);

    await AsyncStorage.setItem(asyncStorageKeyMusics, newMusics);

    setProgress(100);

    return true;
  };

  const handleRemoveDownload = async (music: MusicProps) => {
    const title = music?.snippet?.title;

    const dir = FileSystem.documentDirectory + title;
    await FileSystem.deleteAsync(dir);

    const musics = await getDownloadedMusics();

    const filterMusics = musics.filter(
      (item: MusicProps) => item.snippet.title !== title
    );

    const newMusics = JSON.stringify(filterMusics);

    await AsyncStorage.setItem(asyncStorageKeyMusics, newMusics);

    setProgress(0);

    return true;
  };

  return {
    handleVerifyIsDownloaded,
    getDownloadedMusics,
    handleDownloadMusic,
    handleRemoveDownload,
    progress,
  };
};

export default useDownload;
