import axios from "axios";

const SEARCH_URL = "https://www.googleapis.com/youtube/v3/search";

type SearchType = { search: string };

export const getVideosBySearch = async ({ search }: SearchType) =>
  await axios
    .get(SEARCH_URL, {
      params: {
        part: "snippet",
        q: search,
        // API KEY: YouTube Data API v3 - Google Cloud
        key: "",
        maxResults: 20,
      },
    })
    .then((response) => {
      const items = response.data.items;
      const removeChannels = items.filter(
        (item: MusicProps) => item.kind !== "youtube#channel"
      );

      return removeChannels;
    });
