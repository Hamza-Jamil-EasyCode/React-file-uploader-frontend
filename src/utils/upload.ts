import { API_ENDPOINTS } from "../api/API_ENDPOINTS";
import { backend } from "../api/request";

const urlForUploadVideo: string = API_ENDPOINTS.UPLOAD.UPLOAD_VIDEO;

export const uploadVideo = async (uploadData: any) =>
  await backend({
    method: "POST",
    url: `${urlForUploadVideo}`,
    data: uploadData,
  });
