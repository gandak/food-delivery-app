"use client";
import { Button } from "@/components/ui/button";
import { imageUpload } from "@/util/imageUpload";
import Image from "next/image";
import React, { useState } from "react";

export const CloudinaryUpload: React.FC<{
  onUpload: (url: string) => void;
  setFile: React.Dispatch<React.SetStateAction<File | null>>;
  file: File | null;
}> = ({ onUpload, setFile }) => {
  // const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  // onUpload(data.secure_url); // Send image URL to parent component

  // console.log(imageUrl);

  return (
    <div className="flex flex-col gap-4 items-center">
      <input type="file" onChange={handleChange} accept="image/*" />
      {/* <Button onClick={imageUpload} disabled={!file || loading}>
        {loading ? "Uploading..." : "Upload"}
      </Button> */}

      {/* {image && (
        <div className="flex flex-col items-center">
          <Image
            src={image}
            alt="Uploaded Image"
            width={100}
            height={100}
            className="rounded-md"
          />
          <Button
            onClick={() => navigator.clipboard.writeText(image)}
            className="mt-2"
          >
            Copy Image URL
          </Button>
        </div>
      )} */}
    </div>
  );
};
