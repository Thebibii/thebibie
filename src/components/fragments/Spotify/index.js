"use client";
import { FaSpotify } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function Spotify() {
  const [spotify, setSpotify] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        let data = await fetch(
          "https://api.lanyard.rest/v1/users/754746907397718167"
        );
        if (!data.ok) throw new Error("Failed to fetch");
        let json = await data.json();
        setSpotify(json);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="flex items-center px-4 py-3 space-x-4 rounded-3xl bg-white/20 ring-1 ring-black/5 isolate w-fit">
      <div className="w-10">
        <FaSpotify className="fill-white/80 size-full" />
      </div>
      <div className="flex flex-col font-poppins">
        <p className="text-sm font-medium text-white">Currently playing</p>
        <p className="text-xs font-medium text-white/60">
          {spotify
            ? `${
                spotify.data.listening_to_spotify
                  ? `${spotify.data.spotify.artist} - ${spotify.data.spotify.song}`
                  : "No song playing"
              }`
            : "Loading..."}
        </p>
      </div>
    </div>
  );
}
