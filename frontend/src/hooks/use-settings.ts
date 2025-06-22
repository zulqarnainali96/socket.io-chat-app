import { useState } from "react";
import apiClient from "../api/apiContext";

const useSettings = () => {
  const [image, setImage] = useState<string>("");

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];

      // 1. Show preview
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl); // local preview

      // 2. Upload to backend
      try {
        const formData = new FormData();
        formData.append("image", file);

        const res = await apiClient.post("/api/v1/upload-file", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });

        if (res.status === 200) {
          console.log("Image uploaded:", res.data.url);
          // Optionally update state with uploaded URL
          // setImage(res.data.url);
        } else {
          console.error("Upload error:", res.data.message || "Unknown error");
        }
      } catch (err) {
        console.error("Upload failed:", err);
      }
    }
  };

  return {
    handleImageChange,
    image,
  };
};

export default useSettings;
