"use client";
import React from "react";

export const CloudinaryUpload: React.FC<{
  setFile: React.Dispatch<React.SetStateAction<File | null>>;
  setImage: React.Dispatch<React.SetStateAction<string | null>>;
}> = ({ setFile, setImage }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);

      const imgPreview = URL.createObjectURL(e.target.files[0]);
      setImage(imgPreview);
    } else setFile(null);
  };

  return (
    <div className="flex flex-col gap-4 items-center">
      <input type="file" onChange={handleChange} accept="image/*" />
    </div>
  );
};
