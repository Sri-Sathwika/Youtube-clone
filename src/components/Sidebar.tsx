"use client";
import React from "react";
import Image from "next/image";
import {
  Home,
  Flame,
  PlaySquare,
  ListVideo,
  Clock,
  HistoryIcon,
  GraduationCap,
  ThumbsUp,
  ShoppingBag,
  Music,
  Clapperboard,
  Radio,
  Gamepad2,
  Newspaper,
  Trophy,
  Shirt,
  Podcast,
  Settings,
  Flag,
  CircleQuestionMark,
  MessageSquareWarning,
} from "lucide-react";

const Sidebar = ({ collapsed }: { collapsed: boolean }) => {
  const sections = [
    {
      title: "",
      items: [
        { icon: <Home className="w-6 h-6" />, label: "Home" },
        { icon: <Flame className="w-6 h-6" />, label: "Shorts" },
        { icon: <PlaySquare className="w-6 h-6" />, label: "Subscriptions" },
      ],
    },
    {
      title: "You",
      items: [
        { icon: <HistoryIcon className="w-6 h-6" />, label: "History" },
        { icon: <ListVideo className="w-6 h-6" />, label: "Playlists" },
        { icon: <GraduationCap className="w-6 h-6" />, label: "Your Courses" },
        { icon: <Clock className="w-6 h-6" />, label: "Watch Later" },
        { icon: <ThumbsUp className="w-6 h-6" />, label: "Liked videos" },
      ],
    },
    {
      title: "Subscriptions",
      items: [
        {
          icon: (
            <Image
              src="/sub-1.jpg"
              alt="MrBeast"
              width={24}
              height={24}
              className="rounded-full object-cover"
            />
          ),
          label: "MrBeast",
        },
        {
          icon: (
            <Image
              src="/sub-2.jpg"
              alt="T-Series"
              width={24}
              height={24}
              className="rounded-full object-cover"
            />
          ),
          label: "T-Series",
        },
        {
          icon: (
            <Image
              src="/sub-3.jpg"
              alt="TED"
              width={24}
              height={24}
              className="rounded-full object-cover"
            />
          ),
          label: "TED",
        },
        {
          icon: (
            <Image
              src="/sub-4.jpg"
              alt="Cocomelon"
              width={24}
              height={24}
              className="rounded-full object-cover"
            />
          ),
          label: "Cocomelon",
        },
        {
          icon: (
            <Image
              src="/sub-5.jpg"
              alt="Veritasium"
              width={24}
              height={24}
              className="rounded-full object-cover"
            />
          ),
          label: "Veritasium",
        },
        {
          icon: (
            <Image
              src="/sub-6.jpg"
              alt="ZEE"
              width={24}
              height={24}
              className="rounded-full object-cover"
            />
          ),
          label: "ZEE Music Company",
        },
        {
          icon: (
            <Image
              src="/sub-7.jpg"
              alt="5-Minute Crafts"
              width={24}
              height={24}
              className="rounded-full object-cover"
            />
          ),
          label: "5-Minute Crafts",
        },
      ],
    },

    {
      title: "Explore",
      items: [
        { icon: <Flame className="w-6 h-6" />, label: "Trending" },
        { icon: <ShoppingBag className="w-6 h-6" />, label: "Shopping" },
        { icon: <Music className="w-6 h-6" />, label: "Music" },
        { icon: <Clapperboard className="w-6 h-6" />, label: "Movies" },
        { icon: <Radio className="w-6 h-6" />, label: "Live" },
        { icon: <Gamepad2 className="w-6 h-6" />, label: "Gaming" },
        { icon: <Newspaper className="w-6 h-6" />, label: "News" },
        { icon: <Trophy className="w-6 h-6" />, label: "Sports" },
        { icon: <GraduationCap className="w-6 h-6" />, label: "Courses" },
        { icon: <Shirt className="w-6 h-6" />, label: "Fashion & Beauty" },
        { icon: <Podcast className="w-6 h-6" />, label: "Podcasts" },
      ],
    },

    {
      title: "More from YouTube",
      items: [
        {
          icon: (
            <Image
              src="/sub-1.jpg"
              alt="YT Premium"
              width={24}
              height={24}
              className="rounded-full object-cover"
            />
          ),
          label: "YouTube Premium",
        },
        {
          icon: (
            <Image
              src="/sub-2.jpg"
              alt="YT Music"
              width={24}
              height={24}
              className="rounded-full object-cover"
            />
          ),
          label: "YouTube Music",
        },
        {
          icon: (
            <Image
              src="/sub-3.jpg"
              alt="YT Kids"
              width={24}
              height={24}
              className="rounded-full object-cover"
            />
          ),
          label: "YouTube Kids",
        },
      ],
    },

    {
      title: "Explore",
      items: [
        { icon: <Settings className="w-6 h-6" />, label: "Settings" },
        { icon: <Flag className="w-6 h-6" />, label: "Report history" },
        { icon: <CircleQuestionMark className="w-6 h-6" />, label: "Help" },
        {
          icon: <MessageSquareWarning className="w-6 h-6" />,
          label: "Send feedback",
        },
      ],
    },
  ];

  return (
    <aside
      className={`h-screen bg-[#0f0f0f] text-white border-r border-gray-800 hidden md:flex flex-col transition-all duration-300 ${
        collapsed ? "w-20" : "w-72"
      }`}
    >
      <ul className="space-y-4 px-3 py-4 flex-1">
        {sections.map((section, i) => (
          <div key={i} className="space-y-1">
            {!collapsed && (
              <p className="text-xs text-gray-400 px-2 uppercase tracking-wide">
                {section.title}
              </p>
            )}
            {section.items.map((item, index) => (
              <li
                key={index}
                className="flex items-center gap-4 px-3 py-2 rounded-lg hover:bg-[#222] transition cursor-pointer"
              >
                {item.icon}
                {!collapsed && (
                  <span className="text-base font-medium truncate">
                    {item.label}
                  </span>
                )}
              </li>
            ))}
            <div className="border-b border-gray-700 my-3" />
          </div>
        ))}
      </ul>
      {!collapsed && (
        <div className="px-4 pb-4 pt-2 text-xs text-gray-400 space-y-2">
          <div>
            About&nbsp; Press&nbsp; Copyright<br />
            Contact us&nbsp; Creators&nbsp; Advertise<br />
            Developers
          </div>
          <div>
            Terms&nbsp; Privacy&nbsp; Policy &amp; Safety<br />
            How YouTube works<br />
            Test new features
          </div>
          <div className="pt-2 text-[11px] text-gray-600">
            © 2025 Google LLC
          </div>
        </div>
      )}
    </aside>
  );
};

export default Sidebar;
