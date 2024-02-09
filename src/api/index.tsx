import axios from "axios";

const SEARCH_URL = "https://www.googleapis.com/youtube/v3/search";

type SearchType = { search: string };

export const getVideosBySearch = async ({ search }: SearchType) =>
  await axios
    .get(SEARCH_URL, {
      params: {
        part: "snippet",
        q: search,
        // key: process.env.EXPO_PUBLIC_API_URL,
        key: "AIzaSyBqY-Snm-V8iDsJoPVJLAyyogdABtNaYSE",
        maxResults: 20,
      },
    })
    .then((response) => {
      const items = response.data.items;
      const removeChannels = items.filter(
        (item: MusicProps) => item.kind !== "youtube#channel"
      );

      return removeChannels;
    })
    .catch((e) => console.log(e.response.data));
