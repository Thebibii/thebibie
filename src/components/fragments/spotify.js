import { FaSpotify } from "react-icons/fa";

async function fetchData() {
  try {
    const data = await fetch(
      "https://api.lanyard.rest/v1/users/754746907397718167",
      {
        cache: "no-cache",
      }
    );
    if (!data.ok) throw new Error("Failed to fetch");
    return await data.json();
  } catch (err) {
    console.error("Error fetching data:", err);
  }
}

export default async function Spotify() {
  const spotify = await fetchData();

  return (
    <div className="flex items-center px-4 py-3 gap-x-4 rounded-3xl bg-white/20 ring-1 ring-black/5 isolate w-fit">
      <div className="min-w-9">
        <FaSpotify className="fill-white/80 size-full" />
      </div>
      <div className="flex flex-col font-poppins">
        <p className="text-sm font-medium text-white">
          {spotify?.data?.listening_to_spotify
            ? "Currently playing"
            : "No playing sound"}
        </p>
        <p className="text-xs font-medium truncate text-white/60 hover:text-clip text-wrap">
          {spotify?.data?.listening_to_spotify
            ? `${spotify.data.spotify.artist} - ${spotify.data.spotify.song}`
            : "-"}
        </p>
      </div>
    </div>
  );
}
