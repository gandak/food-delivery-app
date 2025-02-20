import React from "react";
import { CloudinaryUpload } from "./_components/CloudinaryUpload";

const imageUploader = () => {
  return (
    <div className="flex w-screen h-screen justify-center items-center">
      <CloudinaryUpload />
    </div>
  );
};

export default imageUploader;
