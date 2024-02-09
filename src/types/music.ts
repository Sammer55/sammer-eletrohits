interface VideoId {
  kind: string;
  videoId: string;
}

interface Thumbnails {
  default: any;
  high: any;
  medium: any;
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

interface MusicProps {
  etag: string;
  id: VideoId;
  kind: string;
  snippet: Snippet;
}
