import React from "react";
import VideoCard from "./Videocard";
import { videos } from "../data/videos";

export default function VideoGrid() {
  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 p-4">
      {videos.map((video) => (
        <div key={video.id} className="w-full h-full">
          <VideoCard {...video} />
        </div>
      ))}
    </div>
  );
}
