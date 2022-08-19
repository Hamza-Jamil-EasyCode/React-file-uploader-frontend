import { createContext } from "react";

export interface videosList {
  videoUrl: string;
}

export interface VideoCtx {
  videos: videosList[];
  setVideosContext?: (videoUrl: string) => void;
}

// Initial Values
export const videoContext = {
  videos: [],
};

export const VideoContext = createContext<VideoCtx>(videoContext);
