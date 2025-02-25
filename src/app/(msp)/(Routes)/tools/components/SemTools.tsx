"use client";
import { useState } from "react";
import { uploadImageToAWS } from "../actions/image_submit";

export default function SemTools() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [inputValue, setInputValue] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [result, setResult] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setImageFile(file);
      setSelectedImage(URL.createObjectURL(file)); // ✅ Store image preview URL
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!imageFile) {
      alert("Please select an image first.");
      return;
    }

    setLoading(true);
    try {
      const response = await uploadImageToAWS(imageFile);
      setResult(response);
    } catch (error) {
      alert(error instanceof Error ? error.message : "Upload failed");
    }
    setLoading(false);
  };

  return (
    <div className="flex justify-center items-center mt-4 p-4 bg-gray-100 dark:bg-trueGray-900">
      <div className="flex flex-col lg:flex-row space-y-6 lg:gap-12 lg:space-y-0 lg:space-x-8 max-w-5xl w-full bg-gray-100 dark:bg-gray-800 rounded-xl p-6">
        {/* Left Section - CV-Optical Density Predictor */}
        <div className="flex-1 p-4 dark:bg-gray-800 bg-gray-100">
          <h2 className="text-xl font-semibold text-black dark:text-white text-center">
            Sem-Optical Density (OD) Predictor
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 text-center italic">
            Upload an image to predict optical density. Ensure clarity and
            focus.
          </p>
          <div className="flex flex-col items-center space-y-4 bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col items-center space-y-4 w-full"
            >
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="border border-gray-300 dark:border-gray-600 p-2 rounded-md w-full text-sm file:mr-2 file:py-1 file:px-3 file:border-0 file:text-white file:bg-blue-600 file:rounded-lg hover:file:bg-blue-700"
              />
              {selectedImage && (
                <img
                  src={selectedImage} // ✅ Use selectedImage
                  alt="Image Preview"
                  className="max-w-[120px] rounded-md shadow-md"
                />
              )}
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                disabled={loading}
              >
                {loading ? "Processing..." : "Upload and Predict"}
              </button>
            </form>

            {result !== null && (
              <div className="text-center bg-white dark:bg-gray-700 p-4 rounded-md shadow-md mt-4 w-full">
                <p className="text-lg font-semibold text-gray-800 dark:text-white">
                  Optical Density (OD):{" "}
                  <span className="text-blue-600">{result.toFixed(2)}</span>
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Right Section - CV-Image Generator */}
        <div className="flex-1 p-4">
          <h2 className="text-xl font-semibold text-black dark:text-white text-center">
            Sem-Image Generator
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 text-center italic">
            Generate microscopic images from input Optical Density (OD). (coming
            soon)
          </p>
          <form className="mt-4 flex flex-col items-center space-y-4">
            <input
              type="text"
              placeholder="Enter Optical Density (OD)"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="border border-gray-300 dark:border-gray-600 p-2 rounded-md w-full text-sm text-center"
            />
            <button
              type="submit"
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
            >
              Generate Image
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
