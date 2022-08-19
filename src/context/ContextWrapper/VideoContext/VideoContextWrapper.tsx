import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { VideoContext, videosList } from "./VideoContext";

// VideoContextWrapper Props
type VideoContextWrapperProps = {
  children: React.ReactNode;
};

const VideoContextWrapper = ({ children }: VideoContextWrapperProps) => {
  const navigate = useNavigate();
  const [videos, setVideos] = useState<videosList[]>([]);

  const setVideosContext = (videoUrl: string) => {
    const video: videosList = { videoUrl };
    setVideos([...videos, video]);
  };

  return (
    <VideoContext.Provider
      value={{
        videos,
        setVideosContext,
      }}
    >
      {children}
    </VideoContext.Provider>
  );
};

export default VideoContextWrapper;
