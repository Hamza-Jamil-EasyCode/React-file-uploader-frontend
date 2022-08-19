import React, { memo, useContext, useState } from "react";
import toast from "react-hot-toast";
import { NavLink } from "react-router-dom";
import { VideoContext } from "../../context/ContextWrapper/VideoContext/VideoContext";
import { uploadVideo } from "../../utils/upload";

type Props = {};

const UploadVideoForm = (props: Props) => {
  const { setVideosContext } = useContext(VideoContext);
  const [isImageUploading, setIsImageUploading] = useState<boolean>(false);

  const imageHandler = async (e: any) => {
    setIsImageUploading(true);

    const file = e.target.files[0];

    if (!file) return;

    try {
      const formData = new FormData();
      formData.append("file", file);

      const resp = await uploadVideo(formData);
      const {
        data: { message, url },
      } = resp;

      toast.success(message);
      setVideosContext?.(url);
      console.log(resp);
    } catch (error: any) {
      toast.error(error?.response?.data?.message || error?.message || error);
    } finally {
      setTimeout(() => {
        setIsImageUploading(false);
      }, 200);
      e.target.value = "";
    }
  };

  const openVideoInput = () => {
    const element: HTMLElement = document.getElementById("video")!;
    element.click();
  };

  return (
    <div className="upload">
      <div className="upload_video">
        {isImageUploading ? (
          <span
            className="spinner-border spinner-border-sm mx-3"
            role="status"
            aria-hidden="true"
          />
        ) : (
          <h1 className="title" onClick={openVideoInput}>
            Upload Video
          </h1>
        )}
        <input
          name="video"
          id="video"
          type="file"
          onChange={imageHandler}
          accept="video/mp4"
        />
      </div>

      <NavLink to="/" className="link" >View all videos</NavLink>
    </div>
  );
};

export default UploadVideoForm;
