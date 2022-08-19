import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import {
  VideoContext,
  videosList,
} from "../../context/ContextWrapper/VideoContext/VideoContext";
import Slider from "../Slider/Slider";

type Props = {};

const VideosList = (props: Props) => {
  const { videos } = useContext(VideoContext);
  const navigate = useNavigate();

  const goToUploadVideoForm = () => navigate("/upload");

  const renderVideoBlock = (e: videosList) => {
    return (
      <div className="video" >
        <iframe src={e.videoUrl} frameBorder={0}></iframe>{" "}
      </div>
    );
  };

  const renderVideos = () => {
    return (
      <Slider>
          {videos.map((e: videosList) => renderVideoBlock(e))}
      </Slider>
    );
  };

//   return renderVideos();
  return <div className="video_wrapper">
    <button onClick={goToUploadVideoForm}>Upload Video</button>
    <h1>List of videos</h1>

    {videos?.length ? renderVideos() : <p>No video available</p>}
  </div>
};

export default VideosList;
