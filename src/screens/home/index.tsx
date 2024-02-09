import Header from "@/components/header";
import * as C from "./styles";
import Input from "@/components/input";
import { useEffect, useState } from "react";
import { Octicons } from "@expo/vector-icons";
import { useTheme } from "styled-components";
import { FlatList, View } from "react-native";
import { getVideosBySearch } from "@/api";
import Music from "@/components/music";

type RenderItemProps = {
  item: MusicProps;
};

const HomeScreen = () => {
  const [search, setSearch] = useState<string | undefined>("matue");
  const [musics, setMusics] = useState<MusicProps[] | []>([]);

  const { colors } = useTheme();

  const renderItem = ({ item }: RenderItemProps) => <Music item={item} />;

  const getVideos = async () => {
    if (search) {
      // const response = await getVideosBySearch({ search });
      const response = [
        {
          etag: "c8Ty4jvAJh0jZxZtn-P8gHnHMCs",
          id: { kind: "youtube#video", videoId: "rGHJ0mqean4" },
          kind: "youtube#searchResult",
          snippet: {
            channelId: "UCoHV8LxUFKeIvifJsB3c7Ww",
            channelTitle: "30PRAUM",
            description:
              "CONTATO• booking@30praum.com Antes de sair em busca de vingança, cave duas covas. OUÇA CONEXÕES DE MÁFIA ...",
            liveBroadcastContent: "none",
            publishTime: "2023-05-01T00:00:08Z",
            publishedAt: "2023-05-01T00:00:08Z",
            thumbnails: [Object],
            title: "Matuê - Conexões de Máfia feat. Rich the Kid",
          },
        },
        {
          etag: "VxgMwXw40l5lLSjhbuGdBs7v8BA",
          id: { kind: "youtube#video", videoId: "ZPcG9PCfagM" },
          kind: "youtube#searchResult",
          snippet: {
            channelId: "UCoHV8LxUFKeIvifJsB3c7Ww",
            channelTitle: "30PRAUM",
            description: "[MDT VISUAL #7]",
            liveBroadcastContent: "none",
            publishTime: "2020-09-11T01:30:08Z",
            publishedAt: "2020-09-11T01:30:08Z",
            thumbnails: [Object],
            title: "Matuê - Máquina do Tempo",
          },
        },
        {
          etag: "PQ-9wsDjLXxo43bBZiaIAJQTznA",
          id: { kind: "youtube#video", videoId: "KwM4yOwMls4" },
          kind: "youtube#searchResult",
          snippet: {
            channelId: "UCoHV8LxUFKeIvifJsB3c7Ww",
            channelTitle: "30PRAUM",
            description:
              "Dê seu sangue pelo que realmente importa. Dê sua alma pelo que realmente importa. Acesse http://hemotify.com/matue e seja ...",
            liveBroadcastContent: "none",
            publishTime: "2021-08-11T00:00:12Z",
            publishedAt: "2021-08-11T00:00:12Z",
            thumbnails: [Object],
            title: "MATUÊ - QUER VOAR 🩸",
          },
        },
        {
          etag: "NgjLMvo1CNGSzhPSEuVdgh_QsVU",
          id: { kind: "youtube#video", videoId: "d-GgZpCtBXw" },
          kind: "youtube#searchResult",
          snippet: {
            channelId: "UCoHV8LxUFKeIvifJsB3c7Ww",
            channelTitle: "30PRAUM",
            description: "[MDT VISUAL #5]",
            liveBroadcastContent: "none",
            publishTime: "2020-09-11T01:00:11Z",
            publishedAt: "2020-09-11T01:00:11Z",
            thumbnails: [Object],
            title: "Matuê - 777-666",
          },
        },
        {
          etag: "pBooFsO3AVb1VP8mwt23v4u4vCU",
          id: { kind: "youtube#video", videoId: "5Z3-3qbxIN4" },
          kind: "youtube#searchResult",
          snippet: {
            channelId: "UCoHV8LxUFKeIvifJsB3c7Ww",
            channelTitle: "30PRAUM",
            description: "[MDT VISUAL #6]",
            liveBroadcastContent: "none",
            publishTime: "2020-09-11T01:15:11Z",
            publishedAt: "2020-09-11T01:15:11Z",
            thumbnails: [Object],
            title: "Matuê - É Sal",
          },
        },
        {
          etag: "D1hhWc4qaOeyFgGe_b4cnId2iiI",
          id: { kind: "youtube#video", videoId: "m226f2reF28" },
          kind: "youtube#searchResult",
          snippet: {
            channelId: "UCoHV8LxUFKeIvifJsB3c7Ww",
            channelTitle: "30PRAUM",
            description:
              "SPOTIFY: http://spoti.fi/2Al2VLj ITUNES: http://apple.co/2ArEezs Música: Anos Luz Produção Executiva: 30PRAUM Mixagem e ...",
            liveBroadcastContent: "none",
            publishTime: "2017-11-10T15:14:58Z",
            publishedAt: "2017-11-10T15:14:58Z",
            thumbnails: [Object],
            title: "Matuê - Anos Luz 🌠",
          },
        },
        {
          etag: "E1nK8dWqCZMcK7o6IpCHwOzE2no",
          id: { kind: "youtube#video", videoId: "b-PhvPKgWjY" },
          kind: "youtube#searchResult",
          snippet: {
            channelId: "UCoHV8LxUFKeIvifJsB3c7Ww",
            channelTitle: "30PRAUM",
            description:
              "ESSA É MAIS UMA DO SEU QUIRIDIN • booking@30praum.com •",
            liveBroadcastContent: "none",
            publishTime: "2019-09-04T21:00:11Z",
            publishedAt: "2019-09-04T21:00:11Z",
            thumbnails: [Object],
            title: "Matuê - Kenny G",
          },
        },
        {
          etag: "4MlhZwVhsfgXMKzGljoEuUT06Gk",
          id: {
            channelId: "UCYF3HLy2nzDREEE50KbOnKA",
            kind: "youtube#channel",
          },
          kind: "youtube#searchResult",
          snippet: {
            channelId: "UCYF3HLy2nzDREEE50KbOnKA",
            channelTitle: "Matuê - Topic",
            description: "",
            liveBroadcastContent: "none",
            publishTime: "2018-03-07T13:00:58Z",
            publishedAt: "2018-03-07T13:00:58Z",
            thumbnails: [Object],
            title: "Matuê - Topic",
          },
        },
        {
          etag: "4OEPYpy5Wge3xts_-BVWNxFo5PM",
          id: { kind: "youtube#video", videoId: "CUFMfGu1yQc" },
          kind: "youtube#searchResult",
          snippet: {
            channelId: "UCoHV8LxUFKeIvifJsB3c7Ww",
            channelTitle: "30PRAUM",
            description:
              "SPOTIFY: https://spoti.fi/2GCuyGL ITUNES: https://apple.co/2AhiHIv Música: A Morte do Autotune Produção Executiva: 30PRAUM ...",
            liveBroadcastContent: "none",
            publishTime: "2018-12-24T22:57:36Z",
            publishedAt: "2018-12-24T22:57:36Z",
            thumbnails: [Object],
            title: "Matuê - A Morte do Autotune 💔",
          },
        },
        {
          etag: "HMJPNFfxWVfLwnQRJ_ds2Oh40FA",
          id: { kind: "youtube#video", videoId: "spIZM9Nnqa4" },
          kind: "youtube#searchResult",
          snippet: {
            channelId: "UCoHV8LxUFKeIvifJsB3c7Ww",
            channelTitle: "30PRAUM",
            description: "[MDT VISUAL #1]",
            liveBroadcastContent: "none",
            publishTime: "2020-09-11T00:00:12Z",
            publishedAt: "2020-09-11T00:00:12Z",
            thumbnails: [Object],
            title: "Matuê - Cogulândia",
          },
        },
        {
          etag: "5UAqnVY1x0gDTuMiZufo2fKjuOM",
          id: { kind: "youtube#video", videoId: "cMTrUCasbss" },
          kind: "youtube#searchResult",
          snippet: {
            channelId: "UCoHV8LxUFKeIvifJsB3c7Ww",
            channelTitle: "30PRAUM",
            description: "te ganhei otario ... •CONTATO• booking@30praum.com.",
            liveBroadcastContent: "none",
            publishTime: "2021-01-26T22:19:17Z",
            publishedAt: "2021-01-26T22:19:17Z",
            thumbnails: [Object],
            title: "Teto - M4 feat. Matuê",
          },
        },
        {
          etag: "Fi-b_L5koVIrRgyI4_OMJs4gMFY",
          id: { kind: "youtube#video", videoId: "oX8XECzXq58" },
          kind: "youtube#searchResult",
          snippet: {
            channelId: "UCoHV8LxUFKeIvifJsB3c7Ww",
            channelTitle: "30PRAUM",
            description:
              "Compre Já https://www.30praum.com/ https://www.30praum.com/ https://www.30praum.com/ 03/06/2021.",
            liveBroadcastContent: "none",
            publishTime: "2021-06-02T19:02:51Z",
            publishedAt: "2021-06-02T19:02:51Z",
            thumbnails: [Object],
            title: "Lugar Distante - A Coleção",
          },
        },
        {
          etag: "C8xZME7tzuwfTcx5Kj489ytayXE",
          id: { kind: "youtube#video", videoId: "yHqOj8sLl_c" },
          kind: "youtube#searchResult",
          snippet: {
            channelId: "UCoHV8LxUFKeIvifJsB3c7Ww",
            channelTitle: "30PRAUM",
            description: "[MDT VISUAL #2]",
            liveBroadcastContent: "none",
            publishTime: "2020-09-11T00:15:12Z",
            publishedAt: "2020-09-11T00:15:12Z",
            thumbnails: [Object],
            title: "Matuê - Antes",
          },
        },
        {
          etag: "LkljI_LSj5ceeVHiWBNmeaNM-jU",
          id: { kind: "youtube#video", videoId: "BUL7zecHZjA" },
          kind: "youtube#searchResult",
          snippet: {
            channelId: "UCoHV8LxUFKeIvifJsB3c7Ww",
            channelTitle: "30PRAUM",
            description: "[MDT VISUAL #3]",
            liveBroadcastContent: "none",
            publishTime: "2020-09-11T00:30:09Z",
            publishedAt: "2020-09-11T00:30:09Z",
            thumbnails: [Object],
            title: "Matuê - Gorilla Roxo",
          },
        },
        {
          etag: "lPLLztHNYOvRAnEybo1v5d6M0E0",
          id: { kind: "youtube#video", videoId: "J7UxWkUeJk8" },
          kind: "youtube#searchResult",
          snippet: {
            channelId: "UC5o8T-UsVlJjRX2iH1qSKJg",
            channelTitle: "A Radio Rock",
            description:
              "Esse foi o show do Matuê no João Rock 2022 em Ribeirão Preto! SETLIST: 1:02 - Máquina do Tempo 5:05 - Cogulândia 7:15 ...",
            liveBroadcastContent: "none",
            publishTime: "2022-07-21T16:33:08Z",
            publishedAt: "2022-07-21T16:33:08Z",
            thumbnails: [Object],
            title: "Matuê - João Rock 2022 (Show Completo)",
          },
        },
        {
          etag: "GctIuvdi8330kWrHIZa2djZfLBU",
          id: { kind: "youtube#video", videoId: "TKqa-ZXGKYA" },
          kind: "youtube#searchResult",
          snippet: {
            channelId: "UCoHV8LxUFKeIvifJsB3c7Ww",
            channelTitle: "30PRAUM",
            description: "CONTATO• booking@30praum.com.",
            liveBroadcastContent: "none",
            publishTime: "2022-04-02T00:00:12Z",
            publishedAt: "2022-04-02T00:00:12Z",
            thumbnails: [Object],
            title: "Matuê, Teto &amp; WIU - VAMPiro 🧛🏽‍♀️",
          },
        },
        {
          etag: "EvZWAzm6YzxkFoWCmNDfQj9e0wo",
          id: { kind: "youtube#video", videoId: "hCDBXdzI20I" },
          kind: "youtube#searchResult",
          snippet: {
            channelId: "UCoHV8LxUFKeIvifJsB3c7Ww",
            channelTitle: "30PRAUM",
            description:
              "SPOTIFY: http://spoti.fi/2sh3AgH ITUNES: https://apple.co/2BNwyc7 Música: De Peça em Peça Produção Executiva: 30PRAUM ...",
            liveBroadcastContent: "none",
            publishTime: "2018-02-01T15:00:04Z",
            publishedAt: "2018-02-01T15:00:04Z",
            thumbnails: [Object],
            title: "Matuê - De Peça em Peça feat. Knust &amp; Chris Mc",
          },
        },
        {
          etag: "Fegg2VI3RDtD0pxMBIRjoI9sm-s",
          id: { kind: "youtube#video", videoId: "eycuj9jczm0" },
          kind: "youtube#searchResult",
          snippet: {
            channelId: "UCTDT55ZXePU9ljMT3Ektocg",
            channelTitle: "Bagua Records",
            description:
              "Xamã e Matuê - Luxúria Álbum: Pecado Capital Contato: 11 988915126 / contatoxama@baguarecords.com Produção Musical ...",
            liveBroadcastContent: "none",
            publishTime: "2018-05-22T20:15:01Z",
            publishedAt: "2018-05-22T20:15:01Z",
            thumbnails: [Object],
            title: "9. Luxúria - Xamã e Matuê",
          },
        },
        {
          etag: "2MYrzlY8sEIBRA3ZIpY-xQf8YZs",
          id: { kind: "youtube#video", videoId: "kvngE7TfcOM" },
          kind: "youtube#searchResult",
          snippet: {
            channelId: "UCKd9e3BrkQ-dZdalLpOEFJg",
            channelTitle: "Marcos Baroni",
            description:
              "MelhorDia #Matuê #McLeozinhoZS MELHOR DIA 12 | LEVANTA Acompanhe a gente também no insta: ...",
            liveBroadcastContent: "none",
            publishTime: "2023-10-21T20:30:10Z",
            publishedAt: "2023-10-21T20:30:10Z",
            thumbnails: [Object],
            title: "Melhor Dia 12 | Levanta - Matuê, Mc Leozinho ZS e Baroni",
          },
        },
      ] as MusicProps[];
      setMusics(response);
    }
  };

  useEffect(() => {
    getVideos();
  }, []);

  return (
    <C.Wrapper>
      <Header title="Home" />
      <C.WrapperSearch>
        <Input
          onChangeText={setSearch}
          value={search}
          placeholder="Pesquisar..."
        />
        <C.SearchButton disabled={!search} onPress={() => {}}>
          <Octicons
            name="search"
            size={18}
            color={!search ? colors.border : colors.black}
          />
        </C.SearchButton>
      </C.WrapperSearch>

      <FlatList
        // ListHeaderComponent={}
        showsVerticalScrollIndicator={false}
        data={musics}
        contentContainerStyle={{
          flexGrow: 1,
          paddingBottom: 16,
        }}
        keyExtractor={(item) => `${item?.id?.videoId} ${item?.etag}`}
        renderItem={renderItem}
      />
    </C.Wrapper>
  );
};

export default HomeScreen;
