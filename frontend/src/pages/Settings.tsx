import useSettings from "../hooks/use-settings";

export default function Settings() {
  const { handleImageChange, image } = useSettings();

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Settings</h2>
      <div className="flex items-center gap-4">
        <img
          src={image}
          alt="Profile"
          className="w-24 h-24 rounded-full object-cover border"
        />
        <label className="cursor-pointer">
          <span className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Upload Profile
          </span>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="hidden"
          />
        </label>
      </div>
    </div>
  );
}
