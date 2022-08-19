import * as React from "react";
import VideoContextWrapper from "./VideoContext/VideoContextWrapper";

type ContextWrapperProps = {
  children: React.ReactNode;
};

const ContextWrapper = ({ children }: ContextWrapperProps) => {
  return <VideoContextWrapper>{children}</VideoContextWrapper>;
};

export default ContextWrapper;
