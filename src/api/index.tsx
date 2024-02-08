import axios from "axios";

const SEARCH_URL = "https://www.googleapis.com/youtube/v3/search";

type SearchType = { search: string };

export const getVideosBySearch = ({ search }: SearchType) =>
  axios
    .get(SEARCH_URL, {
      params: {
        part: "snippet",
        q: search,
        key: process.env.EXPO_PUBLIC_API_URL,
        maxResults: 20,
      },
    })
    .then((response) => response.data.items)
    .catch((e) => console.log(e.response.data));
