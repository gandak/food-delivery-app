"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useState } from "react";

export const CloudinaryUpload = () => {
  const PRESET_NAME = "food-delivery";
  const CLOUDINARY_NAME = "dagcnqvlx";

  const imageUpload = async (file: File | null) => {
    if (!file) {
      alert("Please select a file");
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", PRESET_NAME);
    formData.append("api_key", CLOUDINARY_NAME);

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
    } catch (err) {
      console.log(err);
      alert("Failed to upload file");
    }
  };
  return (
    <div className="flex flex-col gap-4 items-center">
      <div>
        <input type="file" onChange={handleChange} />
        <Button onClick={imageUpload}>Upload</Button>
      </div>
      {image && (
        <div>
          <Button
            onClick={() => {
              navigator.clipboard.writeText(`${image}`);
            }}
          >
            {image}
          </Button>
        </div>
      )}
    </div>
  );
};
