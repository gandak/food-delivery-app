"use client";
import { useState } from "react";

export const imageUpload = async (file: File | null) => {
  //   const [imageUrl, setImage] = useState<string | null>(null);

  if (!file) {
    alert("Please select a file");
    return;
  }

  const PRESET_NAME = "food-delivery";
  const CLOUDINARY_NAME = "dagcnqvlx";

  //   setLoading(true);
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
    // setImage(data.secure_url);
    return data.secure_url;
  } catch (err) {
    console.error("Upload failed:", err);
    alert("Failed to upload file");
  } finally {
    // setLoading(false);
  }
};
