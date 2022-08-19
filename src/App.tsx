// react imports
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import UploadVideoForm from "./components/Upload/UploadVideoForm";
import VideosList from "./components/Videos/VideosList";

interface IAppProps {}

const App = (props: IAppProps) => {
  return (
    <Routes>
      <Route path="/" element={<VideosList />} />
      <Route path="/upload" element={<UploadVideoForm />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default App;
