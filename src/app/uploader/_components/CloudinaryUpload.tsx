"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useState } from "react";

export const CloudinaryUpload: React.FC<{
  onUpload: (url: string) => void;
}> = ({ onUpload }) => {
  const PRESET_NAME = "food-delivery";
  const CLOUDINARY_NAME = "dagcnqvlx";

  const [file, setFile] = useState<File | null>(null);
  const [image, setImage] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  const imageUpload = async () => {
    if (!file) {
      alert("Please select a file");
      return;
    }

    setLoading(true);
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", PRESET_NAME);

    try {
      const res = await fetch(
        `https://api.cloudinary.com/v1_1/${CLOUDINARY_NAME}/image/upload`,
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await res.json();
      setImage(data.secure_url);
      onUpload(data.secure_url); // Send image URL to parent component
    } catch (err) {
      console.error("Upload failed:", err);
      alert("Failed to upload file");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-4 items-center">
      <input type="file" onChange={handleChange} accept="image/*" />
      <Button onClick={imageUpload} disabled={!file || loading}>
        {loading ? "Uploading..." : "Upload"}
      </Button>

      {image && (
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
      )}
    </div>
  );
};
