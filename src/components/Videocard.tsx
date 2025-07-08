"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import React from "react";

interface VideoProps {
  id: string;
  title: string;
  channel: string;
  views: string;
  timestamp: string;
  thumbnail: string;
}

export default function VideoCard({
  id,
  title,
  channel,
  views,
  timestamp,
  thumbnail,
}: VideoProps) {
  const router = useRouter();

  return (
    <div
      className="w-full h-full cursor-pointer rounded-lg hover:bg-neutral-900 transition duration-200 p-2"
      onClick={() => router.push(`/watch/${id}`)}
    >
      <div className="aspect-video w-full relative">
        <Image
          src={thumbnail}
          alt={title}
          fill
          className="rounded-lg object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="mt-3 space-y-1">
        <h3 className="text-base font-semibold text-white line-clamp-2">
          {title}
        </h3>
        <p className="text-sm text-gray-400">{channel}</p>
        <p className="text-sm text-gray-400">
          {views} • {timestamp}
        </p>
      </div>
    </div>
  );
}
