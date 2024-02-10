interface VideoId {
  kind: string;
  videoId: string;
}

interface ThumbnailImage {
  url: string;
  height: number;
  width: number;
}

interface Thumbnails {
  default: ThumbnailImage;
  high: ThumbnailImage;
  medium: ThumbnailImage;
}

interface Snippet {
  channelId: string;
  channelTitle: string;
  description: string;
  liveBroadcastContent: string;
  publishTime: string;
  publishedAt: string;
  thumbnails: Thumbnails;
  title: string;
}

interface AudioPlayerState {
  androidImplementation: string;
  audioPan: number;
  didJustFinish: boolean;
  durationMillis: number;
  isBuffering: boolean;
  isLoaded: boolean;
  isLooping: boolean;
  isMuted: boolean;
  isPlaying: boolean;
  playableDurationMillis: number;
  positionMillis: number;
  progressUpdateIntervalMillis: number;
  rate: number;
  shouldCorrectPitch: boolean;
  shouldPlay: boolean;
  uri: string;
  volume: number;
}

interface MusicStatus {
  finished: boolean;
  duration: number;
  isPlaying: boolean;
  position: number;
}

interface MusicProps {
  etag: string;
  id: VideoId;
  kind: string;
  snippet: Snippet;
  isDownloaded?: boolean;
  localStorage?: string;
  sound?: any;
  status?: MusicStatus;
}
