// src/app/watch/[id]/page.tsx
import { videos } from "@/data/videos";
import { notFound } from "next/navigation";

export default function WatchPage({ params }: { params: { id: string } }) {
  const video = videos.find((v) => v.id === params.id);

  if (!video) return notFound();

  return (
    <div className="p-4 flex flex-col gap-4 items-center">
      <div className="w-full max-w-4xl aspect-video">
        <iframe
          className="w-full h-full rounded-lg"
          src={video.videoUrl}
          title={video.title}
          frameBorder="0"
          allowFullScreen
        />
      </div>
      <div className="max-w-4xl w-full">
        <h1 className="text-2xl font-bold">{video.title}</h1>
        <p className="text-gray-500">{video.channel}</p>
        <p className="text-gray-500">{video.views} • {video.timestamp}</p>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return videos.map((video) => ({
    id: video.id,
  }));
}
